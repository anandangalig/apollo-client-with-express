// npm install --save graphql express-graphql express axios
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema.js');
const cors = require('cors');

const app = express();

app.use(cors()); // allows CORS calls between 2 running servers 3000 -> 5000
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  }),
);
const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log(`server started on ${PORT}`);
});
