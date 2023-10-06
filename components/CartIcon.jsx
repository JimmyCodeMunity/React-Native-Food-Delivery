import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'

const CartIcon= () => {
  return (
    <View className="absolute bottom-5 w-fullz-50">
      <TouchableOpacity
      style={{ backgroundColor:themeColors.bgColor(1) }}
      className="flex-row justify-between items-center mx-5 rounded-full p-4 py-5 shadow-lg"
      >
        <View className="">
          <Text className="font-extra-bold text-white text-lg">3</Text>
        </View>

      </TouchableOpacity>
      
    </View>
  )
}

export default  CartIcon

const styles = StyleSheet.create({})