import Express from "express";
import morgan from "morgan";
const app = Express();

//morgan is a middleware that logs the request to the console
app.use(morgan("dev"));


//this is a middleware that parses the request body to json
app.use(Express.json());





app.get("/", (req, res) => {
  return res.json({ message: "Hello World" });
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
}
)