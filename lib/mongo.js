const { MongoClient, ObjectId } = require('mongodb');
const { config } = require('./../config/index');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DBNAME = config.dbName;

// URI CONNECTION
const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${DBNAME}?retryWrites=true&w=majority`;

// Logic connection - actions
class MongoLib {
    constructor() {
        this.client = new MongoClient(MONGO_URI, {
            useNewUrlParser: true
        });
        this.dbName = DBNAME;
    }
    // Integration patron singleton for to avoid multiple connections 
    connect() {
        if (!MongoLib.connection) {
            MongoLib.connection = new Promise((resolve, reject) => {
                this.client.connect(err => {
                    if (err) {
                        reject(err);
                    }
                    console.log('conexion agregada con exito');
                    resolve(this.client.db(this.dbName))
                })
            })
        }
        return MongoLib.connection;
    }

    // Implementation of actions

    getAll(collection, query) {
        return this.connect().then(db => {
            return db.collection(collection).find(query).toArray();
        })
    }

    get(collection, id) {
        return this.connect().then(db => {
            return db.collection(collection).findOne({
                _id: ObjectId(id)
            })
        })
    }
    create(collection, data) {
        return this.connect().then(db => {
            return db.collection(collection).insertOne(data);
        }).then(result => result.insertedId);
    }
    update(collection, id, data) {
        return this.connect().then(db => {
            return db.collection(collection).updateOne({ _id: ObjectId(id) }, { $set: data }, { upsert: true })
        }).then(result => result.upsertedId || id);
    }
    delete(collection, id) {
        return this.connect().then(db => {
            return db.collection(collection).deleteOne({
                _id: ObjectId(id)
            });
        }).then(() => id)
    }
}
module.exports = MongoLib