const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const usersRoute = require("./routes/users.route")

app.use(bodyParser.json());
app.use("/users", usersRoute)


app.listen(3000, () => {
    console.log("I am ready to listen you");
});