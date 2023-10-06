import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { featured } from '../constants'
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import { themeColors } from '../theme';
import * as Icon from 'react-native-feather'
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../slices/restaurantSlice';
import { emptyCart } from '../slices/cartSlice';

const DeliveryScreen = () => {
    //const restaurant = featured.restaurants[0];
    const restaurant = useSelector(selectRestaurant);
    const navigation = useNavigation();
    const dispatch = useDispatch();

    //navigate back to homeon cancel
    const cancelOrder = () =>{
        navigation.navigate('Home');
        dispatch(emptyCart());
    }
    return (
        <View className="flex-1 bg-white">
            {/**mapview */}
            <MapView
                initialRegion={{
                    latitude: restaurant.lat,
                    longitude: restaurant.lng,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,

                }}
                className="flex-1"
                mapType='standard'
            >
                <Marker
                    coordinate={{
                        latitude: restaurant.lat,
                        longitude: restaurant.lng,

                    }}
                    title={restaurant.name}
                    description={restaurant.description}
                    pinColor={themeColors.bgColor(1)}
                />
            </MapView>
            <View className="rounded-t-3xl relative -mt-12 bg-white">
                <View className="flex-row justify-between px-5 pt-10">
                    <View>
                        <Text className="text-gray-700 font-semibold">
                            Estimated Arrival
                        </Text>
                        <Text className="text-gray-700 text-3xl font-extrabold">
                            20-30 Minutes
                        </Text>
                        <Text className="mt-2 font-semibold text-gray-700">
                            Your order is on its way!{restaurant.lat}
                        </Text>
                    </View>
                    <Image className="h-24 w-24" source={require('../assets/images/bikeGuy2.gif')}/>
                </View>

                <View style={{ backgroundColor: themeColors.bgColor(0.8)}} className="p-2 flex-row justify-between mb-2 rounded-full items-center mx-2">
                    <View style={{ backgroundColor:'rgba(255,255,255,0.4)' }} className="p-1 rounded-full">
                        <Image className="h-16 w-16 rounded-full" source={require('../assets/images/deliveryGuy.jpg')}/>

                    </View>
                    <View className="flex-1 ml-3">
                        <Text className="font-bold text-lg text-white">
                            Jimin
                        </Text>
                        <Text className="font-semibold text-white">
                            Your Rider
                        </Text>
                    </View>

                    <View className="flex-row items-center space-x-3 mr-3">
                        <TouchableOpacity className="bg-white p-2 rounded-full">
                            <Icon.Phone fill={themeColors.bgColor(1)} stroke={themeColors.bgColor(1)} strokeWidth={1}/>

                        </TouchableOpacity>
                        <TouchableOpacity onPress={cancelOrder} className="bg-white p-2 rounded-full">
                            <Icon.X stroke="red" strokeWidth={3}/>

                        </TouchableOpacity>
                    </View>

                </View>
            </View>

        </View>
    )
}

export default DeliveryScreen

const styles = StyleSheet.create({})