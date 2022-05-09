import cors from "cors";
import express from "express";
import bodyParser from "body-parser";

import { routes } from "./routes";

const app = express();

app.use(cors());
app.use(bodyParser.json({limit: '10mb', }))

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log("HTTP server running");
});
