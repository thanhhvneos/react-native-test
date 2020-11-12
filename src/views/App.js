
import React, { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { mergeStrings } from '../logics/Logic'

export default () => {

  const [userName, setUserName] = useState('')
  const [passWord, setPassWord] = useState('')
  const [textResult, setTextResult] = useState('')

  const pressLogin = () => {
    setTextResult(mergeStrings(userName, passWord))
  }

  return <View testID='rootView' style={{ padding: 60 }}>
    <TextInput
      testID='user_name_input'
      style={styles.input}
      value={userName}
      onChangeText={setUserName}
      placeholder='Username'
    />

    <TextInput
      testID='pw_input'
      style={styles.input}
      value={passWord}
      onChangeText={setPassWord}
      placeholder='Password'
    />

    <Button testID='button_login' title='Login' onPress={pressLogin} />

    <Text testID='result_text' style={styles.textResult}>{textResult}</Text>
  </View>
}

const styles = StyleSheet.create({
  input: {
    marginTop: 20,
    height: 50,
    paddingHorizontal: 20,
    fontSize: 25,
    borderRadius: 4,
    borderColor: '#bdbdbd',
    borderWidth: 1,
  },
  textResult: {
    fontSize: 20,
    marginTop: 40,
    alignSelf: 'center'
  }
})