
const getVisits = (req, res, next) => {
    return res.json('Testing Changing Values');
}

const postVisits = (req, res, next) => {
    return res.json('Another Test');
}

module.exports = {    
    getVisits,
    postVisits
};