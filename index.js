const express = require("express");

const app = express();

app.use("/test", (req, res) => {
    console.log("Reiceved request")
    res.status(200).send("success");
})

app.listen(3000, () => {
    console.log("I am ready to listen you");
});