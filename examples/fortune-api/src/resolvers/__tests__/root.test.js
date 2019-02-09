import root from '../root';

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});

test('the mocks', () => {
  expect(root.Query.fortunes.mocks).toBeTruthy;
});
