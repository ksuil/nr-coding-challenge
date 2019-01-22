
const getVisits = (req, res, next) => {
    return res.json('Testing Changing Values');
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