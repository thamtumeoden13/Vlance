import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';

// local imports
import styles from './styles';
import AppStyles from '../../themes/AppStyles';
import CustomHeader from '../../components/CustomHeader';
import {Images, MetricsMod} from '../../themes';
import CustomDropdown from '../../components/CustomDropdown';
import CustomTextInput from '../../components/customTextInput';
import CheckBoxButton from '../../components/CheckBoxButton';
import RadioButton from '../../components/RadioButton';
import CustomDateTimePicker from '../../components/CustomDateTimePicker';

function AppTheDraftPRice(props) {
  const {navigation} = props;
  const [currentIndustry, setCurrentIndustry] = useState('');
  const [day, setDay] = useState('');
  const [number, setNumber] = useState('');
  const [career, setCareer] = useState('');
  const [purpose, setPurpose] = useState('');
  const [pricePurpose, setPricePurpose] = useState('');
  const [numberOfHouseHold, setNumberOfHouseHold] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [bcs, setBcs] = useState('');
  const [priceObjectCode, setPriceObjectCode] = useState('');
  const [priceGroup, setPriceGroup] = useState('');
  const [saleTime, setSaleTime] = useState('');
  const [newPriceQuoto, setNewPriceQuoto] = useState('');
  const [newPriceType, setNewPriceType] = useState('');
  const [newPriceNumberOfHouseHold, setNewPriceNumberOfHouseHold] =
    useState('');
  const [newPriceUnitPrice, setNewPriceUnitPrice] = useState('');
  const [nnCode, setNNCode] = useState('');
  const [search, setSearch] = useState('');
  const [oldIndex, setOldIndex] = useState('');
  const [newIndex, setNewIndex] = useState('');
  const [h, setH] = useState('');
  const [status, setStatus] = useState('');
  const [output1, setOutput1] = useState('');
  const [output2, setOutput2] = useState('');
  const [lastDay, setLastDay] = useState('');
  const [firstDay, setFirstDay] = useState('');
  const [quoto, setQuoto] = useState('');
  const [accept, setAccept] = useState(false);
  const [other, setOther] = useState(false);
  const [remaining, setRemaining] = useState(false);
  const [allNNCode, setAllNNCode] = useState(false);
  const [signToBuy, setSignToBuy] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const toggleAccept = () => setAccept(prevState => !prevState);
  const toggleOther = () => setOther(prevState => !prevState);
  const toggleRemaining = () => setRemaining(prevState => !prevState);
  const toggleAllNNCode = () => setAllNNCode(prevState => !prevState);
  const toggleSignToBuy = () => setSignToBuy(prevState => !prevState);

  const documentData = [
    {key: '1', value: 'department'},
    {key: '2', value: 'department'},
    {key: '3', value: 'department'},
    {key: '4', value: 'department'},
  ];
  const staffData = [
    {key: '1', value: 'staff'},
    {key: '2', value: 'staff'},
    {key: '3', value: 'staff'},
    {key: '4', value: 'staff'},
  ];

  const renderPriceAgrremntInformation = () => (
    <View style={styles.detailContainer}>
      <Text style={styles.textFieldStyle}>Current industry</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={currentIndustry}
        onChangeText={value => setCurrentIndustry(value)}
      />
      <Text style={styles.textFieldStyle}>Number</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={number}
        onChangeText={value => setNumber(value)}
      />
      <Text style={styles.textFieldStyle}>Day</Text>
      <CustomDateTimePicker mode={'date'} />
      {/*<DatePicker*/}
      {/*  showIcon={false}*/}
      {/*  style={styles.datePicker}*/}
      {/*  date={day}*/}
      {/*  mode="date"*/}
      {/*  placeholder="Select Date"*/}
      {/*  format="YYYY-MM-DD"*/}
      {/*  confirmBtnText="Confirm"*/}
      {/*  cancelBtnText="Cancel"*/}
      {/*  customStyles={{*/}
      {/*    textColor: AppStyles.colorSet.white,*/}
      {/*  }}*/}
      {/*  onDateChange={value => setDay(value)}*/}
      {/*/>*/}
      <Text style={styles.textFieldStyle}>
        Change the measurement point type
      </Text>
      <Text style={styles.textFieldStyle}>There are index closing</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginRight: MetricsMod.marginFifteen,
          marginVertical: MetricsMod.baseMargin,
        }}>
        <Text
          style={[styles.textFieldStyle, {marginTop: MetricsMod.smallMargin}]}>
          Signed to buy CSPK
        </Text>
        <CheckBoxButton
          isActive={signToBuy}
          onPress={toggleSignToBuy}
          color={AppStyles.colorSet.black}
        />
      </View>
      <CustomDropdown data={documentData} selectedValue={setSelectedValue} />
      <Text style={styles.textFieldStyle}>100% Price</Text>
      <CustomDropdown data={staffData} selectedValue={setSelectedValue} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginRight: MetricsMod.marginFifteen,
          marginVertical: MetricsMod.smallMargin,
        }}>
        <Text
          style={[styles.textFieldStyle, {marginTop: MetricsMod.smallMargin}]}>
          Other
        </Text>
        <RadioButton
          isActive={other}
          onPress={toggleOther}
          color={AppStyles.colorSet.black}
        />
      </View>
      <Text style={styles.textFieldStyle}>Career</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={career}
        onChangeText={value => setCareer(value)}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginRight: MetricsMod.marginFifteen,
          marginVertical: MetricsMod.smallMargin,
        }}>
        <Text
          style={[styles.textFieldStyle, {marginTop: MetricsMod.smallMargin}]}>
          Accept
        </Text>
        <CheckBoxButton
          isActive={accept}
          onPress={toggleAccept}
          color={AppStyles.colorSet.black}
        />
      </View>

      <Text style={styles.textFieldStyle}>Purpose</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={purpose}
        onChangeText={value => setPurpose(value)}
      />
    </View>
  );

  const renderPriceDetails = () => (
    <View style={styles.detailContainer}>
      <Text style={styles.textFieldStyle}>Type bcs</Text>
      <CustomDropdown data={documentData} selectedValue={setSelectedValue} />
      <Text style={styles.textFieldStyle}>Price object</Text>
      <CustomDropdown data={documentData} selectedValue={setSelectedValue} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginRight: MetricsMod.marginFifteen,
          marginVertical: MetricsMod.smallMargin,
        }}>
        <Text
          style={[styles.textFieldStyle, {marginTop: MetricsMod.smallMargin}]}>
          All NN code
        </Text>
        <CheckBoxButton
          isActive={allNNCode}
          onPress={toggleAllNNCode}
          color={AppStyles.colorSet.black}
        />
      </View>
      <Text style={styles.textFieldStyle}>Career</Text>
      <CustomDropdown data={documentData} selectedValue={setSelectedValue} />
      <Text style={styles.textFieldStyle}>Purpose</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={pricePurpose}
        onChangeText={value => setPricePurpose(value)}
      />
      <Text style={styles.textFieldStyle}># of house holds</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={numberOfHouseHold}
        onChangeText={value => setNumberOfHouseHold(value)}
      />
      <Text style={styles.textFieldStyle}>Unit price</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={unitPrice}
        onChangeText={value => setUnitPrice(value)}
      />
      <Text style={styles.textFieldStyle}>Quato</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={quoto}
        onChangeText={value => setQuoto(value)}
      />
      <Text style={styles.textFieldStyle}>Type</Text>
      <CustomDropdown data={documentData} selectedValue={setSelectedValue} />
      {/*<Text style={styles.textFieldStyleII}>*/}
      {/*  Document authorization number 'Data field' day 'Data field' of 'Data*/}
      {/*  field'*/}
      {/*</Text>*/}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginRight: MetricsMod.marginFifteen,
          marginVertical: MetricsMod.smallMargin,
        }}>
        <Text style={styles.textFieldStyle}>Remaining</Text>
        <CheckBoxButton
          isActive={remaining}
          onPress={toggleRemaining}
          color={AppStyles.colorSet.black}
        />
      </View>
    </View>
  );

  const renderNewPrice = () => (
    <View style={styles.detailContainer}>
      <Text style={styles.textFieldStyle}>BCS</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={bcs}
        onChangeText={value => setBcs(value)}
      />
      <Text style={styles.textFieldStyle}>Price object code</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={priceObjectCode}
        onChangeText={value => setPriceObjectCode(value)}
      />
      <Text style={styles.textFieldStyle}>Price group</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={priceGroup}
        onChangeText={value => setPriceGroup(value)}
      />
      <Text style={styles.textFieldStyle}>Sale time</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={saleTime}
        onChangeText={value => setSaleTime(value)}
      />
      <Text style={styles.textFieldStyle}>Quoto</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={newPriceQuoto}
        onChangeText={value => setNewPriceQuoto(value)}
      />
      <Text style={styles.textFieldStyle}>Type</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={newPriceType}
        onChangeText={value => setNewPriceType(value)}
      />
      <Text style={styles.textFieldStyle}># of households</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={newPriceNumberOfHouseHold}
        onChangeText={value => setNewPriceNumberOfHouseHold(value)}
      />
      <Text style={styles.textFieldStyle}>Unit price</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={newPriceUnitPrice}
        onChangeText={value => setNewPriceUnitPrice(value)}
      />
      <Text style={styles.textFieldStyle}>NN code</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={nnCode}
        onChangeText={value => setNNCode(value)}
      />
    </View>
  );

  const renderClosing = () => (
    <View style={styles.detailContainer}>
      <Text style={styles.textFieldStyle}>Search</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={search}
        onChangeText={value => setSearch(value)}
      />
      <Text style={styles.textFieldStyle}>Old index</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={oldIndex}
        onChangeText={value => setOldIndex(value)}
      />
      <Text style={styles.textFieldStyle}>New index</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={newIndex}
        onChangeText={value => setNewIndex(value)}
      />
      <Text style={styles.textFieldStyle}>H..</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={h}
        onChangeText={value => setH(value)}
      />
      <Text style={styles.textFieldStyle}>Status</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={status}
        onChangeText={value => setStatus(value)}
      />
      <Text style={styles.textFieldStyle}>Output 1</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={output1}
        onChangeText={value => setOutput1(value)}
      />
      <Text style={styles.textFieldStyle}>Output 2</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={output2}
        onChangeText={value => setOutput2(value)}
      />
      <Text style={styles.textFieldStyle}>First day</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={firstDay}
        onChangeText={value => setFirstDay(value)}
      />
      <Text style={styles.textFieldStyle}>Last day</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={lastDay}
        onChangeText={value => setLastDay(value)}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        title={'App The Draft Price'}
        headerTitleStyle={styles.headerTitleStyle}
        isLeftImage
        leftImageName={Images.back}
        leftImageOnPress={() => navigation.goBack()}
      />
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
        <Text style={styles.titleStyle}>New price agreement information</Text>
        {renderPriceAgrremntInformation()}
        <Text style={styles.titleStyle}>Price Details</Text>
        {renderPriceDetails()}
        <Text style={styles.titleStyle}>New Price</Text>
        {renderNewPrice()}
        <Text style={styles.titleStyle}>Closing the index</Text>
        {renderClosing()}
      </ScrollView>
    </SafeAreaView>
  );
}

export default AppTheDraftPRice;
