import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import paymentRoutes from "./routes/payment.routes.js";
import { connectDB } from "./lib/db.js";
import dns from "dns";

dns.setDefaultResultOrder("ipv4first");
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = ["*","localhost:3000","http://localhost:3000","https://react-webproject-frontend.onrender.com","https://js.paystack.co/v1/inline.js"];
app.use(
  cors({
    origin: function (origin, callback) {
  if (!origin || allowedOrigins.includes(origin)) {
    callback(null, true);   // ✅ allow request
  } else {
    callback(new Error("Not allowed by CORS"));
  }
  },
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/user", authRoutes);
app.use("/api/payment", paymentRoutes);

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
  connectDB();
});
