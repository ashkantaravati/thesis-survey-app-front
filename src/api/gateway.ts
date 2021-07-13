import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:8000",
  baseURL: "https://thesis.ashkantaravati.ir",
  headers: {
    "Content-type": "application/json",
  },
});
