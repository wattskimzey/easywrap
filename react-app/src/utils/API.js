import axios from "axios";

export default {
  newUser: function(newUser) {
    return axios.post("/api/auth/signup", newUser);
  },
};