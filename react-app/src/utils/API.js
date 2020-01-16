import axios from "axios";

export default {
  getAuthStatus: function() {

    // return "TEST 1";

    return axios.get("/api/auth/getAuthStatus");

  },
  getHomeGift: function() {
    return axios.get("/api/gifts/home")
  },
  getSearchGift: function(interests) {
    return axios.get("/api/gifts/search", { params: interests })
  }
};