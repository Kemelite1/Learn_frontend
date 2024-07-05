//json - javascript object notation - storing data in human readable format

   const books = {
        "title": "The gods are not to be blamed",
        "author": "Trevore",
        "price": 10.99
    }
    //console.log(books);

    //stringify - convert object to JSON string
    const bookJSON = JSON.stringify(books);
    console.log(bookJSON);

    //parse - convert JSON string to object
    const bookObject = JSON.parse(bookJSON);
    //console.log(bookObject);
    console.log(bookObject.author);

//task
const library = [
    {
        title: "The Odyssey",
        author: "Homer",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },

    {
        title: "The Iliad",
        author: "Homer",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: "Twilight",
        author: "Stephenie",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },

]
console.log(library);

//change read value for all
x = library[0].status.read = true;
x = library[1].status.read = true;
x = library[2].status.read = true;
console.log(x);

//destructure and rename
const { title: firstBook } = library[0];
console.log(firstBook);

//json string
const jsonLibrary = JSON.stringify(library);
console.log(jsonLibrary);