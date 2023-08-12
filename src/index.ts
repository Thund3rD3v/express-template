import "dotenv/config";

import express from "express";
import bp from "body-parser";
import cors from "cors";

import main from "./routes/main";
import listen from "./utils/listen";
import last_checkpoint from "./routes/last_checkpoint";

const app = express();

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());
app.use(cors());

app.get("/", main);

app.use(last_checkpoint);

app.listen(4000, listen);
