const express = require("express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express")
const bodyParser = require("body-parser");

const usersRoute = require("./routes/users.route");
const postsRoute = require("./routes/posts.route");


const app = express();

app.use(bodyParser.json());

const swaggerOption = {
    swaggerDefinition: (swaggerJsdoc.Options = {
        info: {
            title: "my-posts",
            description: "API documentation",
            contact: {
                name: "Developer",
            },
            servers: ["http://localhost:3000/"],
        },
    }),
    apis: ["index.js","./routes/*.js"]
};

const swaggerDocs = swaggerJsdoc(swaggerOption);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/users", usersRoute);
app.use("/posts", postsRoute);


app.listen(3000, () => {
    console.log("I am ready to listen you");
});