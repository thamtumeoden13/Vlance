import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// local imports
import styles from './styles';
import AppStyles from '../../../../../themes/AppStyles';
import CustomHeader from '../../../../../components/CustomHeader';
import {Images, MetricsMod} from '../../../../../themes';
import {
  CHOOSE_CAMERA_LIST,
  ICON_TYPES,
  PAPERS_LIST,
} from '../../../../../constants/constant';
import VectorIconComponent from '../../../../../components/VectorIconComponent';
import CustomModal from '../../../../../components/customModal';
import ImagePicker from 'react-native-image-crop-picker';
import {MAIN_SCREENS} from '../../../../../constants/screens';
import CustomButton from '../../../../../components/CustomButton';
import CustomTextInput from '../../../../../components/customTextInput';

function DocumentInformation(props) {
  const {navigation} = props;
  const [note, setNote] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [open, setOpen] = useState({});

  const toggleView = (index: number) => {
    if (open === index) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };

  const toggleModel = () => {
    setOpenModal(prevState => !prevState);
  };

  const takePhotoFromLibrary = async () => {
    const image = await ImagePicker.openPicker({
      multiple: true,
      waitAnimationEnd: false,
      sortOrder: 'desc',
      includeExif: true,
      forceJpg: true,
      width: MetricsMod.threeHundred,
      height: MetricsMod.threeHundred,
      cropping: true,
      maxFiles: 2,
    });
    const images = image.map(i => {
      return {
        uri: i.path,
        width: i.width,
        height: i.height,
        mime: i.mime,
      };
    });
    setSelectedImage({images});
    setOpenModal(false);
  };

  const takePhotoFromCamera = async () => {
    const image = await ImagePicker.openCamera({
      multiple: true,
      waitAnimationEnd: false,
      sortOrder: 'desc',
      includeExif: true,
      forceJpg: true,
      width: MetricsMod.threeHundred,
      height: MetricsMod.threeHundred,
      cropping: true,
      maxFiles: 2,
    });
    const images = image.map(i => {
      return {
        uri: i.path,
        width: i.width,
        height: i.height,
        mime: i.mime,
      };
    });
    setSelectedImage({images});
    setOpenModal(false);
  };

  const onPressItem = key => {
    if (key === 'takePhoto') {
      takePhotoFromCamera();
    } else {
      takePhotoFromLibrary();
    }
  };

  const renderSurveyInformation = () => (
    <View style={styles.detailContainer}>
      <Text style={styles.textFieldStyle}>Note</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={note}
        onChangeText={value => setNote(value)}
      />
      <Text style={styles.textFieldStyle}>
        Survey photo (Drawing, cylinder..)
      </Text>
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
            <Text style={styles.textFieldStyleII}>Camera</Text>
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
            <Text style={styles.textFieldStyleII}>Library</Text>
          </View>
        </View>
        {selectedImage?.images.length > 0 && (
          <TouchableOpacity
            style={styles.imageView}
            activeOpacity={0.3}
            onPress={toggleModel}>
            {selectedImage?.images.map((item, index) => {
              return (
                <View key={index}>
                  <Image
                    key={index}
                    source={{uri: item?.uri}}
                    style={styles.userImage}
                  />
                  <View style={styles.crossContainer}>
                    <VectorIconComponent
                      name={'cross'}
                      size={30}
                      color={AppStyles.colorSet.red}
                      type={ICON_TYPES.Entypo}
                    />
                  </View>
                </View>
              );
            })}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
  const renderList = () => (
    <View>
      {PAPERS_LIST.map((item, index) => {
        const {title, key, rightText} = item;
        return (
          <>
            <TouchableOpacity
              style={styles.listContainer}
              key={key}
              activeOpacity={0.8}
              onPress={() => toggleView(index)}>
              <View style={{width: '85%'}}>
                <Text style={styles.headerTitleStyle} numberOfLines={2}>
                  {title}
                </Text>
                {/*<Text style={styles.headerTitleStyleII}></Text>*/}
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.headerTitleStyleII}>({rightText})</Text>
                <VectorIconComponent
                  name={open === index ? 'chevron-up' : 'chevron-down'}
                  size={20}
                  color={AppStyles.colorSet.black}
                  type={ICON_TYPES.Entypo}
                  onPress={() => toggleView(index)}
                  style={{marginRight: MetricsMod.baseMargin}}
                />
              </View>
            </TouchableOpacity>
            {open === index && (
              <View>
                <View style={styles.imagesContainer}>
                  <TouchableOpacity
                    style={styles.backgroundIcon}
                    activeOpacity={0.9}>
                    <VectorIconComponent
                      name={'camera'}
                      size={25}
                      color={AppStyles.colorSet.white}
                      type={ICON_TYPES.Feather}
                      onPress={toggleModel}
                    />
                  </TouchableOpacity>
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
                </View>
                <TouchableOpacity
                  style={styles.imageView}
                  activeOpacity={0.3}
                  onPress={toggleModel}>
                  {selectedImage?.images.map((item, index) => {
                    return (
                      <View key={index}>
                        <Image
                          key={index}
                          source={{uri: item?.uri}}
                          style={styles.userImage}
                        />
                        <View style={styles.crossContainer}>
                          <VectorIconComponent
                            name={'cross'}
                            size={30}
                            color={AppStyles.colorSet.red}
                            type={ICON_TYPES.Entypo}
                          />
                        </View>
                      </View>
                    );
                  })}
                </TouchableOpacity>
              </View>
            )}
          </>
        );
      })}
    </View>
  );

  const renderUpdateButton = () => (
    <CustomButton
      // disabled={!disable}
      buttonStyleWrapper={[styles.bookNowContainer]}
      title={'Update file'}
      titleStyle={[styles.branchTitleStyle]}
      onPress={() => navigation.navigate(MAIN_SCREENS.SPECIAL_INFORMATION)}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          animated={true}
          backgroundColor={AppStyles.colorSet.blue}
          translucent={false}
        />
        <CustomHeader
          title={'Information, survey photo'}
          headerTitleStyle={styles.headerTitleStyle}
          isLeftImage
          leftImageName={Images.back}
          leftImageOnPress={() => navigation.goBack()}
        />
        {renderSurveyInformation()}
        {/*{renderUpdateButton()}*/}
        <CustomModal
          open={openModal}
          close={toggleModel}
          data={CHOOSE_CAMERA_LIST}
          onPress={onPressItem}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default DocumentInformation;
