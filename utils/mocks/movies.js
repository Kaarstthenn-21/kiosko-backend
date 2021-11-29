const moviesMock = [{
    "id": "1fbcb46d-88ad-441f-b315-57525d54ab94",
    "title": "HazMat",
    "year": 1996,
    "cover": "http://dummyimage.com/178x203.png/5fa2dd/ffffff",
    "description": "Fusce consequat. Nulla nisl. Nunc nisl.",
    "duration": 1949,
    "content rating": "PG-13",
    "source": "https://princeton.edu/nisl/nunc.aspx",
    "tags": [
        "Action|Fantasy|Western",
        "Animation|Children|Comedy",
        "Comedy",
        "Comedy|Romance"
    ]
}, {
    "id": "863c1934-4cbc-4ae7-a30b-a85a31a1ef60",
    "title": "Lovers on the Bridge, The (Amants du Pont-Neuf, Les)",
    "year": 1997,
    "cover": "http://dummyimage.com/220x238.png/5fa2dd/ffffff",
    "description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    "duration": 1917,
    "content rating": "NC-17",
    "source": "http://ask.com/varius/ut/blandit.jpg",
    "tags": [
        "Documentary",
        "Adventure|Documentary",
        "Drama|Thriller",
        "Comedy"
    ]
}, {
    "id": "9e41c61b-bf4e-42be-b4b5-0a884950977e",
    "title": "KM 31: Kilometro 31",
    "year": 1988,
    "cover": "http://dummyimage.com/232x117.png/ff4444/ffffff",
    "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    "duration": 1966,
    "content rating": "PG-13",
    "source": "https://sfgate.com/vitae.html",
    "tags": [
        "Documentary",
        "Drama|Thriller"
    ]
}, {
    "id": "12d70408-d34e-4d55-a4b5-40b5fbcf9811",
    "title": "Mountain Patrol (Kekexili)",
    "year": 1998,
    "cover": "http://dummyimage.com/203x123.png/ff4444/ffffff",
    "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    "duration": 1888,
    "content rating": "PG-13",
    "source": "https://cornell.edu/molestie.xml",
    "tags": [
        "Comedy"
    ]
}, {
    "id": "b031aa34-2b01-4d13-83a9-099da54d159e",
    "title": "Entre Amigos (Planta 4ª)",
    "year": 1999,
    "cover": "http://dummyimage.com/112x102.png/ff4444/ffffff",
    "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    "duration": 2038,
    "content rating": "R",
    "source": "https://usda.gov/quis/tortor/id/nulla/ultrices/aliquet/maecenas.js",
    "tags": [
        "Drama|Romance",
        "Comedy",
        "Action|Animation|Sci-Fi",
        "Comedy|Drama"
    ]
}, {
    "id": "6ab21714-50ac-4f3a-b72f-d32344be60e2",
    "title": "Remember the Daze (Beautiful Ordinary, The)",
    "year": 2007,
    "cover": "http://dummyimage.com/224x174.png/dddddd/000000",
    "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    "duration": 2028,
    "content rating": "PG",
    "source": "https://instagram.com/justo/nec/condimentum/neque.jsp",
    "tags": [
        "Documentary",
        "Action|Comedy|Crime",
        "Comedy|Romance",
        "Crime|Drama|Film-Noir|Thriller"
    ]
}, {
    "id": "cd088ec4-f3e6-4503-a224-e39e4cc45a3a",
    "title": "Disneyland Dream",
    "year": 1990,
    "cover": "http://dummyimage.com/195x169.png/dddddd/000000",
    "description": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    "duration": 1934,
    "content rating": "PG-13",
    "source": "http://photobucket.com/eleifend/donec/ut/dolor/morbi/vel.aspx",
    "tags": [
        "Comedy"
    ]
}, {
    "id": "a7ebee09-51b8-456c-9536-d344e4f6b41a",
    "title": "W.C. Fields and Me",
    "year": 2008,
    "cover": "http://dummyimage.com/108x234.png/dddddd/000000",
    "description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    "duration": 2047,
    "content rating": "R",
    "source": "http://google.de/ultrices/mattis/odio/donec.png",
    "tags": [
        "Drama"
    ]
}, {
    "id": "b66cc75d-53c1-4c52-9ffe-40a5af45b65d",
    "title": "Blood Ties",
    "year": 1989,
    "cover": "http://dummyimage.com/144x197.png/dddddd/000000",
    "description": "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    "duration": 1923,
    "content rating": "PG",
    "source": "https://comcast.net/augue/aliquam/erat/volutpat/in.aspx",
    "tags": [
        "Comedy|Drama|Thriller",
        "Documentary"
    ]
}, {
    "id": "5c4f4e65-07f4-4dd1-8aa4-8500ec9df4fe",
    "title": "Blue Like Jazz",
    "year": 1993,
    "cover": "http://dummyimage.com/170x222.png/dddddd/000000",
    "description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    "duration": 1899,
    "content rating": "NC-17",
    "source": "https://ow.ly/feugiat/non/pretium/quis/lectus/suspendisse/potenti.jsp",
    "tags": [
        "Crime|Drama|Mystery|Thriller",
        "Horror",
        "Action|Children|Comedy",
        "Drama|Thriller"
    ]
}]

module.exports = {
    moviesMock
};