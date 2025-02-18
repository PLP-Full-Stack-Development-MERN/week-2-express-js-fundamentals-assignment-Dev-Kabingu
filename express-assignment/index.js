const express = require("express");
const userRouter = require("./routers/userRoutes");
const productRouter= require("./routers/productRoutes");
const logger = require("./middleware/logger");

const app = express();

require('dotenv').config();
const port = process.env.PORT || 5000

app.use(express.json());
app.use(logger);

app.use("/users", userRouter);
app.use("/products", productRouter);

// error 
app.use((error, req, res, next) => {
    console.error(error.stack);
    res.status(500).json({error: "something went wrong"})
})



app.listen(port, () => {
    console.log("Server running on port ${port}")
})

