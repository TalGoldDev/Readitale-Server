import { app } from "./src/index.js";

const port = process.env.PORT || 3000;
const server = app.listen(port);

console.log("App is listening on port: " + port);
