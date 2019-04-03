const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser');
const logger = require('../public/javascripts/middleware')
const booksInfo = require('../public/javascripts/bookInfo')

router.use(bodyParser.json()); // support json encoded bodies
router.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
router.use(logger)

router.post('/GetBook', (req, res) => {
  if(req.body.bookId){
    bookData = booksInfo(req.body.bookId, 'bookId')
    if (bookData) {
      res.send('Author: ' + bookData.author + ' Book Name: ' + bookData.title)
    } else {
      res.sendStatus(404)
    }
  }else {
    res.sendStatus(403)
  }
})
router.post('/GetAuthor', (req, res) => {
  if(req.body.bookName){
    bookData = booksInfo(req.body.bookName, 'title')
    if (bookData) {
      res.send('Author: ' + bookData.author + ' Book Serial Name: ' + bookData.bookId)
    } else {
      res.sendStatus(404)
    }
  }else {
    res.sendStatus(403)
  } 
})
router.post('/GetCover', (req, res) => {
  if(req.body.bookId){
    bookData = booksInfo(req.body.bookId, 'bookId')
    if (bookData) {
      res.sendFile('/source/bigdata-course/public/image/' + bookData.image_path)
    } else {
      res.sendStatus(404)
    }
  }else if (req.body.bookName) {
    bookData = booksInfo(req.body.bookName, 'title')
    if (bookData) {
      res.sendFile('/source/bigdata-course/public/image/' + bookData.image_path)
    } else {
      res.sendStatus(404)
    }
  } else {
    res.sendStatus(403)
  }
})

router.use(express.static('public'))

module.exports = router;