"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
/* export const createTodos = (
    req: Request,
    res: Response,
    next: NextFunction
    ) => {
        res.status(200).json({ todos: [{ id: "1", text: "Do something" }] });
    };
*/
const TODOS = [];
const createTodo = (req, res, next) => {
    const text = req.body.text; // type casting
    const newTodo = new todo_1.Todo(Math.floor(Math.random() * 10).toString(), text);
    TODOS.push(newTodo);
    res
        .status(201)
        .json({ message: 'Created the ToDo Item.', createdTodo: newTodo });
};
exports.createTodo = createTodo;
const getTodos = (req, res, next) => {
    res.json({ todos: TODOS });
};
exports.getTodos = getTodos;
const updateTodo = (req, res, next) => {
    const todoId = req.params.id;
    const updatedText = req.body.text;
    const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error('Could not find todo');
    }
    TODOS[todoIndex] = new todo_1.Todo(TODOS[todoIndex].id, updatedText);
    res.json({ message: 'Updated', updateTodo: TODOS[todoIndex] });
};
exports.updateTodo = updateTodo;
