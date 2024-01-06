import React from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'
import { Colors } from '../styles/Styles'
import FontFamily from '../styles/FontFamily'

export default function CustomButton({ onPress, children, btnStyles }) {
  return (
    <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed, { ...btnStyles }]} onPress={onPress}>
      <Text style={styles.text}>
        {children}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    margin: 4,
    backgroundColor: Colors.white,
    elevation: 2,
    shadowColor: Colors.black,
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    borderRadius: 4
  },
  pressed: {
    opacity: 0.7
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    color: Colors.primary,
    fontFamily: FontFamily.regular

  }
})