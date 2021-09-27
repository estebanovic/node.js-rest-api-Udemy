const db = require("../config/db.config");

exports.addPost = (data, callback) => {
    db.query(`INSERT INTO posts (description, imagePath, datatimeCreated, addedByUsesId)
    VALUES (?,?,?,?)`,
        [data.description, data.imagePath, new Date(), data.addedByUsesId],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, "Post added successfully");
        }
    );
};