# peopleCRUDApp

GET https://test-crud-app.herokuapp.com/users Get all users 
GET https://test-crud-app.herokuapp.com/users/:id Get user by id
PUT https://test-crud-app.herokuapp.com/users Create new user
PATCH https://test-crud-app.herokuapp.com/users/:id Update users by id
DELETE https://test-crud-app.herokuapp.com/users/:id Delete users by id


example:

===================================
GET /users HTTP/1.1
Host: test-crud-app.herokuapp.com
Content-Type: application/json
Content-Length: 178

Response:[
    {
        "id": 3,
        "firstname": "test3",
        "lastname": "test3",
        "location": "UA",
        "email": "test@mail.com",
        "phone": "3809612313112",
        "role": "test",
        "rate": 20
    },
    {
        "id": 4,
        "firstname": "test4",
        "lastname": "test4",
        "location": "UA",
        "email": "test@mail.com",
        "phone": "38096113112",
        "role": "test",
        "rate": 20
    },
    .......
]
====================================
GET /users/3 HTTP/1.1
Host: test-crud-app.herokuapp.com
Content-Type: application/json
Content-Length: 178

Response:{
    "id": 3,
    "firstname": "test3",
    "lastname": "test3",
    "location": "UA",
    "email": "test@mail.com",
    "phone": "3809612313112",
    "role": "test",
    "rate": 20
}
=================================

PUT /users HTTP/1.1
Host: test-crud-app.herokuapp.com
Content-Type: application/json
Content-Length: 178

Body:{
    "firstname": "test5",
    "lastname": "test22222222225",
    "role": "test",
    "location": "UA",
    "phone": 380223423234,
    "rate": 20,
    "email": "test@mail.com"
}

Response
{
    "firstname": "test5",
    "lastname": "test22222222225",
    "role": "test",
    "location": "UA",
    "phone": 380223423234,
    "rate": 20,
    "email": "test@mail.com"
}
======================================
PATCH /users/3 HTTP/1.1
Host: test-crud-app.herokuapp.com
Content-Type: application/json
Content-Length: 176

Body:{
    "firstname": "test5",
    "lastname": "tesqweqwet123",
    "role": "test123123",
    "location": "UA",
    "phone": 380223423234,
    "rate": 20,
    "email": "test@mail.com"
}

Respones:{
    "id": 3,
    "firstname": "test5",
    "lastname": "tesqweqwet123",
    "location": "UA",
    "email": "test@mail.com",
    "phone": 380223423234,
    "role": "test123123",
    "rate": 20
}

=================

DELETE /users/3 HTTP/1.1
Host: test-crud-app.herokuapp.com
Content-Type: application/json
Content-Length: 182

Body:{
    "firstname": "test5",
    "lastname": "tesqweqwet123",
    "role": "test123123",
    "location": "UA",
    "phone": 380223423234,
    "rate": 20,
    "email": "test@mail.com"
}


Response:{
    "status": true,
    "message": "User 3 remove successfully"
}


















