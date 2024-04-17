// indexjs
const express = require('express');
const cors = require('cors');
require("dotenv").config();
const { connect } = require("mongoose");


const app = express();
app.use(express.json());

app.use(
    cors({
        origin: [
            "http://localhost:3000",
            "http://localhost:3001"
        ],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
)

async function connectDB() {
    await connect(process.env.MONGO_URL)
    .then(()=> console.log("DB is running!"))
.catch(()=> console.error("DB isn't running!"))
}
connectDB();

app.get("/", async(req,res)=> res.json("App is runnning"));

const users = require("./routes/userRoute");
app.use('/users', users);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`server listening => http://localhost:${PORT}`);
})