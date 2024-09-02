const express = require("express");
const path = require("path");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "build")));

// Set up reverse proxy for /feature route
app.use(
  "/feature",
  createProxyMiddleware({
    target: "http://172.206.251.171:5000",
    changeOrigin: true,
  })
);

// Handle any other requests by serving the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
