const frontendCorsOption = {
    origin: 'http://localhost:3001', // Replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
    credentials: true, // Allow credentials such as cookies or HTTP authentication
};

module.exports = {
    frontendCorsOption,
}