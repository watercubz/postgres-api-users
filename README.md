# postgres-api-users

```
└── 📁backend-postgres
    └── app.http
    └── app.js
    └── 📁controllers
        └── controller.js
    └── 📁database
        └── postgres.js
        └── postgres.sql
    └── 📁middlewares
        └── cors.js
    └── package-lock.json
    └── package.json
    └── README
```

## Technologies

- Node.js
- Jwt
- Express
- Postgres sql
- Cors
- pg

## Getting Started

1. Make sure you have Node.js installed on your system.
2. Clone this repository: `git clone <URL>`
3. Navigate to the repository directory: `cd <REPO_DIRECTORY>`
4. Install the required dependencies: `npm install`
5. Run the server: `npm run dev`

## download project

> [!TIP]
> To download the project and contribute use the following command

```bash
 git clone https://github.com/watercubz/postgres-api-users.git
```

## Endpoint

- List Users

```bash
 http://localhost:4000/users
```

- Create product

```bash
   http://localhost:3000/api/users/
```

> [!IMPORTANT]
> To create a product you need the following parameters

```json
{
  "name": "pablo",
  "email": "pablocriticas@gmail.com"
}
```

> [!IMPORTANT]
> You have to log in and then with the token make requests to the API

- How to use the token

> [!TIP]
> the token is passed as a header, on the client that wants to make the request

- Update Users

```bash
   http://localhost:4000/api/users/{id}
```

- Delete Users

```bash
   http://localhost:4000/api/users/{id}
```

### Contributing

If you want to contribute to this project, feel free to open an issue or submit a pull request.
