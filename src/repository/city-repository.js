const {City} = require('../models/index.js');

class CityRepository {
    async createCity({name}){
        try {
            const newCity = await City.create({name});
            return newCity;
        }
        catch (error) {
            console.error('Error creating city:', error);
            throw error;
        }
    }
    async deleteCity({cityId}){
        try {
             await City.destroy({
                where: {
                    id: cityId
                }
            });
        }
        catch (error) {
            console.error('Error deleting city:', error);
            throw error;
        }
    }
}

module.exports = CityRepository;