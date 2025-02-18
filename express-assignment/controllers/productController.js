const getProduct = (req, res)=>{
    res.send("get all the products")
}

const createProduct = (req, res) => {
    res.send("create a new product");
}
 const updateProduct = (req, res) =>{
    res.send("UPdate the details fpr the product with id ${req.param.id}");
 }

 const deleteProduct = (req, res) => {
    res.send("Delete the product with id ${req.param.id}");
 }

 module.expoerts = {getProduct, createProduct, updateProduct, deleteProduct};