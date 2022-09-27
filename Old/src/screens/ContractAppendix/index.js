import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Row, Table} from 'react-native-table-component';
// local imports
import styles from './styles';
import AppStyles from '../../themes/AppStyles';
import CustomHeader from '../../components/CustomHeader';
import {Images} from '../../themes';
import {printLogs} from '../../utils/logUtils';
import CustomDropdown from '../../components/CustomDropdown';
import CustomTextInput from '../../components/customTextInput';
import CustomButton from '../../components/CustomButton';
import CustomDateTimePicker from '../../components/CustomDateTimePicker';

function ContractAppendix(props) {
  const {navigation} = props;
  const [issueDate, setIssueDate] = useState(new Date(1598051730000));
  const [accordingToDocumentNo, setAccordingToDocumentNo] = useState('');
  const [measurementLocationNo, setMeasurementLocationNo] = useState('');
  const [wattgefiti, setWattgefiti] = useState('');
  const [wattgefiti2, setWattgefiti2] = useState('');
  const [totalCapacity, setTotalCapacity] = useState('');
  const [customerBankAccountPresentValue, setCustomerBankAccountPresentValue] =
    useState('');
  const [customerBankAccountNewValue, setCustomerBankAccountNewValue] =
    useState('');
  const [
    customerBankAccountNoPresentValue,
    setCustomerBankAccountNoPresentValue,
  ] = useState('');
  const [customerBankAccountNoNewValue, setCustomerBankAccountNoNewValue] =
    useState('');
  const [accountNamePresentValue, setAccountNamePresentValue] = useState('');
  const [accountNameNewValue, setAccountNameNewValue] = useState('');
  const [phoneNoPresentValue, setPhoneNoPresentValue] = useState('');
  const [phoneNoNewValue, setPhoneNoNewValue] = useState('');
  const [projectAddressPresentValue, setProjectAddressPresentValue] =
    useState('');
  const [projectAddressNewValue, setProjectAddressNewValue] = useState('');
  const [projectNamePresentValue, setProjectNamePresentValue] = useState('');
  const [projectNameNewValue, setProjectNameNewValue] = useState('');
  const [projectLocationPresentValue, setProjectLocationPresentValue] =
    useState('');
  const [projectLocationNewValue, setProjectLocationNewValue] = useState('');
  const [taxRatioPresentValue, setTaxRatioPresentValue] = useState('');
  const [taxRatioNewValue, setTaxRatioNewValue] = useState('');
  const [show, setShow] = useState(true);
  const [selectedValue, setSelectedValue] = useState('');
  const [agreement, setAgreement] = useState('');
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

  const renderDocumentInformation = () => (
    <View style={styles.detailContainer}>
      <Text style={styles.textFieldStyle}>Department</Text>
      <CustomDropdown data={documentData} selectedValue={setSelectedValue} />
      <Text style={styles.textFieldStyle}>Staff</Text>
      <CustomDropdown data={staffData} selectedValue={setSelectedValue} />
      <Text style={styles.textFieldStyle}>Issue date</Text>
      <CustomDateTimePicker mode={'date'} />
      {/*<DatePicker*/}
      {/*  showIcon={false}*/}
      {/*  style={styles.datePicker}*/}
      {/*  date={issueDate}*/}
      {/*  mode="date"*/}
      {/*  placeholder="Select Date"*/}
      {/*  format="YYYY-MM-DD"*/}
      {/*  confirmBtnText="Confirm"*/}
      {/*  cancelBtnText="Cancel"*/}
      {/*  customStyles={{*/}
      {/*    textColor: AppStyles.colorSet.white,*/}
      {/*  }}*/}
      {/*  onDateChange={value => setIssueDate(value)}*/}
      {/*/>*/}
      {/*<CustomDateTimePicker />*/}
    </View>
  );

  const renderPursuantToImplementation = () => (
    <View style={styles.detailContainer}>
      <Text style={styles.textFieldStyleII}>Pursuant to implement</Text>
      <Text style={styles.textFieldStyleII}>
        Solar power purchasing contract no. PE14000021491 signed on 26/04/2019
        between EVN TAN BINH CORP and Mrs. Do Thi Hoa
      </Text>
      <Text style={styles.textFieldStyle}>According to document no:</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={accordingToDocumentNo}
        onChangeText={value => setAccordingToDocumentNo(value)}
      />
      <Text style={styles.textFieldStyleII}>Requirement:</Text>
      <Text style={styles.textFieldStyleII}>
        Service of changing solar power purchasing contract information
      </Text>
    </View>
  );

  const InformationChange = () => (
    <View style={styles.detailContainer}>
      <Text style={styles.textFieldStyle}>Measurement location no</Text>
      <CustomDropdown data={documentData} selectedValue={setSelectedValue} />
      <Text style={styles.textFieldStyle}>Wattage FITI</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={wattgefiti}
        onChangeText={value => setWattgefiti(value)}
      />
      <Text style={styles.textFieldStyle}>Wattage FITI2</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={wattgefiti2}
        onChangeText={value => setWattgefiti2(value)}
      />
      <Text style={styles.textFieldStyle}>Total capacity</Text>
      <CustomTextInput
        inputWrapper={styles.wrapperStyle}
        inputTextStyle={styles.inputStyle}
        value={totalCapacity}
        onChangeText={value => setTotalCapacity(value)}
      />
    </View>
  );

  const renderButtons = () => (
    <View style={styles.buttonContainer}>
      <CustomButton
        // disabled={!disable}
        buttonStyleWrapper={[styles.bookNowContainer]}
        title={'Edit'}
        titleStyle={[styles.branchTitleStyle]}
        onPress={() => {}}
      />
      <CustomButton
        // disabled={!disable}
        buttonStyleWrapper={[styles.bookNowContainer]}
        title={'Delete'}
        titleStyle={[styles.branchTitleStyle]}
        onPress={() => {}}
      />
      <CustomButton
        // disabled={!disable}
        buttonStyleWrapper={[styles.bookNowContainer]}
        title={'Data record'}
        titleStyle={[styles.branchTitleStyle]}
        onPress={() => {}}
      />
      <CustomButton
        // disabled={!disable}
        buttonStyleWrapper={[styles.bookNowContainer]}
        title={'Cancel'}
        titleStyle={[styles.branchTitleStyle]}
        onPress={() => {}}
      />
    </View>
  );

  const tableData = {
    tableHead: [
      'S.NO',
      'Column name',
      'Information',
      'Present Value',
      'New value',
    ],
    tableTitle: ['1', '2', '3', '4', '5', '6', '7', '8'],
    widthArr: [60, 170, 250, 190, 190],
    tableData: [
      [
        '1',
        'MA_NHANG',
        'Customer bank account',
        <CustomTextInput
          inputWrapper={styles.wrapperStyleTable}
          inputTextStyle={styles.inputStyleTable}
          value={customerBankAccountPresentValue}
          onChangeText={value => setCustomerBankAccountPresentValue(value)}
        />,
        <CustomTextInput
          inputWrapper={styles.wrapperStyleTable}
          inputTextStyle={styles.inputStyleTable}
          value={customerBankAccountNewValue}
          onChangeText={value => setCustomerBankAccountNewValue(value)}
        />,
      ],
      [
        '2',
        'TKHOAN_KHANG',
        'Customer bank account no',
        <CustomTextInput
          inputWrapper={styles.wrapperStyleTable}
          inputTextStyle={styles.inputStyleTable}
          value={customerBankAccountNoPresentValue}
          onChangeText={value => setCustomerBankAccountNoPresentValue(value)}
        />,
        <CustomTextInput
          inputWrapper={styles.wrapperStyleTable}
          inputTextStyle={styles.inputStyleTable}
          value={customerBankAccountNoNewValue}
          onChangeText={value => setCustomerBankAccountNoNewValue(value)}
        />,
      ],
      [
        '3',
        'TEN_TKHOAN',
        'Account name',
        <CustomTextInput
          inputWrapper={styles.wrapperStyleTable}
          inputTextStyle={styles.inputStyleTable}
          value={accountNamePresentValue}
          onChangeText={value => setAccountNamePresentValue(value)}
        />,
        <CustomTextInput
          inputWrapper={styles.wrapperStyleTable}
          inputTextStyle={styles.inputStyleTable}
          value={accountNameNewValue}
          onChangeText={value => setAccountNameNewValue(value)}
        />,
      ],
      [
        '4',
        'DTHOAI',
        'Phone no',
        <CustomTextInput
          inputWrapper={styles.wrapperStyleTable}
          inputTextStyle={styles.inputStyleTable}
          value={phoneNoPresentValue}
          onChangeText={value => setPhoneNoPresentValue(value)}
        />,
        <CustomTextInput
          inputWrapper={styles.wrapperStyleTable}
          inputTextStyle={styles.inputStyleTable}
          value={phoneNoNewValue}
          onChangeText={value => setPhoneNoNewValue(value)}
        />,
      ],
      [
        '5',
        'DIACHI_DUAN',
        'Project address',
        <CustomTextInput
          inputWrapper={styles.wrapperStyleTable}
          inputTextStyle={styles.inputStyleTable}
          value={projectAddressPresentValue}
          onChangeText={value => setProjectAddressPresentValue(value)}
        />,
        <CustomTextInput
          inputWrapper={styles.wrapperStyleTable}
          inputTextStyle={styles.inputStyleTable}
          value={projectAddressNewValue}
          onChangeText={value => setProjectAddressNewValue(value)}
        />,
      ],
      [
        '6',
        'TEN_DUAN',
        'Project name',
        <CustomTextInput
          inputWrapper={styles.wrapperStyleTable}
          inputTextStyle={styles.inputStyleTable}
          value={projectNamePresentValue}
          onChangeText={value => setProjectNamePresentValue(value)}
        />,
        <CustomTextInput
          inputWrapper={styles.wrapperStyleTable}
          inputTextStyle={styles.inputStyleTable}
          value={projectNameNewValue}
          onChangeText={value => setProjectNameNewValue(value)}
        />,
      ],
      [
        '7',
        'VITRI_DUAN',
        'Project location ',
        <CustomTextInput
          inputWrapper={styles.wrapperStyleTable}
          inputTextStyle={styles.inputStyleTable}
          value={projectLocationPresentValue}
          onChangeText={value => setProjectLocationPresentValue(value)}
        />,
        <CustomTextInput
          inputWrapper={styles.wrapperStyleTable}
          inputTextStyle={styles.inputStyleTable}
          value={projectLocationNewValue}
          onChangeText={value => setProjectLocationNewValue(value)}
        />,
      ],
      [
        '8',
        'TLE_THUE',
        'Tax ratio of measurement location',
        <CustomTextInput
          inputWrapper={styles.wrapperStyleTable}
          inputTextStyle={styles.inputStyleTable}
          value={taxRatioPresentValue}
          onChangeText={value => setTaxRatioPresentValue(value)}
        />,
        <CustomTextInput
          inputWrapper={styles.wrapperStyleTable}
          inputTextStyle={styles.inputStyleTable}
          value={taxRatioNewValue}
          onChangeText={value => setTaxRatioNewValue(value)}
        />,
      ],
    ],
  };

  const renderTable = () => (
    <View style={styles.containerII}>
      <ScrollView
        horizontal={true}
        style={{flex: 1}}
        showsHorizontalScrollIndicator={false}>
        <View>
          <Table borderStyle={{borderColor: 'transparent'}}>
            <Row
              data={tableData?.tableHead}
              style={styles.head}
              textStyle={styles.title}
              widthArr={tableData?.widthArr}
              // flexArr={[1, 3, 5, 2, 2]}
            />
          </Table>
          <ScrollView>
            <Table>
              {tableData?.tableData.map((rowData, index) => (
                <Row
                  key={index}
                  data={rowData}
                  // flexArr={[1, 3, 5, 2, 2]}
                  widthArr={tableData?.widthArr}
                  style={[styles.row]}
                  textStyle={styles.text}
                />
              ))}
            </Table>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );

  const renderSaveButton = () => (
    <CustomButton
      // disabled={!disable}
      buttonStyleWrapper={[
        styles.bookNowContainerII,
        {
          backgroundColor: AppStyles.colorSet.blue,
          // backgroundColor: !disable
          //   ? AppStyles.colorSet.greyishIX
          //   : AppStyles.colorSet.blue,
        },
      ]}
      // loading={loading}
      title={'Save'}
      titleStyle={[styles.branchTitleStyle]}
      // onPress={HandleApi}
    />
  );

  const renderArt = () => (
    <View style={styles.detailContainer}>
      <Text style={styles.textFieldStyleII}>Art. 2: Other Agreement</Text>
      <Text style={styles.textFieldStyle}>Other agreements are added here</Text>
      <View style={styles.textAreaContainer}>
        <TextInput
          style={styles.textArea}
          underlineColorAndroid="transparent"
          placeholder="Type something"
          placeholderTextColor="grey"
          numberOfLines={10}
          multiline={true}
          value={agreement}
          onChangeText={value => setAgreement(value)}
        />
      </View>
      <Text style={styles.textFieldStyleII}>
        Art. 3: Effect of implementation
      </Text>
      <CustomDateTimePicker mode={'date'} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        title={'Contract Appendix'}
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
        <Text style={styles.titleStyle}>
          Draft changes of solar power purchasing appendix
        </Text>
        {/*{renderButtons()}*/}
        {renderDocumentInformation()}
        {renderPursuantToImplementation()}
        <Text style={styles.titleStyle}>Art 1: Information change</Text>
        {InformationChange()}
        {renderTable()}
        {renderArt()}
        {renderSaveButton()}
      </ScrollView>
    </SafeAreaView>
  );
}

export default ContractAppendix;
