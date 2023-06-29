import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Texto({children, style}) {
    let defaulStyle = styles.text

    if (style?.fontWeight === 'bold') {
        defaulStyle = styles.boldText
    }
  return (
      <Text style={[style , defaulStyle]}>{children}</Text>
  )
}

const styles = StyleSheet.create({
    text: {
        fontFamily:'MontserratRegular',
        fontWeight:'normal',
    },
    boldText : {
        fontFamily:"MontserratBold",
        fontWeight:'normal',
    }
})