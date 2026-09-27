import assert from "node:assert";
import { test } from "node:test";
import { getGreeting } from "../src/greeting.ts";

test("greeting: returns standard greeting for valid name", () => {
  assert.strictEqual(getGreeting("Aegis"), "Hello, Aegis!");
});

test("greeting: returns default greeting when empty", () => {
  assert.strictEqual(getGreeting(""), "Hello, Guest!");
});
