
// renderUI();

// console.log("...APP Started");

// function callAPI(params) {
//   fetch(
//     "https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=ffc3755c37c147799c44793024549eec"
//   )
//     .then(() => {
//       return resizeBy.json();
//     })
//     .then((data) => {
//       console.log(data);
//     });
// }

// callAPI();

// console.log("...API STARTED");

// function callAPI() {
//     fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=597c5e71a7f34d8c81fe3837cce217eb")
  
// console.log("...APP Started");

// function callAPI(params) {
//   fetch(
//     "https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=ffc3755c37c147799c44793024549eec"
//   )
//     .then(() => {
//       return resizeBy.json();
//     })
//     .then((data) => {
//       console.log(data);
//     });
// }

// callAPI();


// console.log("...APP Started");

// function callAPI(params) {
//   fetch(
//     "https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=ffc3755c37c147799c44793024549eec"
//   )
//     .then(() => {
//       return resizeBy.json();
//     })
//     .then((data) => {
//       console.log(data);
//     });
// }

// callAPI();

console.log("...API STARTED");

function callAPI() {
  fetch(
    "https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=ffc3755c37c147799c44793024549eec"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      renderUI(data);
    });
}

function renderUI(data) {
  const root = document.getElementById("root");

  // got the articles from data
  const articles = data.articles;
  console.log(articles);

  //  single articles from the articles array
  for(let i=0;i<articles.length;i++){
  const ar = articles[i];
  if(ar.urlToImage!=null)
  {

  console.log(ar);

  const div = document.createElement("div");
  div.setAttribute("class","news");
  const h3 = document.createElement("h3");
  h3.innerText = ar.title;
  div.appendChild(h3);
  const img = document.createElement("img");
  img.src = ar.urlToImage;
  div.appendChild(img);
  // div.innerText = ar.title;
  root.appendChild(div);
}
  }
}
// renderUI();

callAPI();