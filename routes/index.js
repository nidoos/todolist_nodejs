const express = require("express");
var router = express.Router();
const TodoTask = require('../models/TodoTask');

//CREATE
router.post('/', async (req, res) => {
    const todoTask = new TodoTask({
        content: req.body.content
    });
    try {
        await todoTask.save();
        res.redirect('/');
    } catch (err) {
        res.redirect('/');
    }
});

//READ
router.get("/", (req, res) => {
    TodoTask.find({}, (err, tasks) => {
        res.render('todo.ejs', { todoTasks: tasks });
    });
});

//UPDATE
router.get((req, res) => {
    const id = req.params.id;
    TodoTask.find({}, (err, tasks) => {
        res.render("todoEdit.ejs", { todoTasks: tasks, idTask: id });
    });
}).post((req, res) => {
    const id = req.params.id;
    TodoTask.findByIdAndUpdate(id, { content: req.body.content }, err => {
        if (err) return res.send(500, err);
        res.redirect("/");
    });
});

module.exports = router;

