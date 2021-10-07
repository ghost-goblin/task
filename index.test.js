const { filterFunction } = require('./index');

test('test_01', () => {
  const array = [  [ { id: 1 }, { id: 2 } ]  ]
  expect(filterFunction([ { id: 1 }, { id: 2 } ])).toEqual(array)
})

test('test_02', () => {
  const array = [  [ { id: 1 }, { id: 2 } ], [ { id: 1 }, { id: 2 } ]  ]
  expect(filterFunction([ { id: 1 }, { id: 1 }, { id: 2 } ])).toEqual(array)
})


test('test_03', () => {
  const array = [
        [ { id: 1 }, { id: 2 }, { id: 3 } ],
        [ { id: 1 }, { id: 2 }, { id: 3 } ],
        [ { id: 1 }, { id: 2 }, { id: 3 } ],
        [ { id: 1 }, { id: 2 }, { id: 3 } ]
    ]
  expect(filterFunction([ { id: 1 }, { id: 1 }, { id: 2 }, { id: 2 }, { id: 3 } ])).toEqual(array)
})

test('test_04', () => {
  const array = [
        [ { id: 1 }, { id: 2 }, { id: 3 } ],
        [ { id: 1 }, { id: 2 }, { id: 3 } ],
        [ { id: 1 }, { id: 2 }, { id: 3 } ],
        [ { id: 1 }, { id: 2 }, { id: 3 } ],
        [ { id: 1 }, { id: 2 }, { id: 3 } ],
        [ { id: 1 }, { id: 2 }, { id: 3 } ]
    ]
  expect(filterFunction([ { id: 1 }, { id: 1 }, { id: 2 }, { id: 2 }, { id: 2 }, { id: 3 } ])).toEqual(array)
})

test('test_05', () => {
  const array = [
        [ { id: 1 }, { id: 2 }, { id: 3 } ],
        [ { id: 1 }, { id: 2 }, { id: 3 } ],
        [ { id: 1 }, { id: 2 }, { id: 3 } ],
        [ { id: 1 }, { id: 2 }, { id: 3 } ],
        [ { id: 1 }, { id: 2 }, { id: 3 } ],
        [ { id: 1 }, { id: 2 }, { id: 3 } ],
        [ { id: 1 }, { id: 2 }, { id: 3 } ],
        [ { id: 1 }, { id: 2 }, { id: 3 } ],
        [ { id: 1 }, { id: 2 }, { id: 3 } ],
        [ { id: 1 }, { id: 2 }, { id: 3 } ],
        [ { id: 1 }, { id: 2 }, { id: 3 } ],
        [ { id: 1 }, { id: 2 }, { id: 3 } ]
    ]
  expect(filterFunction([ { id: 1 }, { id: 1 }, { id: 2 }, { id: 2 }, { id: 3 }, { id: 3 }, { id: 3 } ])).toEqual(array)
})
