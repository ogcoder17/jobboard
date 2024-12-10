import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import EmployeeModel from "./models/Employee.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected successfully.");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

app.post("/register", async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  try {
    const existingEmployee = await EmployeeModel.findOne({ email });
    if (existingEmployee) {
      return res.status(400).json({ error: "Account email already exists." });
    }

    const newEmployee = new EmployeeModel({ firstname, lastname, email, password });
    const savedEmployee = await newEmployee.save();

    res.status(201).json(savedEmployee);
  } catch (err) {
    console.error("Error creating employee:", err);
    res.status(500).json({ error: "Server error." });
  }
});

app.post("/Login", (req, res) => {
    const {email, password} = req.body;
    EmployeeModel.findOne({email: email})
    .then(user => {
        if(user) {
        if(user.password === password) {
            res.json("Welcome")
        } else {
            res.json("The password is incorrect")
        }
    }  else {
        res.json("No record exists")
    }  
    })
})

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running on http://localhost:3000");
});