import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
// local imports
import styles from './styles';
import AppStyles from '../../../../../themes/AppStyles';
import CustomHeader from '../../../../../components/CustomHeader';
import {Images} from '../../../../../themes';
import {ICON_TYPES, Map_LIST} from '../../../../../constants/constant';
import VectorIconComponent from '../../../../../components/VectorIconComponent';
import CustomModal from '../../../../../components/customModal';
import {isEmpty} from 'lodash';

function HomeCoordinates(props) {
  const {navigation} = props;

  const [openModal, setOpenModal] = useState(false);
  const [matType, setMapType] = useState('');
  const [position, setPosition] = useState({
    latitude: 10,
    longitude: 10,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(pos => {
      const crd = pos.coords;
      setPosition({
        latitude: crd.latitude,
        longitude: crd.longitude,
        latitudeDelta: 0.0421,
        longitudeDelta: 0.0421,
      });
    }).catch(err => {
      console.log(err);
    });
  }, []);

  const toggleModel = () => {
    setOpenModal(prevState => !prevState);
  };

  const onPressItem = key => {
    if (key === 'hybrid') {
      setMapType('hybrid');
      toggleModel();
    } else if (key === 'satellite') {
      setMapType('satellite');
      toggleModel();
    } else if (key === 'street') {
      setMapType('terrain');
      toggleModel();
    }
  };

  const renderBottomButton = () => (
    <View>
      <View style={styles.imagesContainer}>
        <View>
          <TouchableOpacity style={styles.backgroundIcon} activeOpacity={0.9}>
            <VectorIconComponent
              name={'camera'}
              size={25}
              color={AppStyles.colorSet.white}
              type={ICON_TYPES.Feather}
              onPress={toggleModel}
            />
          </TouchableOpacity>
          <Text style={styles.textFieldStyleII}>Client location</Text>
        </View>
        <View>
          <TouchableOpacity
            style={[
              styles.backgroundIcon,
              {backgroundColor: AppStyles.colorSet.darkOrange},
            ]}
            onPress={toggleModel}
            activeOpacity={0.9}>
            <VectorIconComponent
              name={'folderopen'}
              size={25}
              color={AppStyles.colorSet.white}
              type={ICON_TYPES.AntDesign}
            />
          </TouchableOpacity>
          <Text style={styles.textFieldStyleII}>Display type</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.backgroundIcon}
            // onPress={toggleModel}
            activeOpacity={0.9}>
            <VectorIconComponent
              name={'folderopen'}
              size={25}
              color={AppStyles.colorSet.white}
              type={ICON_TYPES.AntDesign}
            />
          </TouchableOpacity>
          <Text style={styles.textFieldStyleII}>Update location</Text>
        </View>
      </View>
    </View>
  );

  const renderMap = () => (
    // <MapView
    //   style={{height: '100%'}}
    //   initialRegion={{
    //     latitude: 37.78825,
    //     longitude: -122.4324,
    //     latitudeDelta: 0.0922,
    //     longitudeDelta: 0.0421,
    //   }}
    // />
    <MapView
      mapType={!isEmpty(matType)}
      style={styles.map}
      initialRegion={position}
      showsUserLocation={true}
      showsMyLocationButton={true}
      followsUserLocation={true}
      showsCompass={true}
      scrollEnabled={true}
      zoomEnabled={true}
      pitchEnabled={true}
      rotateEnabled={true}
      moveOnMarkerPress={true}
      showsTraffic
      showsIndoors
      showsBuildings
      showsPointsOfInterest
      userLocationCalloutEnabled
      scrollDuringRotateOrZoomEnabled
      showsIndoorLevelPicker
      toolbarEnabled>
      <Marker
        title="Yor are here"
        //  description='This is a description'
        coordinate={position}
      />
    </MapView>
  );
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        animated={true}
        backgroundColor={AppStyles.colorSet.blue}
        translucent={false}
      />
      <CustomHeader
        title={'Home Coordinates'}
        headerTitleStyle={styles.headerTitleStyle}
        isLeftImage
        leftImageName={Images.back}
        leftImageOnPress={() => navigation.goBack()}
      />
      <View style={{flex: 1}}>{renderMap()}</View>

      {renderBottomButton()}
      <CustomModal
        open={openModal}
        close={toggleModel}
        data={Map_LIST}
        title={'SELECT TYPE'}
        onPress={onPressItem}
      />
    </SafeAreaView>
  );
}

export default HomeCoordinates;
