import { handleSubmit } from "../src/client/js/handleSubmit";  // Importing the handleSubmit function from the client-side code
import { describe, expect } from "@jest/globals";  // Importing Jest testing functions for writing test cases

// Describing the test suite for testing the handleSubmit function
describe('Testing handleSubmit function', () => {
    // Test case to check if the handleSubmit function is defined
    test('It should return true because the function is defined', () => {
        expect(handleSubmit).toBeDefined();  // Verifying that the function exists (is defined)
    });

    // Test case to check if handleSubmit is indeed a function
    test('It should return true as handleSubmit is a function', () => {
        expect(typeof handleSubmit).toBe('function');  // Checking that the type of handleSubmit is a function
    });
});
