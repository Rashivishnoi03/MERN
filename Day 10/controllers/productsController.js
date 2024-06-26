const fsPromises = require("fs/promises");

const getAllProducts = async(req, res) => {
    //   const data = fs.readFileSync("./data.json", "utf8");
      const data = await fsPromises.readFile("./data.json", "utf8");
      const arr = JSON.parse(data);
      res.json(
        {
            status :'success',
            // results : arr.length,
            data: {
                products: arr
            }
        }
      )
      
    }

    const addProducts = async (req, res)=>{
      // console.log(Object.keys(req));
      const data = req.body;
      data.id = 121;
      console.log(data);
      
      const db = await fsPromises.readFile("./data.json","utf-8")
      const arr = JSON.parse(db);
      const len = arr.length;
      const newProduct =data;
      if(len==0){
          newProduct.id = 1;
      }
      else{
           
          newProduct.id = (arr[len-1].id)+1;
      }
          arr.push(newProduct);
          fsPromises.writeFile("./data.json", JSON.stringify(arr));
      res.json({
          status:'success',
          result:1,
          data:{
              newProduct: newProduct,
          }
      })
      }

      const replaceProducts = async (req, res)=>{
        const arr = JSON.parse( await fsPromises.readFile('./data.json',"utf-8"));
        
        const reqId = parseInt(req.params);
        const data = req.body;
        data.id = reqId;
        const newArr = arr.map((elem)=>{
            if(elem.id == reqId) return data;
            else return elem;
        });
        fsPromises.writeFile("./data.json", JSON.stringify(newArr));
        res.json({
            status:'success',
            result:1,
            data:{
                newProduct:data,
            }
        })
        console.log(data);
    }

    const deleteProducts = async (req, res)=>{
      const reqId = parseInt(req.params.id);
      const arr = JSON.parse(await fsPromises.readFile("./data.json","utf-8"));
      const newArr = arr.filter((elem)=>{
  if(elem.id === reqId) return false;
  else return true;
  });
  fsPromises.writeFile("./data.json",JSON.stringify(newArr));
  res.status(204);
  res.json({
      status: 'success',
      data: {
          newProduct: null,
      }
  })
}
    module.exports = {
        getAllProducts,
        addProducts,
        replaceProducts,
        deleteProducts,
    }