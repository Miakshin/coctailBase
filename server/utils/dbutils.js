import mongoose from 'mongoose';
import fs from 'fs';

import Coctail from '../model/coctail';

export function setUpConnection() {
  mongoose.connect('mongodb://admin:admin@ds251985.mlab.com:51985/coctails');
}

export function listCoctails(id) {
    if(id){
    return  Coctail.findOne({ '_id': id });
    }
    else{
      return Coctail.find()
    }
}

export function createCoctail(data) {
    var coctail = new Coctail({
        name: data.name,
        components: data.components,
        recipe: data.recipe,
        createdAt: new Date(),
        imgSrc :  data.imgSrc
    });

    return coctail.save();
}

export function deleteCoctail(id) {
    return Coctail.findById(id).remove();
}

export function getCoctailByName(name) {
    return Coctail.find({name: `/$name/i`})
    .limit(5)
    .exec(function(err, coctail) {
        if (err) throw err;

        console.log(coctail);
    });
}
