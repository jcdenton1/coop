module.exports = {
	dev: {
	    mongodb: {
            uri: "mongodb://mongodb:27017/testdb"
        }
	},
    prod: {
        mongodb: {
            uri: ""
        }
    }
};