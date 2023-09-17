const express = require("express");
const app = express();
const port = 3000;
app.keepAliveTimeout = 65000; // Ensure all inactive connections are terminated by the ALB, by setting this a few seconds higher than the ALB idle timeout
app.headersTimeout = 66000;
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
