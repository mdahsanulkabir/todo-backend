const express = require('express');
const router = express.Router();

const { createTodo, 
        getTodos,
        getTodo,
        deleteTodo,
        updateTodo
} = require('../controllers/todoController')

//get all todos
router.get('/', getTodos)

//get a single todo
router.get('/:id', getTodo)

//post a new todo
router.post('/', createTodo)

//delete a todo
router.delete('/:id', deleteTodo)

//update a todo
router.patch('/:id', updateTodo)


module.exports = router