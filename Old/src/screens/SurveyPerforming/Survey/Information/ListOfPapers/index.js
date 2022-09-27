import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImgToBase64 from 'react-native-image-base64';

// local imports
import styles from './styles';
import AppStyles from '../../../../../themes/AppStyles';
import CustomHeader from '../../../../../components/CustomHeader';
import {Images, MetricsMod} from '../../../../../themes';
import {ICON_TYPES} from '../../../../../constants/constant';
import VectorIconComponent from '../../../../../components/VectorIconComponent';
import ImagePicker from 'react-native-image-crop-picker';
import CustomButton from '../../../../../components/CustomButton';
import {BASE_URL} from '../../../../../api/apiConstants';
import {printLogs} from '../../../../../utils/logUtils';
import {replace} from '../../../../../utils/customUtils';

function ListOfPapers(props) {
  const {navigation} = props;
  const [selectedImage, setSelectedImage] = useState(null);
  const [open, setOpen] = useState({});
  const [showSelectedImage, setShowSelectedImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [listOfPapers, setListOfPapers] = useState([]);
  const [arrayList, setArrayList] = useState([]);
  const disable = selectedImage?.length > 0;

  useEffect(() => {
    // return navigation.addListener('focus', () => {
    getListPapersApi();
    // });
  }, []);

  const getListPapersApi = async () => {
    let parameters = JSON.stringify({
      TEN_DANH_MUC: 'D_LOAI_HSO', //FIX
      MA_DVIQLY: 'PE1400', //parameter
      PARAM: '', //keep empty
    });
    try {
      const res = await fetch(`${BASE_URL}/getDanhMuc-dloaihso`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: parameters,
        redirect: 'follow',
      });

      const data = await res.json();
      setListOfPapers(data?.LST_OBJ);
      // arr.push(...data?.LST_OBJ, data?.LST_OBJ);
      let arr = data?.LST_OBJ.map(item => {
        const {loaiMau, tenLoaiHso} = item || {};
        return {
          showImage: false,
          loaiMau,
          tenLoaiHso,
        };
      });
      setArrayList(arr);
    } catch (e) {
      alert(e.message);
      console.log(e.message);
    }
  };

  const HandleUploadApi = async () => {
    let parameters = JSON.stringify({
      MA_DVIQLY: 'PE1400', //parameter
      MA_YCAU_KNAI: 'GK3957613', //parameter
      MA_LOAI_HSO: '1', //maLoaiHso from api  getDanhMuc-dloaihso. (get “maLoaiHso” from type of papers that the file belong to).
      DINH_DANG: selectedImage?.images?.mime, //file type
      FILE_VALUE: selectedImage?.images.uri, //file in base64
    });
    try {
      setLoading(true);
      if (selectedImage?.images.length > 0) {
        const res = await fetch(`${BASE_URL}/guiSMS`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: parameters,
          redirect: 'follow',
        });
        setLoading(false);
        const data = await res.json();
        if (data?.header?.Status === 'SUCCESS') {
          alert(data?.header?.Message);
          setSelectedImage(null);
          setOpen(null);
        } else {
          alert(data?.message);
        }
      } else {
        alert('Please select any file...');
      }
    } catch (e) {
      setLoading(false);
      alert(e.message);
      console.log(e.message);
    }
  };

  const toggleView = (index, tenLoaiHso) => {
    if (open === index) {
      setOpen(null);
      setShowSelectedImage('');
    } else {
      setOpen(index);
      setShowSelectedImage(tenLoaiHso);
    }
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
      includeBase64: true,
    });
    const images = image.map(i => {
      return {
        uri: i.path,
        width: i.width,
        height: i.height,
        mime: i.mime,
      };
    });
    setSelectedImage(image);
    replace('showImage', true, showSelectedImage, arrayList, setArrayList);

    // printLogs({updatedList});
    printLogs({updated: arrayList});
    setOpen(null);
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
      includeBase64: true,
    });
    const images = image.map(i => {
      return {
        uri: i.path,
        width: i.width,
        height: i.height,
        mime: i.mime,
      };
    });
    setSelectedImage(image);
    replace('showImage', true, showSelectedImage, arrayList, setArrayList);
  };

  const onPressDeleteImage = item => {
    printLogs({item});
    setSelectedImage(selectedImage.filter(img => img?.path !== item?.path));
  };

  const renderList = () => (
    <View>
      {arrayList?.map((item, index) => {
        printLogs({item: item});
        const {tenLoaiHso, loaiMau, showImage} = item;
        return (
          <>
            <TouchableOpacity
              style={styles.listContainer}
              key={index}
              activeOpacity={0.8}
              onPress={() => toggleView(index, tenLoaiHso)}>
              <View style={{width: '85%'}}>
                <Text style={styles.headerTitleStyle} numberOfLines={2}>
                  {tenLoaiHso}
                </Text>
                {/*<Text style={styles.headerTitleStyleII}></Text>*/}
              </View>
              <View style={{flexDirection: 'row'}}>
                {showImage ? (
                  <Text style={styles.headerTitleStyleII}>
                    {selectedImage?.length}
                  </Text>
                ) : (
                  <Text style={styles.headerTitleStyleII}>0</Text>
                )}
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
                    onPress={takePhotoFromCamera}
                    activeOpacity={0.9}>
                    <VectorIconComponent
                      name={'camera'}
                      size={25}
                      color={AppStyles.colorSet.white}
                      type={ICON_TYPES.Feather}
                      onPress={takePhotoFromCamera}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.backgroundIcon}
                    onPress={takePhotoFromLibrary}
                    activeOpacity={0.9}>
                    <VectorIconComponent
                      name={'folderopen'}
                      size={25}
                      color={AppStyles.colorSet.white}
                      type={ICON_TYPES.AntDesign}
                      onPress={takePhotoFromLibrary}
                    />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={styles.imageView}
                  activeOpacity={0.3}
                  // onPress={toggleModel}
                >
                  {showImage &&
                    selectedImage?.map((item, index) => {
                      return (
                        <View key={index}>
                          <Image
                            key={index}
                            source={{uri: item?.path}}
                            style={styles.userImage}
                          />
                          <View style={styles.crossContainer}>
                            <VectorIconComponent
                              name={'cross'}
                              size={30}
                              color={AppStyles.colorSet.red}
                              type={ICON_TYPES.Entypo}
                              onPress={() => onPressDeleteImage(item)}
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
      disabled={!disable}
      buttonStyleWrapper={[
        styles.bookNowContainer,
        {
          backgroundColor: !disable
            ? AppStyles.colorSet.greyishIX
            : AppStyles.colorSet.blue,
        },
      ]}
      title={'Update file'}
      loading={loading}
      titleStyle={[styles.branchTitleStyle]}
      onPress={HandleUploadApi}
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
          title={'List of papers'}
          headerTitleStyle={styles.headerTitleStyle}
          isLeftImage
          leftImageName={Images.back}
          leftImageOnPress={() => navigation.goBack()}
        />
        {renderList()}
        {renderUpdateButton()}
      </ScrollView>
    </SafeAreaView>
  );
}

export default ListOfPapers;
