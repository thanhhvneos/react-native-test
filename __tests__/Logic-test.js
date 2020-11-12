import { mergeStrings } from "../src/logics/Logic"

test('merge two strings: mergeStrings(user, pass) return user - pass', () => {
    expect(mergeStrings('user', 'pass')).toBe('user - pass')
    expect(mergeStrings('thanhhv', '123123')).toBe('thanhhv - 123123')
})