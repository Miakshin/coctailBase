import mongoose from 'mongoose';

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
        createdAt: new Date()
    });

    return coctail.save();
}

export function deleteCoctail(id) {
    return Coctail.findById(id).remove();
}
