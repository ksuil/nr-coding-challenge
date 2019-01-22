const db = require('../config/db');
const urlParse = require('url-parse');

/**
 * Helper function for converting the sequelize objects into the desired format
 */
async function findAllVisits() {
    const results = await db.visit.findAll();
    const toReturn = {};
    results.forEach(row => {
        toReturn[row.url] = row.hits
    });

    return toReturn;
}

/**
 * Get all urls in the system
 * 
 * @param {Request} req Express Request Object
 * @param {Response} res Express Response Object
 * @param {Function} next Next Middleware
 */
const getVisits = async (req, res, next) => {
    return res.json(await findAllVisits());
}

/**
 * Post url(s) to the system, incrementing if an existing url
 * 
 * @param {Request} req Express Request Object
 * @param {Response} res Express Response Object
 * @param {Function} next Next Middleware
 */
const postVisits = async (req, res, next) => {
    const errors = [];
    const newVisits = req.body.map(async (entry) => {
        const parsedUrl = urlParse(entry, true);

        // based on this package, check the host, protocol and slashes
        // TODO: Maybe check DNS for a valid hostname?
        if (!parsedUrl.slashes || !parsedUrl.host || !parsedUrl.protocol) {
            errors.push(`Entry "${entry}" does not appear to be valid`);
            return Promise.resolve();
        }

        let url = `${parsedUrl.protocol}//${parsedUrl.host}`;
        url = url.toLowerCase();
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

    const visits = await findAllVisits();
    
    return res.json({
        data: visits,
        errors
    });
}

module.exports = {    
    getVisits,
    postVisits
};