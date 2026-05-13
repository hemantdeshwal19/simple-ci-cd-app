const request = require("supertest");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "CI/CD Pipeline Working Successfully 🚀"
  });
});

describe("GET /", () => {
  it("should return success message", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe(
      "CI/CD Pipeline Working Successfully 🚀"
    );
  });
});
