const randomHotel = require('./RandomHotel');

const newRandomHotel = new randomHotel('uk');
(async () => {
    await newRandomHotel.initialize();
    console.log(newRandomHotel.getRandomHotel());
})();


