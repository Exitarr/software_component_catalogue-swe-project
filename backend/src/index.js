const express = require('express');
const cors = require('cors');
const { ApolloServerCreations } = require('./graphql/server');
const { expressMiddleware } = require('@apollo/server/express4');


async function init() {

    const app = express();

    const PORT = process.env.PORT || 4000;

    app.use(express.json());
    app.use(cors());

    app.get('/',(req , res) => {
        res.send('server is running')
    })

    app.use("/graphql", expressMiddleware(await ApolloServerCreations(), {}));


    app.listen(PORT, () => { console.log(`Server listening on port ${PORT}`) });
}

init();



