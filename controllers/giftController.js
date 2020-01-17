const axios = require("axios");
const homeArray = ["Clothing & Shoes","Jewelry & Watches","Home & Kitchen","Books","Electronics"]

module.exports = {
home: function(req,res){
  axios({
    "method":"GET",
    "url":"https://amazon-price1.p.rapidapi.com/search",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"amazon-price1.p.rapidapi.com",
    "x-rapidapi-key":"3dd4500085msh5885eeb6f5d4bdfp10871ajsn71074949a91a"
    },"params":{
    "keywords":homeArray[Math.floor(Math.random()*5)],
    "marketplace":"US"
    }
    })
    .then((response)=>{
      let data = response.data
      let dataArray = [];
      for (var i = 0; data.length;i++){
        if (data[i] !== undefined){
              var title = "Title: "+data[i].title;
              var price = "Price: "+data[i].price;
              var link = "Link: "+data[i].detailPageURL;
              var rating = "Rating: "+data[i].rating;
              var img = "Image: "+data[i].imageUrl;
            dataArray.push({
              title: title,
              price: price,
              link: link,
              rating: rating,
              img: img
          })
        }else{break}
      }
      res.json(dataArray);
    })
    .catch((error)=>{
      console.log(error)
    })
},
search: function(req,res){
    const { query: params } = req;
    // var params = req.body;
    axios({
      "method":"GET",
      "url":"https://amazon-price1.p.rapidapi.com/search",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"amazon-price1.p.rapidapi.com",
      "x-rapidapi-key":"3dd4500085msh5885eeb6f5d4bdfp10871ajsn71074949a91a"
      },"params":{
      "keywords": params,
      "marketplace":"US"
      }
      })
      .then((response)=>{
        let data = response.data
        let dataArray = [];
        for (var i = 0; data.length;i++){
          if (data[i] !== undefined){
                var title = "Title: "+data[i].title;
                var price = "Price: "+data[i].price;
                var link = "Link: "+data[i].detailPageURL;
                var rating = "Rating: "+data[i].rating;
                var img = "Image: "+data[i].imageUrl;
              dataArray.push({
                title: title,
                price: price,
                link: link,
                rating: rating,
                img: img
            })
          }else{break}
        }
        res.json(dataArray);
      })
      .catch((error)=>{
        console.log(error)
      })
}
}
