import { StyleSheet, Text, View, SafeAreaView, TextInput, ScrollView, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import * as Icon from "react-native-feather"
import { themeColors } from '../theme'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import { featured } from '../constants'
import { getFeaturedRestaurants } from '../api'

const HomeScreen = () => {
    const [featured, setFeatured] = useState([]);
    const [refreshing, setRefreshing] = useState(false);


    const fetchFeatured = () => {
        setRefreshing(true);
        getFeaturedRestaurants().then((data) => {
            setFeatured(data);
            setRefreshing(false);
        });

    }

    useEffect(()=>{
        fetchFeatured();
    },[]);
    return (
        <SafeAreaView className="bg-white flex-1">
            <StatusBar barStyle="dark-content" />
            {/**Search section */}
            <View className="flex-row items-center space-x-2 px-4 pb-2 mt-10">
                <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
                    <Icon.Search height="25" width="25" stroke="gray" />
                    <TextInput placeholder="Restaurants" className="ml-2 flex-1" />

                    <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
                        <Icon.MapPin height="20" width="20" stroke="gray" />
                        <Text className="text-gray-600">New York, NYC</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: themeColors.bgColor(1) }} className="p-3 rounded-full">
                    <Icon.Sliders height={20} width="20" strokeWidth={2.5} stroke="white" />
                </View>
            </View>

            {/**Main */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 20
                }}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={fetchFeatured} />
                  }
            >
                {/**categories */}
                <Categories />


                {/**featured */}
                <View className="mt-5">
                    {
                        featured.map((item, index) => {
                            return (
                                <FeaturedRow
                                    key={index}
                                    title={item.name}
                                    restaurants={item.restaurants}
                                    description={item.description}
                                />

                            )
                        })
                    }
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})