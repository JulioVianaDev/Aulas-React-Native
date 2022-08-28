import React from 'react'
import { Text,View } from 'react-native'
export function Escolhido(props) {
  return (
    <>
    <View>
        <View >
            <Text >{props.escolhido.title}</Text>
        </View>
        <View >
            <Text >{props.escolhido.description}</Text>
        </View>
    </View>
    </>
  )
}