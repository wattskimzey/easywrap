const axios = require("axios");
const homeArray = ["Clothing & Shoes","Jewelry & Watches","Home & Kitchen","Books","Electronics"]

module.exports = {
home: function(req,res){
    axios({
        "method":"GET",
        "url":"https://axesso-axesso-amazon-data-service-v1.p.rapidapi.com/amz/amazon-search-by-keyword",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"axesso-axesso-amazon-data-service-v1.p.rapidapi.com",
        "x-rapidapi-key": "d3e3d8dc41msh479127268b4732dp1b4f84jsn743b517019dc"
      },"params":{
        "sortBy":"relevanceblender",
        "numberOfProducts":"10",
        "domainCode":"com",
        "page":"1",
        "keyword": homeArray[Math.floor(Math.random()*5)]
        }
        })
        .then((response)=>{
            let data = response.data.foundProductDetails
            
            let dataArray = [];

          for (var i = 0; data.length;i++){
              if (data[i] !== undefined){
              var title = "Title: "+data[i].productTitle ;
              var price = "Price: "+data[i].price;
              var link = "Link: https://www.amazon.com/dp/" + data[i].asin;
              var rating = "Rating: "+data[i].productRating;
              var description = "Description: "+data[i].productDescription;
              var img = "Image: "+data[i].mainImage.imageUrl;

              dataArray.push({
                  title: title,
                  price: price,
                  link: link,
                  rating: rating,
                  description: description,
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
        "url":"https://axesso-axesso-amazon-data-service-v1.p.rapidapi.com/amz/amazon-search-by-keyword",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"axesso-axesso-amazon-data-service-v1.p.rapidapi.com",
        "x-rapidapi-key": "d3e3d8dc41msh479127268b4732dp1b4f84jsn743b517019dc"
        },"params":{
        "sortBy":"relevanceblender",
        "numberOfProducts":"10",
        "domainCode":"com",
        "page":"1",
        "keyword": params
        }
        })
        .then((response)=>{
            let data = response.data.foundProductDetails
            
            let dataArray = [];

          for (var i = 0; data.length;i++){
              if (data[i] !== undefined){
              var title = "Title: "+data[i].productTitle ;
              var price = "Price: "+data[i].price;
              var link = "Link: https://www.amazon.com/dp/" + data[i].asin;
              var rating = "Rating: "+data[i].productRating;
              var description = "Description: "+data[i].productDescription;
              var img = "Image: "+data[i].mainImage.imageUrl;

              dataArray.push({
                  title: title,
                  price: price,
                  link: link,
                  rating: rating,
                  description: description,
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
