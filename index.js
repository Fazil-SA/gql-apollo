const express = require('express')
const { ApolloServer,gql } = require('apollo-server-express')
const typeDefs = require('./typeDefs.js')
const resolvers = require('./resolvers')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()
mongoose.set('strictQuery', false)

const app = express()
app.use(cors())

async function initServer() {
    const apolloServer = new ApolloServer({typeDefs,resolvers})
    await apolloServer.start()
    apolloServer.applyMiddleware({app})
    app.use((req,res) => {
        res.send('apollo sever started successfully')
    })
}

initServer()




app.listen({ port:6060 }, () => {
    console.log(`Express started running at port 6060`)
    mongoose.connect(process.env.mongodb)
    .then((res) => {
        console.log('mongodb atlas connected successfully')
    })
    .catch((err) => {
        console.log(err)
    })
})

