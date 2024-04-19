const fs = require("fs");
const http = require("http");
const url = require("url");

const data = fs.readFileSync("./data.json","utf8");
const dataObj = JSON.parse(data).products;
// console.log(data);
const inputElement = `
<form action='/product'>
<input type = "text" name="productName">
<button type ="submit">Search</button>
</form>
`
const cardTemplate = `
<div>
<h3>$TITLE$</h3>

<img src = "$img_src$" alt = 'product-image' />

<a href = "$product_links$"> MoreInfo</a>

<h4>$price$</h4>
</div>
`;


const htmlTemplete = `
<!DOCTYPE HTML>
<html lang='en'>
    <head>
    <style>
        .product-card
        {
           width:400px;
           height:300px;
            margin:20px auto;
            border: 3px double red;
            border-radius:8px;
            padding:16px;
            background-color:blue;
            box-shadow:2px 8px 5px red;
            transition: background-color 0.25s ease
            transition-property: scale;
            transition-duration: 0.5s;
            

            
        }

        .product-card:hover {
            background-color: green;
            -webkit-transform: scale(1.2); 
            
          }
          * {
          box-sizing: border-box;
         
      }
      body {
          font-family: 'Montserrat', sans-serif;
          line-height: 1.6;
          margin: 0;
          min-height: 100vh;
          background-color:green;
        
      }
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }
      
      
      h2,
      h3,
      a {
          color: #34495e;
      }
      
      a {
          text-decoration: none;
      }

      img{
     width:30px;
     height:40px;

      }
      
      
      .logo {
          margin: 0;
          font-size: 1.45em;
      }
      
      .main-nav {
          margin-top: 5px;
      
      }
      .logo a,
      .main-nav a {
          padding: 10px 15px;
          text-transform: uppercase;
          text-align: center;
          display: block;
      }
      
      .main-nav a {
          color: #34495e;
          font-size: .99em;
      }
      
      .main-nav a:hover {
          color: #718daa;
      }
      
      
      
      .header {
          padding-top: .5em;
          padding-bottom: .5em;
          border: 1px solid #a2a2a2;
          background-color: navy;
          -webkit-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
          -moz-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
          box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
          -webkit-border-radius: 5px;
          -moz-border-radius: 5px;
          border-radius: 5px;
      }
      
      
      /* ================================= 
        Media Queries
      ==================================== */
      
      
      
      
      @media (min-width: 769px) {
          .header,
          .main-nav {
              display: flex;
          }
          .header {
              flex-direction: column;
              align-items: center;
              .header{
              width: 80%;
              margin: 0 auto;
              max-width: 1150px;
          }
          }
      
      }
      
      @media (min-width: 1025px) {
          .header {
              flex-direction: row;
              justify-content: space-between;
          }
      
      }
      
      footer {
        text-align: center;
        padding: 3px;
        background-color: blue;
        color: pink;
      }

      main{
        display:flex;
        flex-wrap:wrap;
        flex-direction:row;
      }
        </style>
    </head>
    <body>
    <header class="header">
    <h1 class="logo"><a href="#">Rashi Vishnoi</a></h1>
  <ul class="main-nav">
      <li><a href="#">Home</a></li>
      <li><a href="#">products</a></li>
      <li><a href="#">about</a></li>
      <li><a href="#">Contact</a></li>
  </ul>
</header> 
<main>
        Product_card
 </main>       
        <footer>
  <p>Author: Rashi<br>
  <a href="mailto:anilambani@gmail.com">anilambani@gmail.com</a></p>
</footer>
    </body>
</html>`
const CardTemplete=`
<div class='product-card'>
<h1>Brand:brand</h1>
    
<h3>Title:title</h3>
  <img src='Img'>

    <p>Description:info</p>
</div>
`;

let result = [];
for(let i=0;i<dataObj.length;i++){
    let temp = cardTemplate;
    temp = temp.replace('$TITLE$',dataObj[i].title); 
    temp = temp.replace('$img_src$',dataObj[i].images[0]); 
    temp = temp.replace('$product_links$',`/product?id=${i}`); 
    // temp = temp.replace('$thumbnail$',dataObj[i].thumbnail); 
    
    temp = temp.replace('$price$',dataObj[i].price); 
    
result.push(temp);
}
// console.log(result);
result = result.join('');
const server = http.createServer((req, res)=>{
    res.writeHead(200,{
        'content-type': 'text/html',
    });
    // const route = req.url;
    // console.log('\n',route,'\n');
    
    const {pathname,query} = url.parse(req.url , true);
   console.log('\n',pathname,'\n');
//  res.end('hello');
if(pathname =='/home'){
res.end(inputElement+result);
}
else if(pathname =='/product'){
// res.end('Product Page'+query.id);
const id = query.id;
const Item = dataObj[id];
const pName = query.productName;
if(pName){
const searchNameResults = dataObj.filter((elem)=>{
    if(elem.title.includes(pName)){
        return true;
    }
    else{
        false;
    }
})
res.end(JSON.stringify(searchNameResults));
}
else {
    res.end('<h3>Error...</h3>');
}
res.end(`
    <div>
    <h1>${Item.title}</h1>
    <p style="color:blue">${Item.description}</p>
    <img src = ${Item.images[0]}>
    <h5>Rating : ${Item.rating}/5</h5>
    <h4>Price : ${Item.price}</h4>
    <h3>Discount : ${Item.discountPercentage}%</h3>
    </div>
    `);


}
else{
res.end(' 404 not Found');
}

//  res.end(result);
});

server.listen(1400);