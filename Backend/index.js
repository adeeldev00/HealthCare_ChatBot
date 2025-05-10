require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

// Middleware Configuration
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());

// API Key Verification Middleware
app.use((req, res, next) => {
  if (!process.env.API_KEY) {
    console.error("API_KEY is missing from environment variables");
    return res.status(500).json({ error: "Server configuration error" });
  }
  next();
});

// Health Summary Endpoint
app.post("/api/getHealthSummary", async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    console.log("Processing prompt:", prompt.substring(0, 50) + "...");

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash-001:generateContent?key=${process.env.API_KEY}`,
      {
        contents: [
          {
            role: "user",
            parts: [{ text: prompt }],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        timeout: 15000, // 10 second timeout
      }
    );

    const responseData = response.data;
    console.log("API Response:", JSON.stringify(responseData, null, 2));

    res.json(responseData);
  } catch (error) {
    console.error("Full Error:", {
      message: error.message,
      response: error.response?.data,
      stack: error.stack,
    });

    const statusCode = error.response?.status || 500;
    res.status(statusCode).json({
      error: "AI service unavailable",
      details: error.response?.data?.error || error.message,
    });
  }
});

// Test Endpoint
app.get("/", (req, res) => {
  res.send("🚀 Backend is running properly");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
  console.log(`🔗 Test endpoint: http://localhost:${PORT}`);
});

// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
});

// Handle promise rejections
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});
