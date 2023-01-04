// const API_URL = `https://api.unsplash.com/search/photos`;
const API_URL = `https://api.imgflip.com/get_memes`;


async function get_memes() {
    const url = API_URL;
    const reponse = await fetch(url);
    const data1 = await reponse.json();
    let randomNum = Math.floor(Math.random() * 99)
    let image = data1.data.memes[randomNum].url;
    console.log(image);
    
   document.querySelector(".image-box").innerHTML = `
   <img src="${image} ">
   `
}

const button = document.getElementById("btn");
button.onclick = get_memes;
