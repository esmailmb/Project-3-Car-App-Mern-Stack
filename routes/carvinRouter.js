const router = require("express").Router();
const auth = require("../middleware/auth");
// const Todo = require("../models/todoModel");
const Carvin = require("../models/carvinModel");

router.post("/", auth, async (req, res) => {
    try {
        const { title } = req.body;

        //validation
        if (!title)
            return res.status(400).json({ msg: "Not all fields have not been entered." });

        // const newTodo = new Todo({
        const newTodo = new Todo({
            userId: req.user,
            vin,
            make,
        });
        const savedTodo = await newTodo.save();
        res.json(savedTodo);
    } catch (err) { res.status(500).json({ error: err.message }); }
});

router.get("/all", auth, async (req, res) => {
    const todos = await Todo.find({ userId: req.user });
    res.json(todos);
});

router.delete("/:id", auth, async (req, res) => {
    const todo = await Todo.findOne({ userId: req.user, _id: req.params.id });
    if (!todo)
        return res.status(400).json({ msg: "No VIN info found with this ID that belong to current user", });
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    res.json(deletedTodo);
});

module.exports = router;