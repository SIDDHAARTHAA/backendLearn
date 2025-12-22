import express from "express"
import authRoutes from "./routes/auth.routes.js"

const app = express();

app.use(express.json());

app.get("/health", (req, res)=>{
    res.send("OK");
});

app.use("/auth", authRoutes);

export default app;