require("dotenv").config();  // Load environment variables from .env file
const http = require("http");  // Use HTTP instead of HTTPS for simplicity
const app = require("./app");  // Ensure this points to your Express app

const PORT = process.env.PORT || 3000;  // Fallback to port 3000 if PORT is undefined

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
