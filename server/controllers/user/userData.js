
const userData = async (req, res, next) => {
    res.json(req.user);
};

export default userData;
