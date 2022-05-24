const local = {
    PORT: 8080,
    MONGO_URL_RULE: {
        connectionString: "mongodb://10.0.8.62:27017/oneLeadDB",
        collection: "oneLeadDB",
        user: "devUser",
        password: "devUser123"
    },
}

const config = local;

module.exports = {
    ...config
};