
import React from 'react'
import renderer, { act } from 'react-test-renderer'

import App from '../src/views/App'

import { mergeStrings } from '../src/logics/Logic'

const testID = (testID) => ({ testID })

test('test view App', () => {

    const app = renderer.create(<App />)
    const root = app.root

    const userInput = root.findByProps(testID('user_name_input'))
    const pwInput = root.findByProps(testID('pw_input'))
    const btnLogin = root.findByProps(testID('button_login'))
    const resText = root.findByProps(testID('result_text'))

    // data to test
    const USERNAME = 'thanhhv'
    const PASSWORD = 'best_password'
    const RESULT = mergeStrings(USERNAME, PASSWORD)

    expect(RESULT).toBe('thanhhv - best_password')

    act(() => {
        userInput.props.onChangeText(USERNAME)
    })

    act(() => {
        pwInput.props.onChangeText(PASSWORD)
    })

    act(() => {
        btnLogin.props.onPress()
    })

    expect(resText.props.children).toBe(RESULT)
})