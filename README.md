# voosh-order-api

## Getting Started

## Use POSTMAN to test all the APIs.

### Copy the token received as response after log-in and send it along with the requests in header or in body.

### Copy and paste the routes mentioned below in postman along with the body.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/1AnujJoshi/voosh-order-api.git
   ```
2. Install NPM packages
   ```sh
   npm install dotenv mongoose express bcrypt jsonwebtoken
   ```

### Routes

- POST -- To Sign-Up(send the name, phone, password and confirmPassword through body in x-www-form-urlencoded)

```sh
http://localhost:5000/add-user
```

### All the APIs below are authorized with access Token.

- POST - Login using phone number and password, you will receive a token.

```sh
http://localhost:5000/login-user
```

- POST - Add order by passing phone number, userId and subTotal along with token.

```sh
http://localhost:5000/add-order
```

- GET - get the order details by passing userId along with token.

```sh
http://localhost:5000/get-order
```
