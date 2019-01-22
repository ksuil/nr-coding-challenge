const db = require('../config/db');

const getVisits = async (req, res, next) => {
    const visits = await db.visit.findAndCountAll();
    return res.json(visits);
}

const postVisits = (req, res, next) => {
    const newVisits = req.body;
    
    return res.json({
        'status': 'OK',
        newVisits
    });
}

module.exports = {    
    getVisits,
    postVisits
};