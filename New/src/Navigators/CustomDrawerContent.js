import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';


const CustomDrawerContent = props => {
    const { navigation } = props;
    const dispatch = useDispatch();

    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Help" onPress={() => alert('Link to help')} />
        </DrawerContentScrollView>
    );
};

export default CustomDrawerContent;
