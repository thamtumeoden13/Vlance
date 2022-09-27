import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';

// local imports
import styles from './styles';
import {AppStyles} from '../../../themes';
import CustomTextInput from '../../../components/customTextInput';
import CustomDateTimePicker from '../../../components/CustomDateTimePicker';

function CustomerDetails(props) {
  const {navigation} = props;

  const [customerCode, setCustomerCode] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [customerType, setCustomeType] = useState('');
  const [customerGroup, setCustomerGroup] = useState('');
  const [apartment, setApartment] = useState('');
  const [street, setStreet] = useState('');
  const [phone, setPhone] = useState('');
  const [ward, setWard] = useState('');
  const [career, setCareer] = useState('');
  const [department, setDepartment] = useState('');
  const [staff, setStaff] = useState('');
  const [reason, setReason] = useState('');
  const [dateOfLiquidation, setDateOfLiquidation] = useState('');
  const [dateOfDraft, setDateOfDraft] = useState('');

  const renderCustomerDetails = () => (
    <View style={styles.detailContainer}>
      <Text style={styles.textFieldStyle}>Customer's Code</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={customerCode}
        onChangeText={value => setCustomerCode(value)}
      />
      <Text style={styles.textFieldStyle}>Customer Name</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={customerName}
        onChangeText={value => setCustomerName(value)}
      />
      <Text style={styles.textFieldStyle}>Date of Birth</Text>
      <CustomDateTimePicker mode={'date'} />
      {/*<DatePicker*/}
      {/*  showIcon={false}*/}
      {/*  style={styles.datePicker}*/}
      {/*  date={dateOfBirth}*/}
      {/*  mode="date"*/}
      {/*  placeholder="Select Date"*/}
      {/*  format="YYYY-MM-DD"*/}
      {/*  confirmBtnText="Confirm"*/}
      {/*  cancelBtnText="Cancel"*/}
      {/*  customStyles={{*/}
      {/*    textColor: AppStyles.colorSet.white,*/}
      {/*  }}*/}
      {/*  onDateChange={value => setDateOfBirth(value)}*/}
      {/*/>*/}
      <Text style={styles.textFieldStyle}>Customer Type</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={customerType}
        onChangeText={value => setCustomeType(value)}
      />
      <Text style={styles.textFieldStyle}>Customer Group</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={customerGroup}
        onChangeText={value => setCustomerGroup(value)}
      />
      <Text style={styles.textFieldStyle}>Apartment Number</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={apartment}
        onChangeText={value => setApartment(value)}
      />
      <Text style={styles.textFieldStyle}>Street</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={street}
        onChangeText={value => setStreet(value)}
      />
      <Text style={styles.textFieldStyle}>Phone</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={phone}
        onChangeText={value => setPhone(value)}
      />
      <Text style={styles.textFieldStyle}>Ward, District</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={ward}
        onChangeText={value => setWard(value)}
      />
      <Text style={styles.textFieldStyle}>Career</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={career}
        onChangeText={value => setCareer(value)}
      />
    </View>
  );

  const renderLiquidationInformation = () => (
    <View style={styles.detailContainer}>
      <Text style={styles.textFieldStyle}>Department</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={department}
        onChangeText={value => setDepartment(value)}
      />
      <Text style={styles.textFieldStyle}>Staff</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={staff}
        onChangeText={value => setStaff(value)}
      />
      <Text style={styles.textFieldStyle}>Reason</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={reason}
        onChangeText={value => setReason(value)}
      />
      <Text style={styles.textFieldStyle}>Date of liquidation</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={dateOfLiquidation}
        onChangeText={value => setDateOfLiquidation(value)}
      />
      <Text style={styles.textFieldStyle}>Date of draft</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={dateOfDraft}
        onChangeText={value => setDateOfDraft(value)}
      />
    </View>
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
        <Text style={styles.titleStyle}>Customer Details</Text>
        {renderCustomerDetails()}
        <Text style={styles.titleStyle}>Liquidation Information</Text>
        {renderLiquidationInformation()}
      </ScrollView>
    </SafeAreaView>
  );
}

export default CustomerDetails;
