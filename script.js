const titleBtn = document.querySelector("#getTitle");
const authorBtn = document.querySelector("#getAuthor");
const input = document.querySelector("input");
const showInfo = document.querySelector(".content");
const ISBNbtn = document.querySelector("#getISBN");
const API_KEY = "AIzaSyCrIuS7E-4mpw-1wLknE4C30W3_Cb_iGBc";

titleBtn.addEventListener("click", async () => {
    // getbooksArr();
    showInfo.innerHTML = '';
    let inpt = input.value;
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${inpt}&key=${API_KEY}&maxResults=40`)
    const booksArr = response.data.items;
    for (let i = 0; i < booksArr.length; i += 1) {
        const bookCard = document.createElement('div');
        bookCard.innerHTML = `
        <img src= ${booksArr[i].volumeInfo.imageLinks.smallThumbnail} /> <br>
        <li>${booksArr[i].volumeInfo.title}</li> <br>
        
        <button id ="moreInfo">Click here for more info!</button>
        `
        const moreInfo = bookCard.querySelector("#moreInfo");

        moreInfo.addEventListener("click", function () {
            location.href = booksArr[i].volumeInfo.infoLink;
        })
        showInfo.appendChild(bookCard);
    }
    console.log(booksArr);
})


authorBtn.addEventListener("click", async () => {
    showInfo.innerHTML = '';
    const inpt = input.value;
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${inpt}&key=${API_KEY}`)
    const authorArr = response.data.items;
    for (let i = 0; i < authorArr.length; i += 1) {
        const bookCard = document.createElement('div');
        bookCard.innerHTML = `<li>
        ${authorArr[i].volumeInfo.authors} , ${authorArr[i].volumeInfo.title}</li>
        <img src= ${authorArr[i].volumeInfo.imageLinks.smallThumbnail} />
        <button id ="moreInfo">Click here for more info!</button>
        `
        const moreInfo = bookCard.querySelector("#moreInfo");

        moreInfo.addEventListener("click", function () {
            location.href = authorArr[i].volumeInfo.infoLink;
        })
        showInfo.appendChild(bookCard);
    }
    //console.log(booksArr);
})

ISBNbtn.addEventListener("click", async () => {
    showInfo.innerHTML = '';
    const inpt = input.value;
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${inpt}&key=${API_KEY}&maxResults=40`)
    const ISBNinfo = response.data.items;
    for (let i = 0; i < ISBNinfo.length; i += 1) {
        const bookCard = document.createElement('div');
        bookCard.innerHTML = `<li>
        
         ${ISBNinfo[i].volumeInfo.title}</li>
        <img src= ${ISBNinfo[i].volumeInfo.imageLinks.smallThumbnail} />
        <button id ="moreInfo">Click here for more info!</button>
        `
        const moreInfo = bookCard.querySelector("#moreInfo");

        moreInfo.addEventListener("click", function () {
            location.href = ISBNinfo[i].volumeInfo.infoLink;
        })
        showInfo.appendChild(bookCard);
    }
    //console.log(booksArr);
})


