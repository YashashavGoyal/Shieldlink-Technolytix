const adminMiddleware = async (req, res, next) => {
    try {
        const user = req.user;
        const isAdmin = user.isAdmin;
        // console.log(user);
        
        
        if (!isAdmin) {
            return res.status(401).json({ message: "You are not authenticated To access the page" });
        }

        next();
    } catch (err) {
        // console.error(err);
        // res.status(500)
        //     .json({message: "Internal Server Error Can't Authenticate"});

        const error = {
            status: 500,
            message: "Internal Server Error Can't Authenticate",
            discription: err,
        }
        next(error);
    }
}

module.exports = adminMiddleware;