// import model
const model = require('./classroom.model');


// count
module.exports.count = (query) => {
  return new Promise((resolve, reject) => {
    model
      .count(query)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// find all
module.exports.findAll = (query,limit=0,skip=0) => {
  return new Promise((resolve, reject) => {

    model
      .find(query)
      .limit(limit) 
      .skip(skip)
      .populate('school_id')
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// get By Id
module.exports.findById = (query) => {
  return new Promise((resolve, reject) => {
    model
      .findById(query)
      .populate('school_id')
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// save object
module.exports.save = (obj) => {
  return new Promise((resolve, reject) => {
    new model(obj)
      .save()
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// update object
module.exports.updateSingleObject = (query, obj) => {
  return new Promise((resolve, reject) => {
    
    model
    .findOneAndUpdate(query, obj, { new: true, safe: true })
    .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// remove object
module.exports.removeObject = (query) => {
  return new Promise((resolve, reject) => {
    model
      .findByIdAndDelete(query)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
