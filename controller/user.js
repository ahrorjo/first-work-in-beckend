// user.js
const { model } = require("mongoose");
const userModel = require("../model/userSvhema");

// ---------------Createuser

const createUser = async (req, res)=>{
    try{
        const exisitingUser = await userModel.findOne({
            userName: req.body.userName
        })
        if(exisitingUser){
            return res
            .status(404)
            .send({
                success: false,
                message: "Username is already exist!"
            })
        }
        const newUser = new userModel(req.body)
        await newUser.save();
        res.status(200).send({
            success: true,
            message:"register successfully"
        })
    }catch (err){
        console.error(err);
        res.status(500).send({
            success: false,
            message: `register Controller ${err.message}`,
        })
    }
}

// --------------get users
const getUser = async (req, res) => {
    try{
        const users = await userModel.find();
        res.status(200).send({
            success: true,
            message:"successfully",
            inneData: users
        })
    }catch (err){
        console.error(err);
        res.status(500).send({
            success: false,
            message: `register Controller ${err.message}`,
        })
    }
}

//------Delete

const deleteUser = async (req, res) => {
    try{
        const deleteUser = await userModel.findByIdAndDelete(req.params._id);
        if (!deleteUser) {
            res.status(404).send({
                success: false,
                message: "User isn't deleted!",
            })
            res.status(200).send({
                success: true,
                message:"dleleted successfully"
            })
        }
    }catch (err){
        console.error(err);
        res.status(500).send({
            success: false,
            message: `register Controller ${err.message}`,
        })
    }
}

//----------------update user

const updateUser = async (req, res) => {
    try{
        const updateUser = await userModel.findByIdAndUpdate(
            req.params._id,
            req.body
        );
        if (!updateUser) {
            res.status(404).send({
                success: false,
                message: "User isn't deleted!",
            })
        }
        res.status(200).send({
            success: true,
            message: "User isn updated!",
            inneData: updateUser
        })
    }catch (err){
        console.error(err);
        res.status(500).send({
            success: false,
            message: `register Controller ${err.message}`,
        })
    }
}

module.exports = {
    createUser,
    getUser,
    deleteUser,
    updateUser
}