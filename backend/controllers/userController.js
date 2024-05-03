const User = require('../models/studentsModel')
const mongoose = require('mongoose')

// get all users
const getUsers = async (req, res) => {
    const users = await User.find({}).sort({createdAt: -1})

    res.status(200).json(users)
}
// get a single user

const getUser = async (req, res) => {
    const { id } = req.params

    // if(!mongoose.Types.ObjectId.isValid(id)) {
    //     return res.status(404).json({error: 'invalid ID'})
    // }

    const user = await User.findOne({id: id})

    if (!user) {
        return res.status(404).json({error: 'Student not found!'})
    }

    res.status(200).json(user)
}

// create new user
const createUser = async(req, res) => {
    const { id, fname, lname, level, payable, password, usertype, gender } = req.body 

    // add to db
    try {
        const student = await User.create({ id, fname, lname, level, payable, password, usertype, gender })
        res.status(200).json(student)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


// drop a user
const dropUser = async (req, res) => {
    const { id } = req.params

    const user = await User.findOneAndDelete({id: id})

    if (!User) {
        return res.status(400).jspn({error: 'User not found'})
    }

    res.status(200).json(user)
}

// update user
const updateUser = async (req,res) => {
    const { id } = req.params


    const user = await User.findOneAndUpdate({id: id}, {
        ...req.body
    })

    if (!User) {
        return res.status(400).jspn({error: 'User not found'})
    }

    res.status(200).json(user)
}



module.exports = {
    createUser,
    getUser,
    getUsers,
    dropUser,
    updateUser

}