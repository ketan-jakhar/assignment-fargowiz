## To initiate the assignment

```
npm i
```

## To set up MySQL database:

- Please refer `queries.sql` file for the SQL queries as i wasn't able to host the database due to low availability of free mysql database hosting providers.
- Also update the mysql connection configuration in `db.config.js` file accordingly

## To run

```
npm start
```

---

### NOTE: To access `/view` route we first need to create a new user using `/create` and get the `Bearer Token`

---

# Request and Responses

## POST `/create`

### Request body : application/json

### Example Value :

```
{
    "name":"ketan",
    "phoneNumber":9461721651,
    "email":"ketanjakhar29@gmail.com"
}
```

### Responses : application/json

### Example Value :

### Successful Operation

```
{
    "status": "success",
    "data": [
        {
            "UID": "97959988-6ad6-4efd-b436-2cba71829cf5",
            "Name": "ketan",
            "Email": "ketanjakhar29@gmail.com",
            "PhoneNumber": 9461721651
        }
    ],
    "message": "User created successfully",
    "statusCode": 200,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7fSwiaWF0IjoxNjU1ODU4NTE5fQ.kyFYYdtEtpwOIvjtr_8UnNfm0Pmyw1PONn_TYtyAj-k"
}
```

### Error

```
{
    "status": "error",
    "data": null,
    "message": "Duplicate entry 'ketanjakhar29@gmail.com' for key 'users.Email_UNIQUE'",
    "statusCode": 400
}
```

## GET `/view` & `/view?searchInput=query` (search functionality)

- ### `/view`

  ### Responses : application/json

  ### AUTH: Bearer Token

  ### Example Value :

  ### Successful Operation -

  ```
  {
      "status": "success",
      "data": [
          {
              "UID": "07c25d49-5848-435e-94f1-a2d9b28023c4",
              "Name": "ktn",
              "Email": "ketanakkr29@gmail.com",
              "PhoneNumber": 9461723658
          },
          {
              "UID": "63c3d6b4-fa9f-4f3b-9f34-99cea04ae7ac",
              "Name": "ktn",
              "Email": "ketanakhr29@gmail.com",
              "PhoneNumber": 9461722658
          },
          {
              "UID": "e26a67b5-b6dc-4e0f-ab1c-cfc022666680",
              "Name": "ketan",
              "Email": "ketanjakhr29@gmail.com",
              "PhoneNumber": 9461721658
          }
      ],
      "message": "Found 3 results",
      "statusCode": 200
  }
  ```

  ### Error

  ```
  {
      "status": "error",
      "data": null,
      "message": "Use Bearer token authorization",
      "statusCode": 403
  }
  ```

---

- ### `/view?searchInput=query`

  ### Responses : application/json

  ### AUTH: Bearer Token

  ### Example Value :

  ### Successful Operation -

  #### Found result - `/view?searchInput=ktn`

  ```
  {
      "status": "success",
      "data": [
          {
              "UID": "07c25d49-5848-435e-94f1-a2d9b28023c4",
              "Name": "ktn",
              "Email": "ketanakkr29@gmail.com",
              "PhoneNumber": 9461723658
          },
          {
              "UID": "63c3d6b4-fa9f-4f3b-9f34-99cea04ae7ac",
              "Name": "ktn",
              "Email": "ketanakhr29@gmail.com",
              "PhoneNumber": 9461722658
          }
      ],
      "message": "Found 2 results (search)",
      "statusCode": 200
  }
  ```

  #### Not found result -  `/view?searchInput=xyz`

  ```
  {
    "status": "success",
    "data": null,
    "message": "No results found",
    "statusCode": 200
  }
  ```

  ### Error

  ```
  {
      "status": "error",
      "data": null,
      "message": "Use Bearer token authorization",
      "statusCode": 403
  }
  ```
