 
"use strict";

const reponse = require('./helper/response');
const jwt = require('jsonwebtoken');

module.exports.requireLoggedIn = async (event, context) => {
    let headers = event.headers;
    let authorization = headers.Authorization;
    let decodedJwt = jwt.decode(authorization, {complete: true});
    let payload = decodedJwt.payload;
    let userUuid = payload.sub;
    let userEmail = payload.email;
    console.log(userUuid);
    console.log(userEmail);
    
    return reponse.response({
        message: 'You logged in.',
        data: []
    });
};