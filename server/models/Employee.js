import mongoose from "mongoose";

const Employeeschema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: { type: String, unique: true }, 
  password: String,
});

const EmployeeModel = mongoose.model("employees", Employeeschema);

export default EmployeeModel;
