import mongoose from "mongoose"; 

const { Schema } = mongoose;

const registerSchema = new Schema({
    name: {type: String, required: true},
    surname: {type: String, required: true},
    email: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true}
});

const Register= mongoose.model("Register",registerSchema);

export default Register


