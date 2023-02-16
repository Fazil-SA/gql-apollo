const { findByIdAndUpdate } = require('./models/Todo')
const Todo = require('./models/Todo')

const resolvers = {
    Query : {
        welcome: () => {
            return "Welcome Fazil"
        },
        getTodos: async() => {
            const todos = await Todo.find()
            return todos
        },
        getSingleTodo: async(root,args) => {
            const todo = await Todo.findById(args.id)
            return todo
        }
    },
    Mutation : {
        addToDo: async(root,args) => {
            const newTodo = await Todo.create({title:args.title, details:args.details})
            return newTodo
        },
        deleteTodo: async(root,args) => {
            await Todo.findByIdAndDelete(args.id)
            return "The todo deleted successfully" 
        },
        updateTodo: async(root,args) => {
            const { id, title, details } = args
            const updatedTodo = {}
            if(title !== undefined) {
                updatedTodo.title = title
            }
            if(details !== undefined) {
                updatedTodo.details = details
            }
            const todo = await Todo.findByIdAndUpdate(id,updatedTodo , {new:true})
            return todo
        }
    }
    
}

module.exports = resolvers