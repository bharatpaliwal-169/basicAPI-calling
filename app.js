const btn = document.querySelector(".btn");
const content = document.querySelector(".content");
//API address
const url = "https://api.icndb.com/jokes/random?escape=javascript";

btn.addEventListener("click", async () => {
    try {
        const response = await fetch(url);  //fetching data
        const data = await response.json(); //json resopnse
        displayData(data);
    } catch (error) {
        console.log(error);
    }
});

function displayData(data) {
  // change to data
    //destructuring  the fetched data
    const {value: { joke }} = data;
    
    content.innerHTML = joke;
    
}
