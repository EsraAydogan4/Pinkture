import mongoose from "mongoose"; 

const { Schema } = mongoose;

const loginSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
});

const Login = mongoose.model("Login", loginSchema);

export default Login


