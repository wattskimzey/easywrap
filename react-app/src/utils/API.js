import axios from "axios";

export default {
  getAuthStatus: function() {

    // return "TEST 1";

    return axios.get("/api/auth/getAuthStatus");

  }
};