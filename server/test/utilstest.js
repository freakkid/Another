import assert from 'assert';
import { twelveBitsRandomID, sixteenBitsRandomID } from '../utils';

function twelveBitsRandomIDTEST() {
  const randomID1 = new twelveBitsRandomID();
  var string1 = randomID1.ID;
  assert.deepEqual(typeof string1, 'string');
  assert.deepEqual(string1.length, 12);
}

function sixteenBitsRandomIDTEST() {
  const randomID1 = new sixteenBitsRandomID();
  var string1 = randomID1.ID;
  assert.deepEqual(typeof string1, 'string');
  assert.deepEqual(string1.length, 16);
}

twelveBitsRandomIDTEST();
sixteenBitsRandomIDTEST();
