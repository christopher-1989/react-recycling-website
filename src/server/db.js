let postIdCounter = 1;

const allPosts = new Array();

const isValidPost = (instance) => {
    if(typeof instance === 'string' && instance.length === 0) {
        throw new Error('The post is empty');
    } else if (typeof instance !== 'string') {
        throw new Error('Post must be a strings');
    }
    return true;
}            


const db = {
    data: allPosts,
    nextId: postIdCounter,
    isValid: isValidPost
}

const getAllFromDatabase = () => {
    return db.data;
}

const getFromDatabaseById = (id) => {
    return db.data.find((element) => {
        return element.id === id;
    });
}

const addToDatabase = (instance) => {
    if(db.isValid(instance.post)) {
        instance.id = `${db.nextId++}`;
        db.data.push(instance);
        return db.data[db.data.length - 1];
    }
}

const updateInstanceInDatabase = (instance) => {
    const instanceIndex = db.data.findIndex((element) => {
      return element.id === instance.id;
    });
    if (instanceIndex > -1 && db.isValid(instance.post)) {
      db.data[instanceIndex] = instance;
      return db.data[instanceIndex];
    } else {
      return null;
    }
}

const deleteFromDatabasebyId = (id) => {
    let index = db.data.findIndex((element) => {
      return element.id === id;
    });
    if (index !== -1) {
      db.data.splice(index, 1);
      return true;
    } else {
      return false;
    }
}
  
const deleteAllFromDatabase = () => {
    db.data = [];
    return db.data;
}

module.exports = {
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase,
  };