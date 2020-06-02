import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import VehicleDetail from '../components/VehicleDetail'
import useVehicleData from '../hooks/useVehicleData'

const VehicleList = function() {
    const [searchVehicle, result] = useVehicleData();
    return (
        <FlatList
            data={result}
            keyExtractor={(result) => result._id.toString()}
            renderItem={({ item }) => {
                return <VehicleDetail result={item} />
            }}
        />
    );
};

const style = StyleSheet.create({

});

export default VehicleList;