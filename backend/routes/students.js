const express = require('express')
const {
    createUser,
    getUser,
    getUsers,
    updateUser,
    dropUser
} = require('../controllers/userController')

const router = express.Router()

router.get('/', getUsers)

router.get('/:id', getUser)

router.post('/', createUser)

router.delete('/:id', dropUser)

router.patch('/:id', updateUser)

module.exports = router