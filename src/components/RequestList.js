import React from 'react';
import { StyleSheet, FlatList,Text,View } from 'react-native';
import RequestDetail from '../components/RequestDetail'
import useRequestData from '../hooks/useRequestData'

const RequestList = () => {
    const [searchVehicle, result] = useRequestData();
    return (
        <View>
        <FlatList
            data={result}
            keyExtractor={(result) => result._id.toString()}
            renderItem={({ item }) => {
                return <RequestDetail result={item} />
            }}
        />
        </View>
    );
};

const style = StyleSheet.create({

});

export default RequestList;