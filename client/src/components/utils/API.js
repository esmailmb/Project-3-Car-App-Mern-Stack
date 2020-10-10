var axios = require('axios');

export default {
  searchVin: function (query) {
    return axios.get(
      `https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvaluesextended/${query}?format=json`)
  }
}
