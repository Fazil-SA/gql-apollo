const { ApolloServer,gql } = require('apollo-server-express')


const typeDefs = gql`
    
    type Todo{
        id: ID!
        title: String!
        details: String!
    }

    type Query{
        welcome : String!
        getTodos : [Todo!]
        getSingleTodo(id: ID!) : Todo
    }

    type Mutation{
        addToDo(title:String!,details:String!):Todo
        deleteTodo(id:ID):String
        updateTodo(id:ID,title:String!,details:String!):Todo
    }
`

module.exports = typeDefs

