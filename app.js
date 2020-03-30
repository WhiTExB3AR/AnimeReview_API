//Define the dependences
const express = require("express");
const app = express();
const morgan = require("morgan"); //Thông báo status của request trên terminal
//const bodyParser = require("body-parser"); //Cho người dùng nhập thông tin items
const swaggerJsDoc = require("swagger-jsdoc"); //Tạo API doc
const swaggerUi = require("swagger-ui-express"); //Tạo API doc

//Import file routers config ./app/routes/*
//const productRoutes = require("./api/routes/products");
//const orderRoutes = require("./api/routes/orders");
//C2:const users = require("./api/routes/users.route");
const userRoutes = require("./api/routes/users");
const bookRoutes = require("./api/routes/books");

app.use(morgan("dev")); //npm morgan
//npm body-parser
//pp.use(bodyParser.urlencoded({
//  extended: false
//}));
//app.use(bodyParser.json());
//

//Routes which should handle requests
//app.use("/products", productRoutes);
//app.use("/orders", orderRoutes);
//app.use("/users.route", users);
app.use("/users", userRoutes);
app.use("/books", bookRoutes);

//Câu lệnh cho main APIDoc hiện lên đầu tiên
app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Welcome to ANIME REVIEW APIDocs"
  });
});

//sau khi thêm gói body-parser
//Create a header for client have another localhost/IP, such as client 4000<>server 3000
//app.use((req, res, next) => {
//  res.header("Access-Control-Allow-Origin", "*"); //'*' is the value that server allow all client can acces. (Is 'http://playerduo.com' means jusst allow all user in of this client can acces)
//  res.header(
//    "Access-Control-Allow-Headers",
//    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//  ); //'what kind of header will be allow to access the server'
//  if (req.method === "OPTIONS") {
//    res.header("Access-Control-Allow=Methods", "PUT, POST, PATCH, DELETE, GET");
//    return res.status(200).json({});
//  }
//  next();
//});
//

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "ANIME REVIEW APIDocs",
      description: "This is an APIDocs for Anime Review",
      contact: {
        name: "Le Dang Xuan Thuy",
        email: "175211209@gm.uit.edu.vn",
        Phone: "0976684231"
      },
      servers: ["http://locallhost:3000"]
    }
  },
  //Chooser APIDoc start here. (Có thể bắt đàu ở bất kì 1 route nào vd như User.js hoặc Books.js)
  apis: ["app.js"]
};

//Bắt đầu khởi tạo APIDocs trên swagger với các thông tin được khai báo trong swaggerOptions
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
//

//Make APIDocs for all routes

/**
 * @swagger
 * /:
 *  get:
 *    tags: [/]
 *    summary: Return main page status
 *    descripion: Use to Get requesst in main-path http://localhost:3000
 *    responses:
 *      '200':
 *        description: This is an APIDocs for anime review.
 */
/**
 * @swagger
 * /users:
 *  get:
 *    tags: [users]
 *    summary: Fetch a list of all users
 *    description: Use to Get request to path /users
 *    responses:
 *      '200':
 *        description: List of all users
 *  post:
 *    tags: [users]
 *    summary: Create a new user
 *    description: Use to Post request to path /users
 *    responses:
 *      '201':
 *        description: Create a user
 *  put:
 *    tags: [users]
 *    summary: Update a user
 *    description: Use to Put request to path /users
 *    responses:
 *      '200':
 *        description: Update a user
 *  delete:
 *    tags: [users]
 *    summary: Delete a user
 *    description: Use to Delete request to path /users
 *    responses:
 *      '200':
 *        description: Delete a user
 * /users/{userID}:
 *  get:
 *    tags: [users]
 *    summary: Fetch a specific user
 *    description: Use to Get request to path users/{userid}
 *    parameters:
 *    - name: userID
 *      description: Input the {userID}
 *      in: path
 *      required: true
 *      type: string
 *    responses:
 *      '200':
 *        description: Display detail of {userID}
 *  patch:
 *    tags: [users]
 *    summary: Update a specific user
 *    description: Use to Patch request to path users/{userID}
 *    parameters:
 *      - name: userID
 *        description: Input the {userID}
 *        in: path
 *        required: true
 *        tyoe: string
 *    responses:
 *      '200':
 *        description: Display detail of {userID} be changed
 *  delete:
 *    tags: [users]
 *    summary: Delete a specific user
 *    description: Use to Delete request to path /users/{userID}
 *    parameters:
 *      - name: userID
 *        desription: Input the {userID}
 *        in: path
 *        required: true
 *        type: string
 *    responses:
 *      '200':
 *        description: Display announcement that {userID} be deleted
 */
/**
 * @swagger
 * /books:
 *  get:
 *    tags: [books]
 *    summary: Fetch a list of all books
 *    description: Use to Get request to path /books
 *    responses:
 *      '200':
 *        description: List of all books
 *  post:
 *    tags: [books]
 *    summary: Create a new books
 *    description: Use to Post request to path /books
 *    responses:
 *      '201':
 *        description: Create a book
 *  put:
 *    tags: [books]
 *    summary: Update a books
 *    description: Use to Put request to path /books
 *    responses:
 *      '200':
 *        description: Update a books
 *  delete:
 *    tags: [books]
 *    summary: Delete a books
 *    description: Use to Delete request to path /books
 *    responses:
 *      '200':
 *        description: Delete a book
 * /books/{bookID}:
 *  get:
 *    tags: [books]
 *    summary: Fetch a specific book
 *    description: Use to Get request to path books/{bookID}
 *    parameters:
 *    - name: bookID
 *      description: Input the {bookID}
 *      in: path
 *      required: true
 *      type: string
 *    responses:
 *      '200':
 *        description: Display detail of {bookID}
 *  patch:
 *    tags: [books]
 *    summary: Update a specific book
 *    description: Use to Patch request to path books/{bookID}
 *    parameters:
 *      - name: bookID
 *        description: Input the {bookID}
 *        in: path
 *        required: true
 *        tyoe: string
 *    responses:
 *      '200':
 *        description: Display detail of {bookID} be changed
 *  delete:
 *    tags: [books]
 *    summary: Delete a specific book
 *    description: Use to Delete request to path /books/{bookID}
 *    parameters:
 *      - name: bookID
 *        desription: Input the {bookID}
 *        in: path
 *        required: true
 *        type: string
 *    responses:
 *      '200':
 *        description: Display announcement that {bookID} be deleted
 */

//

//Handle all request error 404 into this line above
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

//Handle all function error 500 into this line above
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

/**
//C2: Handle all function error 500 into this line above
//app.use((req, res, next) => {
//  const error = app.get('env') === 'development' ? error : {};
//  res.status(error.status || 500);
  //Response to client
//  res.status(status).json({
//    error: {
//      message: error.message
//    }
//  });
//});
 */

//vd cho get cơ bản
// app.use((req, res, next) =>{
//     res.status(200).json({
//         message: 'It works!'
//     });
// });

//vd cho routers
//app.get((req, res, next) =>{
//      res.status(200).json({
//          message: 'You request homepage'
//      });
//});

//Module export
module.exports = app;
