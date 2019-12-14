
const express = require('express')
const router = express.Router()
const passport = require('passport')

const todoController = require('./controllers/todoController')

router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    todoController.getAllTodos(req.query.id)
        .then(todos => res.json(todos))
        .catch(error => res.json(error))
})




router.post('/createtodo', passport.authenticate('jwt', { session: false }), (req, res) => {
    todoController.createTodo(req.body)
        .then(todo => res.json(todo))
        .catch(error => res.json(error))
})

//add auth 
router.put('/updatetodobyid', passport.authenticate('jwt', { session: false }), (req, res) => {

    todoController.updateTodoByID(req.body)
        .then(updatedTodo => res.json(updatedTodo))
        .catch(error => res.json(error))
})

router.delete('/deletetodobyid/:userid/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    const id = req.params.id
    const userID = req.params.userid

    todoController.deleteTodoByID(userID, id)
        .then(filteredTodos => res.json(filteredTodos))
        .catch(error => res.json(error))
})

router.put('/completedtodobyid', passport.authenticate('jwt', { session: false }), (req, res) => {
    todoController.completeTodo(req.body)
        .then(updateCompleted => {
            res.json(updateCompleted)
        })
        .catch(error => res.json(error))
})


router.get('/findtodobycategory', passport.authenticate('jwt', { session: false }), (req, res) => {
    todoController.getTodosByCompletion(req.query)
        .then(todos => res.json(todos))
        .catch(error => res.json(error))
})

module.exports = router