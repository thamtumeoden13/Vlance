import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
// local imports
import styles from './styles';
import {AppStyles, Images} from '../../../themes';
import {TabBar, TabView} from 'react-native-tab-view';
import layout from 'react-native/Libraries/Components/Touchable/BoundingDimensions';
import {Information} from '../../index';
import CustomDropdown from '../../../components/CustomDropdown';
import {isEmpty} from 'lodash';
import {BASE_URL} from '../../../api/apiConstants';
import CustomButton from '../../../components/CustomButton';
import CustomDateTimePicker from '../../../components/CustomDateTimePicker';
import {printLogs} from '../../../utils/logUtils';
import {INFORMATION_LIST} from '../../../constants/constant';
import CustomListItem from '../../../components/CustomListItem';
import {MAIN_SCREENS} from '../../../constants/screens';

function Survey(props) {
  const {navigation} = props.props;

  const [index, setIndex] = React.useState(0);
  const [selectedValue, setSelectedValue] = useState('');
  const [dropDownSelectedValue, setDropDownSelectedValue] = useState('');
  const [birth, setBirth] = useState('');
  const [note, setNote] = useState('');
  const [troubleReason, setTroubleReason] = useState([]);
  const [loading, setLoading] = useState(false);
  const isFocused = useIsFocused();
  const selectedOptionList = [];
  const disable = !isEmpty(selectedValue) && !isEmpty(birth) && !isEmpty(note);

  useEffect(() => {
    // return navigation.addListener('focus', () => {
    getTroubleReasonApi();
    // });
  }, []);

  const getTroubleReasonApi = async () => {
    let parameters = JSON.stringify({
      MA_DVIQLY: 'PE1400', //parameter
      MA_LOAI_YCAU: 'CDHA_D', //parameter
      MA_CVIEC: 'KS', //parameter
    });
    try {
      const res = await fetch(`${BASE_URL}/getTNgaiTheoCViec`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: parameters,
        redirect: 'follow',
      });
      const data = await res.json();
      // const selectedOptionList = [];
      {
        data.map((item, index) => {
          const {tenTngai} = item || {};
          selectedOptionList.push({key: tenTngai, value: tenTngai});
        });
      }
      setTroubleReason(selectedOptionList);
    } catch (e) {
      alert(e.message);
      console.log(e.message);
    }
  };

  const documentData = [
    {key: 'favorable', value: 'Favorable'},
    {key: 'trouble', value: 'Trouble'},
  ];
  const [routes] = React.useState([
    {key: 'information', title: 'Information'},
    {key: 'supply', title: 'Survey'},
    {key: 'labor', title: 'Labor'},
  ]);

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'information':
        return <Information props={props?.props} />;
      case 'supply':
        return <View style={[styles.scene, {backgroundColor: 'red'}]} />;
      case 'labor':
        return <View style={[styles.scene, {backgroundColor: 'blue'}]} />;
    }
  };

  printLogs({dropDownSelectedValue});
  const renderSurveyText = () => (
    <View style={styles.textContainer}>
      <Text style={styles.titleStyle}>Survey result</Text>
      <CustomDropdown
        selectedValue={setSelectedValue}
        data={documentData}
        customStyle={{marginLeft: 50, paddingVertical: 5}}
      />
    </View>
  );

  const renderLabel = ({route, color}) => {
    return <Text style={styles.labelStyle}> {route?.title}</Text>;
  };

  const renderTabBar = (props: any) => {
    const w = layout.width / 3.2;
    return (
      <TabBar
        {...props}
        renderLabel={renderLabel}
        scrollEnabled
        contentContainerStyle={styles.tabBarContentContainer}
        activeColor="red"
        inactiveColor="black"
        labelStyle={styles.labelStyle}
        indicatorStyle={[styles.tabBarIndicator]}
        style={styles.transparent}
      />
    );
  };

  const renderTab = () => (
    <View
      style={{
        flex: 1,
      }}>
      <TabView
        style={{flexGrow: 1}}
        swipeEnabled={true}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: Dimensions.get('window').width}}
        renderTabBar={renderTabBar}
      />
    </View>
  );

  const HandleApi = async () => {
    let parameters = JSON.stringify({
      MA_DVIQLY: 'PE1400',
      MA_LOAI_YCAU: '0901234567',
      MA_CVIEC: 'Xin chao quy khach',
    });
    try {
      setLoading(true);
      if (!isEmpty(selectedValue) && !isEmpty(birth) && !isEmpty(note)) {
        const res = await fetch(`${BASE_URL}/getTNgaiTheoCViec`, {
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
        console.log({data});
        // if (data?.status === 'success') {
        //   printLogs({login: data?.data});
        //   // toggleModel()
        // } else {
        //   alert(data?.message);
        // }
      } else {
        alert('Please select any option,date and enter note.');
      }
    } catch (e) {
      setLoading(false);
      alert(e.message);
      console.log(e.message);
    }
  };

  const renderTrouble = () => (
    <ScrollView
      style={styles.scrollContainer}
      showsVerticalScrollIndicator={false}>
      <View style={styles.detailContainer}>
        <Text style={styles.titleStyleII}>Trouble details</Text>
        <Text style={styles.textFieldStyle}>Trouble reason</Text>

        <CustomDropdown
          data={troubleReason}
          selectedValue={setDropDownSelectedValue}
        />
        <Text style={styles.textFieldStyle}>Appointment date</Text>
        <CustomDateTimePicker mode={'date'} />
        {/*<DatePicker*/}
        {/*  showIcon={false}*/}
        {/*  style={styles.datePicker}*/}
        {/*  date={birth}*/}
        {/*  mode="date"*/}
        {/*  placeholder="Select Date"*/}
        {/*  format="YYYY-MM-DD"*/}
        {/*  confirmBtnText="Confirm"*/}
        {/*  cancelBtnText="Cancel"*/}
        {/*  customStyles={{*/}
        {/*    textColor: AppStyles.colorSet.white,*/}
        {/*  }}*/}
        {/*  onDateChange={value => setBirth(value)}*/}
        {/*  // useNativeDriver={true}*/}
        {/*/>*/}
        <Text style={styles.textFieldStyle}>Note</Text>
        {/*<Text style={styles.textStyle}>26/07/2022</Text>*/}
        <View style={styles.textAreaContainer}>
          <TextInput
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="Type something"
            placeholderTextColor="grey"
            numberOfLines={10}
            multiline={true}
            value={note}
            onChangeText={value => setNote(value)}
          />
        </View>
        <CustomButton
          disabled={!disable}
          buttonStyleWrapper={[
            styles.bookNowContainerII,
            {
              backgroundColor: !disable
                ? AppStyles.colorSet.greyishIX
                : AppStyles.colorSet.blue,
            },
          ]}
          loading={loading}
          title={'Save'}
          titleStyle={[styles.branchTitleStyle]}
          onPress={HandleApi}
        />
      </View>
    </ScrollView>
  );

  const renderOnPressItem = item => {
    if (item?.key === 'documentInformation') {
      return navigation.navigate(MAIN_SCREENS.LIST_OF_PAPERS);
    } else if (item?.key === 'clientHomeCoordinates') {
      // return navigation.navigate(MAIN_SCREENS.HOME_COORDINATES);
    }
    // else if (item?.key === 'photoSurveyInformation') {
    //   return navigation.navigate(MAIN_SCREENS.DOCUMENT_INFORMATION);
    // }
  };

  const renderInformationList = () => (
    <View>
      {INFORMATION_LIST.map(item => {
        const {title, key, desc, subTitle, subTitleII} = item || {};
        return (
          <CustomListItem
            onPress={() => renderOnPressItem(item)}
            key={key}
            text={title}
            desc={desc}
            subTitle={subTitle}
            subTitleII={subTitleII}
            containerStyle={styles.listContainer}
            isRightImage
            rightImageName={Images.rightArrow}
          />
        );
      })}
      <CustomButton
        disabled={!disable}
        buttonStyleWrapper={[
          styles.bookNowContainerII,
          {
            backgroundColor: AppStyles.colorSet.blue,
          },
        ]}
        loading={loading}
        title={'Save'}
        titleStyle={[styles.branchTitleStyle]}
        // onPress={HandleApi}
      />
    </View>
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
      {renderSurveyText()}
      {/*{selectedValue === 'favorable' && renderTab()}*/}
      {selectedValue === 'favorable' && renderInformationList()}
      {selectedValue === 'trouble' && renderTrouble()}
    </SafeAreaView>
  );
}

export default Survey;
