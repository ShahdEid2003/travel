import { describe, expect } from "@jest/globals";  // Importing testing functions from Jest
const request = require("supertest");  // Importing supertest to make HTTP requests
const app = require("../src/server/index.js");  // Importing the app from the server file

// Describing the test suite for testing the root path of the server
describe("Test the root path", () => {
    // Writing a test to check if the GET request to the root path is successful
    test("It should response the GET method", done => {
        request(app)  // Making a GET request to the root ("/") of the app
            .get("/")  // Performing the GET method on the root path
            .then(response => {  // Handling the response from the server
                expect(response.statusCode).toBe(200);  // Checking if the status code is 200 (OK)
                done();  // Indicating that the test is finished
            });
    });
});
