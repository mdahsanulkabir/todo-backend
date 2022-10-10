const express = require('express');
const router = express.Router();

//get all todos
router.get('/', (req, res) => {
    res.json({ msg: 'get all todos' })
})

//get a single todo
router.get('/:id', (req, res) => {
    res.json({ msg: 'get single todo' })
})

//post a new todo
router.post('/', (req, res) => {
    res.json({ msg: 'post a new todo' })
})

//delete a todo
router.delete('/:id', (req, res) => {
    res.json({ msg: 'delete a todo' })
})

//update a todo
router.patch('/:id', (req, res) => {
    res.json({ msg: 'update a todo' })
})


module.exports = router