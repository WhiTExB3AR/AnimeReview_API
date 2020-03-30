//Define the dependences
const express = require("express");
const router = express.Router();

//Content
//không phải là router.get('/products' vì bên app.js đã gọi users rồi
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Users were fetched!"
  });
});

router.post("/", (req, res, next) => {
  //sau khi thêm gói body-parser
  //const user = {
  //  name: req.body.name,
  //  age: req.body.age
  //};
  //
  res.status(201).json({
    message: "Users were created!"
    //sau khi thêm gói body-parser
    //createdUser: user
    //
  });
});

router.put("/", (req, res, next) => {
  res.status(200).json({
    message: "Users were updated!"
  });
});

router.delete("/", (req, res, next) => {
  res.status(200).json({
    message: "Users were deleted!"
  });
});

router.get("/:userID", (req, res, next) => {
  const id = req.params.userID;
  if (id === "special") {
    res.status(200).json({
      message: "You discovered the special ID",
      id: id
    });
  } else {
    res.status(200).json({
      message: "You passed an ID"
    });
  }
});

router.patch("/:userID", (req, res, next) => {
  const id = req.params.userID;
  res.status(200).json({
    id: id,
    message: "Update user!"
  });
});

router.delete("/:userID", (req, res, next) => {
  const id = req.params.userID;
  res.status(200).json({
    id: id,
    message: "Delete user!"
  });
});

//Export module
module.exports = router;
