import { test } from "node:test"
import assert from 'assert'

function add(a, b) {
    return a + b
}

test('add function', () => {
    assert.strictEqual(add(1, 2), 3);
    assert.strictEqual(add(-1, 1), 0);
})
