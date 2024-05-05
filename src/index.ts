import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import initGraphql from "./connect/graphql";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

initGraphql();

app.listen(PORT, () => {
    console.log(`Server running at PORT`, PORT)
})