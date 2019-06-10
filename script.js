const titleBtn = document.querySelector("#getTitle");
const authorBtn = document.querySelector("#getAuthor");
const input = document.querySelector("input");
const showInfo = document.querySelector("p");
const ISBNbtn = document.querySelector("#getISBN");
const API_KEY = "AIzaSyCrIuS7E-4mpw-1wLknE4C30W3_Cb_iGBc";

titleBtn.addEventListener("click", async () => {
   // getBookTitle();
   showInfo.innerHTML = '';
    let inpt = input.value; 
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${inpt}&key=${API_KEY}`)
    const bookTitle = response.data.items;
    for (let i=0; i<bookTitle.length; i +=1){
        showInfo.innerHTML += `<li>${bookTitle[i].volumeInfo.title}</li>
        <img src= ${bookTitle[i].volumeInfo.imageLinks.smallThumbnail} />
        <button>${bookTitle[i].volumeInfo.infoLink}</button>
        `
    }

    console.log(bookTitle);
})

authorBtn.addEventListener("click", async () => {
    showInfo.innerHTML = '';
    const inpt = input.value; 
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${inpt}&key=${API_KEY}`)
    const bookAuthor = response.data.items;
    for (let i=0; i<bookAuthor.length; i +=1){
        showInfo.innerHTML += `<li>
        ${bookAuthor[i].volumeInfo.authors} , ${bookAuthor[i].volumeInfo.title}</li>
        <img src= ${bookAuthor[i].volumeInfo.imageLinks.smallThumbnail} />
        `
    }
    //console.log(bookTitle);
})

ISBNbtn.addEventListener("click", async () => {
    showInfo.innerHTML = '';
    const inpt = input.value; 
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${inpt}&key=${API_KEY}`)
    const ISBNinfo = response.data.items;
    for (let i=0; i<ISBNinfo.length; i +=1){
        showInfo.innerHTML += `<li>
        
         ${ISBNinfo[i].volumeInfo.title}</li>
        <img src= ${ISBNinfo[i].volumeInfo.imageLinks.smallThumbnail} />
        `
    }
    //console.log(bookTitle);
})


