import assert from "node:assert";
import { test } from "node:test";
import { add, subtract } from "../src/calculator.ts";

test("calculator: adds two numbers correctly", () => {
  assert.strictEqual(add(2, 3), 5);
  assert.strictEqual(add(-1, 1), 0);
});

test("calculator: subtracts two numbers correctly", () => {
  assert.strictEqual(subtract(5, 2), 3);
  assert.strictEqual(subtract(0, 4), -4);
});
