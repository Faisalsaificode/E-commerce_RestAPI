import jwt from "jsonwebtoken";

const jwtAuth = (req, res, next) =>{
    // 1 read the token
    console.log(req.headers)
    const token = req.headers['authorization'];

    console.log(token)


    // 2 if no token, return the error

    if(!token){
        return res.status(401).send('Unauthorized')
    }

    // 3 check if token is valid

    try{
        const payload = jwt.verify(token, "AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz1");
        console.log(payload);
    }catch(err){
        // return error

        return res.status(401).send('Unauthorized');
    }
    // call next middleware
    next();

};

export default jwtAuth;