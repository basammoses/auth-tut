import Express from "express";
import morgan from "morgan";
const app = Express();


app.use(Express.json());


app.use(morgan("dev"));

app.get("/", (req, res) => {
  return res.json({ message: "Hello World" });
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
}
)