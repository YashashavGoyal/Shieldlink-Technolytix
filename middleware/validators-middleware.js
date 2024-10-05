const validate = (schema) => async (req, res, next) => {
    try {
        const parsedBody = await schema.parseAsync(req.body);
        req.body = parsedBody;
        next();
    } catch (err) {

        // console.log(err.errors[0].message);
        
        const msg = err.errors[0].message;
        const error = {
            status: 422,
            message: msg,
            discription: "Form Validation Error From Zod",
        }

        next(error);
    }
}

module.exports = validate;