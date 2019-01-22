const db = require('../config/db');

async function findAllVisits() {
    const results = await db.visit.findAll();
    const toReturn = {};
    results.forEach(row => {
        toReturn[row.url] = row.hits
    });

    return toReturn;
}

const getVisits = async (req, res, next) => {
    return res.json(await findAllVisits());
}

const postVisits = async (req, res, next) => {
    const newVisits = req.body.map(async (url) => {
        // TODO process the url here
        const foundUrl = await db.visit.findOne({
            where: {
                url
            }
        });

        if (foundUrl) {
            return foundUrl.increment('hits');
        }

        return db.visit.create({
            url,
            hits: 1
        });
    });

    await Promise.all(newVisits);
    
    return res.json(await findAllVisits());
}

module.exports = {    
    getVisits,
    postVisits
};