import { test } from 'tap'
import { find } from '../src/find'

test('find', async (t) => {
  const data = [1, 2, [4, 4, [[4], 5, [2, 3, [4]]]]]

  t.deepEquals(
    find(data, 4),
    [4, 4, 4, 4],
    'should return all occurances of target in array'
  )
})
