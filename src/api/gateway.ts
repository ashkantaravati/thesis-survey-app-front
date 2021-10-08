/* eslint-disable no-debugger */
import axios from "axios";
import router from "@/router";
  axios.interceptors.response.use(
    // successful callback, we don't need to do anything
    (response) => {
      return response;
    },

    // check if we received a 404 and redirect
    (error) => {
      router.push({ name: "error" });
      console.error(error);
    }
  );

export default axios.create({
  // baseURL: "http://http://127.0.0.1:8000/api/",
  baseURL: "https://thesis.ashkantaravati.ir/api/",
  headers: {
    "Content-type": "application/json",
  },
});

