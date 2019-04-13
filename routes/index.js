const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser');
const logger = require('../public/javascripts/middleware')
const booksInfo = require('../public/javascripts/bookInfo')
const rootProject = require('app-root-path')

const image_folder = rootProject.path + '/public/image/'

router.use(bodyParser.json()); // support json encoded bodies
router.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
router.use(logger)

//GetBook function
// post method
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
// get method
router.get('/GetBook', (req, res) => {
  if(req.query.bookId){
    bookData = booksInfo(req.query.bookId, 'bookId')
    if (bookData) {
      res.send('Author: ' + bookData.author + ' Book Name: ' + bookData.title)
    } else {
      res.sendStatus(404)
    }
  }else {
    res.sendStatus(403)
  }
})

//GetAuthor function
// post method
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
// get method
router.get('/GetAuthor', (req, res) => {
  if(req.query.bookName){
    bookData = booksInfo(req.query.bookName, 'title')
    if (bookData) {
      res.send('Author: ' + bookData.author + ' Book Serial Name: ' + bookData.bookId)
    } else {
      res.sendStatus(404)
    }
  }else {
    res.sendStatus(403)
  } 
})

//GetCover function
// post method
router.post('/GetCover', (req, res) => {
  if(req.body.bookId){
    bookData = booksInfo(req.body.bookId, 'bookId')
    if (bookData) {
      res.sendFile(image_folder + bookData.image_path)
    } else {
      res.sendStatus(404)
    }
  }else if (req.body.bookName) {
    bookData = booksInfo(req.body.bookName, 'title')
    if (bookData) {
      res.sendFile(image_folder + bookData.image_path)
    } else {
      res.sendStatus(404)
    }
  } else {
    res.sendStatus(403)
  }
})
// get method
router.get('/GetCover', (req, res) => {
  if(req.query.bookId){
    bookData = booksInfo(req.query.bookId, 'bookId')
    if (bookData) {
      res.sendFile(image_folder + bookData.image_path)
    } else {
      res.sendStatus(404)
    }
  }else if (req.query.bookName) {
    bookData = booksInfo(req.query.bookName, 'title')
    if (bookData) {
      res.sendFile(image_folder + bookData.image_path)
    } else {
      res.sendStatus(404)
    }
  } else {
    res.sendStatus(403)
  }
})

router.use(express.static('public'))

module.exports = router;