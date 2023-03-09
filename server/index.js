
import "dotenv/config"
//this is to load the environment variables from the .env file;

import Express from "express";
import morgan from "morgan";
import postRouter from "./routes/posts.js";

const PORT = process.env.PORT || 8080



const app = Express();

//morgan is a middleware that logs the request to the console
app.use(morgan("dev"));


//this is a middleware that parses the request body to json
app.use(Express.json());

app.use('/', postRouter);




app.listen(PORT, () => {
  console.log("Server started at http://localhost:"+PORT);
}
)