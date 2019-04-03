const fs = require('fs'); 
const bookdb = fs.readFileSync('/source/bigdata-course/services/books.json')


module.exports = function(key, filterBy){
    const data = JSON.parse(bookdb)
    filterByKey = data["books"].filter(function(book) {
        return book[filterBy] == key;
      })
    const bookInfo = (filterByKey.length === 0) ? null : filterByKey[0]

    return bookInfo
}
