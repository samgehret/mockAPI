// const mockData = require('./mockData.json')

const color = ['red', 'blue', 'yellow', 'green', 'purple']
const price = [100, 200, 300, 400, 500]


exports.getProduct = function (req, res) {
    let colorInt = Math.floor(Math.random() * 5)
    let priceInt = Math.floor(Math.random() * 4)
    
    // console.log(color[colorInt])
    // console.log(price[priceInt])

 
    let obj = {
        "id": req.params.id,
        "color": color[colorInt],
        "price": price[priceInt]
    }


    res.json(obj)
  }


