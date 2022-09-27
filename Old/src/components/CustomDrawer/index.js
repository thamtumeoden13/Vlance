import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import CustomListItem from '../CustomListItem';
import {ICON_TYPES} from '../../constants/constant';
import {strLocale} from '../../I18n/I18n';
import Images from '../../themes/Images';
import {AppStyles, MetricsMod} from '../../themes';
import {MAIN_SCREENS} from '../../constants/screens';
import {useDispatch, useSelector} from 'react-redux';
import {isLoggedIn} from '../../redux/Action/user';

const UserDetails = props => {
  const {navigation} = props.props;

  return (
    <View style={styles.userDetails}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.userImage}
          // source={{uri: userData?.Image}}
          resizeMode={'contain'}
        />
      </View>
    </View>
  );
};

const CustomDrawer = props => {
  const {navigation} = props;
  const dispatch = useDispatch();
  return (
    <View style={styles.drawerItemContainer}>
      <UserDetails props={props} />
      <View style={{flex: 1}}>
        <View style={styles.itemContainer}>
          <CustomListItem
            containerStyle={styles.customContainerStyle}
            text={'Profile'}
            textStyleContainer={styles.drawerTextStyle}
            isRightImage
            rightImageName={Images.person}
            rightStyleImage={{tintColor: AppStyles.colorSet.blue}}
          />
          <CustomListItem
            containerStyle={styles.customContainerStyle}
            text={'ID'}
            textStyleContainer={styles.drawerTextStyle}
          />
          <CustomListItem
            containerStyle={styles.customContainerStyle}
            text={'Department'}
            textStyleContainer={styles.drawerTextStyle}
          />
          <CustomListItem
            containerStyle={styles.customContainerStyle}
            text={'Unit'}
            textStyleContainer={styles.drawerTextStyle}
          />
          <CustomListItem
            containerStyle={styles.customContainerStyle}
            text={'Phone number'}
            textStyleContainer={styles.drawerTextStyle}
          />
        </View>
        <View style={styles.itemContainer}>
          <CustomListItem
            containerStyle={styles.customContainerStyle}
            text={'Notification'}
            textStyleContainer={styles.drawerTextStyle}
            isRightImage
            rightImageName={Images.person}
            rightStyleImage={{tintColor: AppStyles.colorSet.blue}}
          />
        </View>

        <View style={styles.itemContainer}>
          <CustomListItem
            containerStyle={styles.customContainerStyle}
            text={'Logout'}
            textStyleContainer={styles.drawerTextStyle}
            isRightImage
            rightImageName={Images.person}
            rightStyleImage={{tintColor: AppStyles.colorSet.blue}}
          />
        </View>
      </View>
      <View style={styles.itemContainerII}>
        <CustomListItem
          containerStyle={styles.customContainerStyle}
          text={'Copyright (c) 2022-EVNICT-v2.9.1'}
          textStyleContainer={styles.drawerTextStyle}
        />
      </View>
    </View>
  );
};

export default CustomDrawer;
