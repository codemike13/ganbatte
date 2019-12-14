const Todo = require('../models/Todo')
const User = require('../../users/models/User')

module.exports = {
    createTodo: (params) => {
        return new Promise((resolve, reject) => {

            User.findById(params.id)
                .then(user => {
                    const newTodo = new Todo({
                        todo: params.todo.newTodo,
                        user_id: user._id
                    })

                    newTodo.save()
                        .then(savedTodo => {
                            user.todos.push(savedTodo)

                            user.save()
                                .then(() => resolve(savedTodo))
                                .catch(error => reject(error))
                        })
                        .catch(error => reject(error))
                })
                .catch(error => reject(error))
        })
    },
    getAllTodos: (id) => {
        return new Promise((resolve, reject) => {
            User.findById(id, 'todos email')
                .populate('todos', '-user_id -__v')
                .exec((err, user) => {
                    if (err) reject(err)
                    else resolve(user)
                })
        })
    },

    updateTodoByID: (params) => {
        return new Promise((resolve, reject) => {
            // Todo.findByIdAndUpdate(id, { todo: newTodo }, { new: true })
            // .then(() => resolve(todo))
            // .catch(error => reject(error))
            Todo.findById(params.id)
                .then(todo => {
                    todo.todo = params.newTodo
                    todo.save()
                        .then(() => resolve(todo))
                        .catch(error => reject(error))
                })
        })
        // console.log(params);

    },

    deleteTodoByID: (params) => {
        return new Promise((resolve, reject) => {
            User.findById(userID)
                .then(user => {
                    const filteredArray = user.todos.filter(t => t.toString() !== id)

                    user.todos = filteredArray

                    user.save()
                        .then(user => {
                            Todo.findByIdAndDelete(id)
                                .then(deleted => {
                                    User.findById(userID, 'todos')
                                        .populate('todos', '-user-id -__v')
                                        .exec((error, user) => {
                                            if (error) reject(error)
                                            else resolve(user)
                                        })
                                })
                                .catch(error => reject(error))
                        })
                        .catch(error => reject(error))
                })
                .catch(error => reject(error))
        })
    },


    // completeTodo: (params) => {
    //     return new Promise((resolve, reject) => {
    //         console.log('here');

    //         Todo.findById(params.id)
    //             .then(todo => {
    //                 console.log(todo);
    //                 todo.completed = params.bool
    //                 todo.save()
    //                 console.log(todo);
    //             }).then(todo => {
    //                 User.findById(params.user)
    //                     .populate('todos')
    //                     .exec((err, user) => {
    //                         if (err) reject(err)
    //                         else resolve(user)
    //                     })
    //             })
    //     })
    //         .catch(err => { reject(err) })

    // },
    completeTodo: (params) => {
        return new Promise((resolve, reject) => {
            Todo.findByIdAndUpdate(params.id, { completed: params.completed }, { new: true })
                .then(updatedTodo => {
                    resolve(updatedTodo)
                }).catch(err => { reject(err) })
        }).catch(err => { reject(err) })

    },

    getTodosByCompletion: (params) => {
        return new Promise((resolve, reject) => {
            console.log('From controller');
            // console.log(params);
            Todo.find({ completed: params.completed, user_id: params.userid })
                .then(found => {
                    resolve(found)
                })
                .catch(err => { reject(err) })

            // User.findById(params.userid)
            //     .then(user => {
            //         console.log(params.completed);

            //         let found = user.todos.filter(todo => (todo.completed === params.completed))
            //         console.log(found);

            //     }).catch(err => {
            //         console.log(err);

            //     })
        })
    }


}
