const request = require('request-promise-native');

const markets = {
    'uk':'https://www.thomascook.com/api/packages',
    'nl':'https://neckermann.nl/api/packages',
    'be':'https://neckermann.be/api/packages'
};

class RandomHotel {


    constructor(market){
        this.marketUri = markets[market];
    }

    async initialize(){
        return this._allPackages = await request.get({
            uri: this.marketUri,
            json: true
        });
    }

    _getHotelNames() {
        return this._allPackages.items.map(item => {
            return item.hotel.value;
        });
    }

    getRandomHotel(){
        const hotelId = Math.floor(Math.random()*Object.keys(this._getHotelNames()).length);
        return this._getHotelNames()[hotelId];
    }
}

module.exports = RandomHotel;