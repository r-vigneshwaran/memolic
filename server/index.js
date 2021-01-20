import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import PostRoutes from "./routes/posts.js"
import dotenv from "dotenv";
import path from 'path'

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//middlewares 
app.use('/posts', PostRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(client / build));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.get('/',(req,res)=>{
    res.send('hi to memories to api')
});

const CONNECTION_URL = process.env.CONNECTION_URL;

const PORT =process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => app.listen(PORT, () => console.log(`server up and running on port ${PORT}`))).catch((error) => console.log(error));

mongoose.set('useFindAndModify',false)


