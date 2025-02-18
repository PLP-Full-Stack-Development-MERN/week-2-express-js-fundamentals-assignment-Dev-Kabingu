
const getUser = (req, res)=>{
    res.send("Get all the users");
}

const createUser = (req, rus)=> {
    res.send("Create a new user");
}

const updateUser = (req, res) => {
    res.send ("Update the records of the user with id ${req.param.id}")
}

const deleteUser = (req, res) => {
    res.send("Delete the user with the id ${req.param.id}");
}

module.exports = { getUser, createUser, updateUser, deleteUser};