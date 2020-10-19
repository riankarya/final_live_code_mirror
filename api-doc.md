# hacktiv-garden-server

​
List of available endpoints:
​
- `POST /register`
- `POST /login`
- `GET /plants`
- `POST /favorites/:plantId`
- `GET /favorites`
- `DELETE /favorites/:id`

### POST /register

Request:

- data:

```json
{
  "email": "string",
  "password": "string"
}
```

Response:

- status: 201
- body:
  ​

```json
{
  "id": "integer",
  "email": "string"
}
```

### POST /login

Request:

- data:

```json
{
  "email": "string",
  "password": "string"
}
```

Response:

- status: 200
- body:
  ​

```json
{
    "access_token": "jwt string"
}
```

### GET /plants

description: 
  get all plants from database

Request:

- headers: access_token (string)

Response:

- status: 200
- body:

```json
[
  {
    "id": 1,
    "name": "Happy Cactus",
    "description": "I Can Store An Unbelievable Amount Of Water In A Short Time",
    "imgUrl": "https://images.vexels.com/media/users/3/157784/isolated/preview/bf2d571488a39e11419799c2a29a010d-cute-cactus-by-vexels.png"
  }
]
```

### POST /favorites/:plantId

description: 
  add a plant to user favourite

Request:

- headers: access_token (string)
- params: 
  - plantId: "integer" required


Response:

- status: 201
- body:

```json
{
    "id": "integer",
    "plantId": "integer",
    "userId": "integer"
}
```

### GET /favorites

description: 
  show current user favorite plants

Request:

- headers: access_token (string)

Response:

- status: 200
- body:

```json
[
  {
    "id": "integer",
    "userId": "integer",
    "plantId": "integer",
    "plant": {
      "id": "integer",
      "name": "string",
      "imgUrl": "string",
      "description": "string"
    }
  }
]
```
### DELETE /favorites/:id

description: 
  delete favorite plant

Request:

- headers: access_token (string)
- params: 
  - id: "integer" required

Response:

- status: 200
- body:

```json
{
  "message": "Successfully delete favorite plant"
}
```
