import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import App from '../src/views/App'
import { mergeStrings } from '../src/logics/Logic'

test('testing with react-native-testing-library', () => {
    const { getAllByA11yLabel, getByTestId, getByText } = render(<App />)

    const userInput = getByTestId('user_name_input')
    const passInput = getByTestId('pw_input')
    const btnLogin = getByTestId('button_login')
    const resText = getByTestId('result_text')

    fireEvent.changeText(userInput, 'thanhhv')
    fireEvent.changeText(passInput, '123')
    fireEvent.press(btnLogin)

    expect(resText.props.children).toBe(mergeStrings('thanhhv', '123'))
})