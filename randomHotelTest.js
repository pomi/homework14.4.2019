const randomHotel = require('./RandomHotel');

const ukRandomHotel = new randomHotel('uk');
(async () => {
    await ukRandomHotel.initialize();
    console.log(ukRandomHotel.getRandomHotel());
})();
const beRandomHotel = new randomHotel('be');
(async () => {
    await beRandomHotel.initialize();
    console.log(beRandomHotel.getRandomHotel());
})();
const nlRandomHotel = new randomHotel('nl');
(async () => {
    await nlRandomHotel.initialize();
    console.log(nlRandomHotel.getRandomHotel());
})();


