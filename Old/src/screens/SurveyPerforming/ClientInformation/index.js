import React, {useState} from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';

// local imports
import styles from './styles';
import {AppStyles} from '../../../themes';
import CustomTextInput from '../../../components/customTextInput';
import DatePicker from 'react-native-datepicker';
import {MAIN_SCREENS} from '../../../constants/screens';
import CustomButton from '../../../components/CustomButton';
import {CHOOSE_CAMERA_LIST} from '../../../constants/constant';
import CustomModal from '../../../components/customModal';
import {isEmpty} from 'lodash';
import {BASE_URL} from '../../../api/apiConstants';
import {printLogs} from '../../../utils/logUtils';

function ClientInformation(props) {
  const {navigation, data} = props;
  const [requestId, setRequestId] = useState(data?.requestId);
  const [measurePoint, setMeasurePoint] = useState(data?.measurePoint);
  const [customerName, setCustomerName] = useState(data?.customerName);
  const [address, setAddress] = useState(data?.address);
  const [surveyDetails, setSurveyDetails] = useState(data?.surveyDetails);
  const [street, setStreet] = useState(data?.street);
  const [tel, setTel] = useState(data?.phone);
  const [stationId, setStationId] = useState(data?.stationId);
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const disable = !isEmpty(phone) && !isEmpty(message);

  const toggleModel = () => {
    setOpenModal(prevState => !prevState);
  };

  const renderCustomerDetails = () => (
    <View style={styles.detailContainer}>
      <Text style={styles.textFieldStyle}>Request Id</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={requestId}
        onChangeText={value => setRequestId(value)}
      />
      <Text style={styles.textFieldStyle}>Measure point</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={measurePoint}
        onChangeText={value => setMeasurePoint(value)}
      />
      <Text style={styles.textFieldStyle}>Customer Name</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={customerName}
        onChangeText={value => setCustomerName(value)}
      />
      <Text style={styles.textFieldStyle}>Address</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={address}
        onChangeText={value => setAddress(value)}
      />
      <Text style={styles.textFieldStyle}>Survey's details</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={surveyDetails}
        onChangeText={value => setSurveyDetails(value)}
      />
      <Text style={styles.textFieldStyle}>Street</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={street}
        onChangeText={value => setStreet(value)}
      />
      <Text style={styles.textFieldStyle}>Tel</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={tel}
        onChangeText={value => setTel(value)}
      />
      <Text style={styles.textFieldStyle}>Station Id</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={stationId}
        onChangeText={value => setStationId(value)}
      />
    </View>
  );

  const renderAppointment = () => (
    <CustomButton
      // disabled={!disable}
      buttonStyleWrapper={[styles.bookNowContainer]}
      title={'Make appointment'}
      titleStyle={[styles.branchTitleStyle]}
      onPress={toggleModel}
    />
  );

  const renderAppointmentDetails = () => (
    <View style={styles.detailContainerII}>
      <Text style={styles.textFieldStyle}>Tel</Text>
      <TextInput
        style={styles.inputStyleII}
        value={phone}
        onChangeText={value => setPhone(value)}
      />
      <Text style={styles.textFieldStyle}>Message</Text>
      <View style={styles.textAreaContainer}>
        <TextInput
          style={styles.textArea}
          underlineColorAndroid="transparent"
          placeholder="Type something"
          placeholderTextColor="grey"
          numberOfLines={10}
          multiline={true}
          value={message}
          onChangeText={value => setMessage(value)}
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
        title={'Send'}
        titleStyle={[styles.branchTitleStyle]}
        onPress={HandleApi}
      />
    </View>
  );
  const HandleApi = async () => {
    let parameters = JSON.stringify({
      MA_DVIQLY: 'PE1400',
      SDT: '0901234567',
      NOIDUNGSMS: 'Xin chao quy khach',
      NOIDUNGEMAIL: 'Xin chao quy khach',
    });
    try {
      setLoading(true);
      if (!isEmpty(phone) && !isEmpty(message)) {
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
        printLogs({data});
        if (data?.header.Status === 'SUCCESS') {
          setPhone('');
          setMessage('');
          toggleModel();
        } else {
          alert(data?.message);
        }
      } else {
        alert('Enter phone  and message');
      }
    } catch (e) {
      setLoading(false);
      alert(e.message);
      console.log(e.message);
    }
  };

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
        {renderCustomerDetails()}
        {renderAppointment()}
        <CustomModal
          open={openModal}
          close={toggleModel}
          isChildren
          title={'SMS DETAILS'}
          modalStyle={{height: Platform.OS === 'ios' ? 370 : 400}}
          // // onPress={onPressItem}
        >
          {renderAppointmentDetails()}
        </CustomModal>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ClientInformation;
