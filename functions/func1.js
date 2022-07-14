const mongoose = require('mongoose');
const userModel = require('../models/userModel');

// check user doesn't exist 
const checkUser = async(data) =>{
    const resp = await userModel.findOne({contact: data.contact});
    if (resp === null){
        return {status: true, userData: null};
    }else{
        return {status: false, userData: resp};
    }
}


module.exports = {checkUser};
