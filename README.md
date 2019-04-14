# bigdata-course
a Big Data course, Ariel university.

# Ex01
## Liberary REST API
 * GetBook : send a book serial number and get the author and the name of the book. (params: bookId)
 * GetAuthor : send the book name and get the author and the book serial number. (params: bookName)
 * GetCover : send a book serial number or the book name and get the book cover. (params: bookId or bookName)

Supporting get requests.
## Examples:
localhost:3000\GetBook?bookId=9781449365035
will return book's author and name: Axel Rauschmayer, Speaking JavaScript.

localhost:3000\GetAuthor?bookName=Learning%20JavaScript%20Design%20Patterns
will return book's author and serial number: Addy Osmani, 9781449331818.

localhost:3000\GetCover?bookId=9781491950296
localhost:3000\GetCover?bookName=Harry%20Poter%20and%20Cursed%20Child
will return Harry Poter and Cursed Child cover as Image.

