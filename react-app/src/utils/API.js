import axios from "axios";

export default {
  getAuthStatus: function() {
    return axios.get("/api/auth/getAuthStatus");
  },
  getHomeGift: function() {
    return axios.get("/api/gifts/home")
  },
  getSearchGift: function(interests) {
    return axios.get("/api/gifts/search", { params: interests })
  },

  saveGift: function(recipient, title, price, image, link) {
    var data = {
      recipient: recipient,
      title: title,
      price: price,
      image: image,
      link: link
    }
    return axios.post("/api/gifts/save", data);
  },

  getSavedGifts: function() {
    return axios.get("/api/gifts/saved");
  },

  deleteGift: function(id) {
    return axios.delete("/api/gifts/delete/" + id)
  }
};