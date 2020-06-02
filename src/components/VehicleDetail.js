import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Container, Header, Content, CardItem, Body } from 'native-base'

const VehicleDetail = ({ result }) => {
    return (
        <View style= {styles.card}>        
            <View style = {styles.cardContent}>
            <Text>Name: {result.name}</Text>
            <Text>Flat Number: {result.address}</Text>
            <Text>Phone Number: {result.phone}</Text>
            <Text>Vehicle Number: {result.vehicle}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card:{
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#ddd',
        shadowOffset: {width:1,height:1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6
    },
    cardContent:{
        marginHorizontal: 10,
        marginVertical: 10

    }

});

export default VehicleDetail;