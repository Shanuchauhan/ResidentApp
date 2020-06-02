import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const VehicleDetailHistory = ({ result }) => {
    return (
        <View>
            <Text>Licence Number: {result.vehicle}</Text>
            <Text>Guest Name: {result.name}</Text>
                {/* <Text>Date of Arrival: {result.dob.date}</Text>
                <Text>Date of Departure: {result.registered.date}</Text> */}
        </View>
    );
};

export default VehicleDetailHistory;