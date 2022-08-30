import axios from "axios";
export default axios.create({
    baseURL: "http://62.113.105.69:3000",
    headers:{
        "Content-type": "application/json"
    }
})