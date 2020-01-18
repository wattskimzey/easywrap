const axios = require("axios");
const homeArray = ["nintendo switch", "laptop", "water bottle", "headphones", "books", "tv", "kindle", "ipad", "backpack","desk","air fryer","alexa"]
const db = require("../models")
function randomNum(){return Math.floor(Math.random() * 12)}

module.exports = {
  home: function (req, res) {
    axios({
        "method": "GET",
        "url": "https://amazon-price1.p.rapidapi.com/search",
        "headers": {
          "content-type": "application/octet-stream",
          "x-rapidapi-host": "amazon-price1.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_API_KEY
        },
        "params": {
          "keywords": homeArray[randomNum()],
          "marketplace": "US"
        }
      })
      .then((response) => {
        let data = response.data
        let dataArray = [];
        for (var i = 0; data.length; i++) {
          if (data[i] !== undefined) {
            var title = "Title: " + data[i].title;
            var price = "Price: " + data[i].price;
            var link = "Link: " + data[i].detailPageURL;
            var rating = "Rating: " + data[i].rating;
            var img = "Image: " + data[i].imageUrl;
            dataArray.push({
              title: title,
              price: price,
              link: link,
              rating: rating,
              img: img
            })
          } else {
            break
          }
        }
        res.json(dataArray);
      })
      .catch((error) => {
        console.log(error)
      })
  },

  search: function (req, res) {
    const {query: params} = req;
    axios({
        "method": "GET",
        "url": "https://amazon-price1.p.rapidapi.com/search",
        "headers": {
          "content-type": "application/octet-stream",
          "x-rapidapi-host": "amazon-price1.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_API_KEY
        },
        "params": {
          "keywords": params,
          "marketplace": "US"
        }
      })
      .then((response) => {
        let data = response.data
        let dataArray = [];
        for (var i = 0; data.length; i++) {
          if (data[i] !== undefined) {
            var title = "Title: " + data[i].title;
            var price = "Price: " + data[i].price;
            var link = "Link: " + data[i].detailPageURL;
            var rating = "Rating: " + data[i].rating;
            var img = "Image: " + data[i].imageUrl;
            dataArray.push({
              title: title,
              price: price,
              link: link,
              rating: rating,
              img: img
            })
          } else {
            break
          }
        }
        res.json(dataArray);
      })
      .catch((error) => {
        console.log(error)
      })
  },

  save: function(req, res) {
    console.log(req.body);
    db.Gift.create(req.body).then(function(dbGift) {
      return db.User.findOneAndUpdate({
        _id: req.user._id
      }, {
        $push: {
          gifts: dbGift._id
        }
      }, {
        new: true
      });

    }).then(function(dbUser) {

      console.log("Gift saved");

    }).catch(function(err) {
      console.log(err);
    })
  },

  getSavedGifts: function(req, res) {
    db.User.findOne({_id: req.user.id}).populate("gifts").then(function(dbUser) {

      res.json(dbUser);

    }).catch(function(err) {
      console.log(err);
    });
  },

  deleteGift: function(req, res) {
    var giftID = req.params.id
    db.Gift.remove({_id: giftID}).then(function(dbGift) {
      console.log("Gift deleted");
    }).catch(function(err) {
      console.log(err);
    });
  }
}