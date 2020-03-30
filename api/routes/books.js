//Define the dependences
const express = require("express");
const router = express.Router();

//Content
//không phải là router.get('/products' vì bên app.js đã gọi books rồi
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Books were fetched!"
  });
});

router.put("/", (req, res, next) => {
  res.status(200).json({
    message: "Books were update!"
  });
});

router.post("/", (req, res, next) => {
  //sau khi thêm gói body-parser
  //const book = {
  //    userID: req.body.userID,
  //    name: req.body.name,
  //    chapter: req.body.chapter,
  //    author: req.body.author
  //};
  //
  res.status(201).json({
    message: "Books were created!"
    //sau khi thêm gói body-parser
    //    createdBook: book
    //
  });
});

router.delete("/", (req, res, next) => {
  res.status(200).json({
    message: "Books were deleted!"
  });
});

router.get("/:bookID", (req, res, next) => {
  const id = req.params.bookID;
  if (id === "special") {
    res.status(200).json({
      message: "Books details",
      id: id
    });
  } else {
    res.status(200).json({
      message: "You passed an ID"
    });
  }
});

router.patch("/:bookID", (req, res, next) => {
  const id = req.params.bookID;
  res.status(200).json({
    id: id,
    message: "Update book!"
  });
});

router.delete("/:bookID", (req, res, next) => {
  const id = req.params.bookID;
  res.status(200).json({
    id: id,
    message: "Delete book!"
  });
});

//Export module
module.exports = router;
