const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    achievements: { type: Array, default: [] },
    address: { type: String, default: '' },
    carrierObjective: { type: String, default: '' },
    education: { type: Array, default: [] },
    email: { type: String, default: '' },
    experience: { type: Array, default: [] },
    firstName: { type: String, default: '' },
    github: { type: String, default: '' },
    lastName: { type: String, default: '' },
    linkedin: { type: String, default: '' },
    mobileNumber: { type: String, default: '' },
    portfolio: { type: String, default: '' },
    projects: { type: Array, default: [] },
    skills: { type: Array, default: [] },
    training: { type: Array, default: [] },
  },
  {
    timestamps: true,
  }
);
 
const userModel = mongoose.model('users', userSchema);
module.exports = userModel;

// very first here we created userschema then go to routes folder and created userRoutes from there we go to server.js file to add "app.use(express.json())" line so express sjon could destrcture the json
// then we import userRoute in server.js const userRoute = require("./route/userRoute"), then add, app.use("/api/user/", userRoute)
