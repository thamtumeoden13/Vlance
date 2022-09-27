import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

// local imports
import styles from './styles';
import AppStyles from '../../themes/AppStyles';
import CustomHeader from '../../components/CustomHeader';
import {Images, MetricsMod} from '../../themes';
import {printLogs} from '../../utils/logUtils';
import {ICON_TYPES} from '../../constants/constant';
import CustomDropdown from '../../components/CustomDropdown';
import {MAIN_SCREENS} from '../../constants/screens';
import {Cell, Row, Table, TableWrapper} from 'react-native-table-component';
import VectorIconComponent from '../../components/VectorIconComponent';
import CustomModal from '../../components/customModal';
import CustomButton from '../../components/CustomButton';
import CheckBoxButton from '../../components/CheckBoxButton';
import CustomDateTimePicker from '../../components/CustomDateTimePicker';

function SpecialInformation(props) {
  const {navigation} = props;
  printLogs({navigation});
  const [birth, setBirth] = useState('');
  const [appendixDate, setAppendixDate] = useState('');
  const [purpose, setPurpose] = useState(0);
  const [deviceName, setDeviceName] = useState(0);
  const [capacity, setCapacity] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [coefficent, setCoefficent] = useState(0);
  const [percent, setPercent] = useState(0);
  const [days, setDays] = useState(0);
  const [months, setMonths] = useState(0);
  const [openPurposeModal, setOpenPurposeModal] = useState(false);
  const [openElectricityModal, setOpenElectricityModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [accept, setAccept] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [rowsPurposeData, setRowsPurposeData] = useState([]);
  const [rowsElectricityData, setRowsElectricityData] = useState([]);
  // const disable = !isEmpty(phone) && !isEmpty(message);

  const togglePurposeModel = () => {
    setOpenPurposeModal(prevState => !prevState);
  };
  const toggleElectricityModel = () => {
    setOpenElectricityModal(prevState => !prevState);
  };

  const toggleAccept = () => setAccept(prevState => !prevState);

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

  const renderSpecialInformation = () => (
    <View style={styles.detailContainer}>
      <Text style={styles.textFieldStyle}>Department</Text>
      <CustomDropdown data={documentData} selectedValue={setSelectedValue} />
      <Text style={styles.textFieldStyle}>Staff</Text>
      <CustomDropdown data={staffData} selectedValue={setSelectedValue} />
      <Text style={styles.textFieldStyle}>Birth</Text>
      <CustomDateTimePicker mode={'date'} />
    </View>
  );

  const renderDraftAgreement = () => (
    <View style={styles.detailContainer}>
      <Text style={styles.textFieldStyleII}>Pursuant to implement</Text>
      <Text style={styles.textFieldStyleII}>
        Electricity purchase contract with 'data field', 'data field' date
        between 'data field' and 'data filed{' '}
      </Text>
      <Text style={styles.textFieldStyle}>Appendix date</Text>
      {/*<Text style={styles.textStyle}>26/07/2022</Text>*/}
      <View style={{marginBottom: MetricsMod.smallMarginI}}>
        <CustomDateTimePicker mode={'date'} />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.textHeadingStyle}>Power buyer(Party B)</Text>
        <Text style={styles.textStyle}>VU VAN VIEN</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.textHeadingStyle}>Address</Text>
        <Text style={styles.textStyle}>389/125/1c</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.textHeadingStyle}>Representative is Mr.(Ba)</Text>
        <Text style={styles.textStyle}>BA VA </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.textHeadingStyle}>Position</Text>
        <Text style={styles.textStyle}>position</Text>
      </View>
      <View>
        <Text style={[styles.textHeadingStyle]}>
          Id number/CCCD/Passport/CMCAND/CMQDND
        </Text>
        <Text
          style={[styles.textStyle, {marginLeft: MetricsMod.marginFifteen}]}>
          03601234213
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.textHeadingStyle}>Issued by</Text>
        <Text style={styles.textStyle}>cuc asdf</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.textHeadingStyle}>date</Text>
        <Text style={styles.textStyle}>09/07/017</Text>
      </View>
      <Text style={styles.textFieldStyleII}>
        Document authorization number 'Data field' day 'Data field' of 'Data
        field'
      </Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.textHeadingStyle}>Address using electricity</Text>
        <Text style={styles.textStyle}>289/125/acccasdf</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.textHeadingStyle}>Phone number</Text>
        <Text style={styles.textStyle}>123412341234</Text>
      </View>
    </View>
  );
  const tablePurposeData = {
    tableHead: [
      'Delete',
      'Purpose',
      'Device name',
      'Capacity (KW)',
      'Amount',
      'Coefficient simultaneously',
      // 'Used time',
      'Day',
      'Month',
      'Total use capacity (KW)',
      'Electricity used (kWh/month)',
      'Percentage of kWh',
    ],
    widthArr: [100, 190, 190, 190, 190, 250, 190, 190, 250, 190, 230],
    tableData: [
      [
        '',
        purpose,
        deviceName,
        capacity,
        quantity,
        coefficent,
        days,
        months,
        '',
        '',
        percent,
      ],
    ],
  };

  const tableElectricityData = {
    tableHead: [
      'Number of meters',
      'Index codes',
      'Apply from the index',
      'Uses',
      'Percentage of kWh',
      'Note by the time',
      'Bt time',
      'CD time',
      'TD time',
    ],
    widthArr: [100, 150, 190, 100, 190, 190, 130, 130, 130],
    tableData: [['', '', '', '', '', '', '', '', '', '']],
  };

  const addPurposeTableRows = () => {
    const rowsInput = [
      [
        <TouchableOpacity style={styles.backgroundIconII} activeOpacity={0.9}>
          <VectorIconComponent
            name={'minus'}
            size={23}
            color={AppStyles.colorSet.white}
            type={ICON_TYPES.AntDesign}
          />
        </TouchableOpacity>,
        purpose,
        deviceName,
        capacity,
        quantity,
        coefficent,
        days,
        months,
        '',
        '',
        percent,
      ],
    ];
    setRowsPurposeData([...rowsPurposeData, rowsInput]);
  };

  const addElectricityTableRows = () => {
    const rowsInput = [
      [
        <TouchableOpacity style={styles.backgroundIconII} activeOpacity={0.9}>
          <VectorIconComponent
            name={'minus'}
            size={23}
            color={AppStyles.colorSet.white}
            type={ICON_TYPES.AntDesign}
          />
        </TouchableOpacity>,
        purpose,
        deviceName,
        capacity,
        quantity,
        coefficent,
        days,
        months,
        '',
        '',
        percent,
      ],
    ];
    setRowsElectricityData([...rowsElectricityData, rowsInput]);
  };

  const deletePurposeTableRows = index => {
    const rows = [...rowsPurposeData];
    rows.splice(index, 1);
    setRowsPurposeData(rows);
  };

  const renderPurposeOfActualTable = () => (
    <View style={styles.containerII}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate(MAIN_SCREENS.APP_THE_DRAFT_PRICE)}
          activeOpacity={0.9}
          style={{width: '80%'}}>
          <Text style={styles.linkStyle}>
            Purpose of actual electricity use of Party B
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backgroundIcon} activeOpacity={0.9}>
          <VectorIconComponent
            name={'plus'}
            size={23}
            color={AppStyles.colorSet.white}
            type={ICON_TYPES.Entypo}
            onPress={togglePurposeModel}
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal={true}
        style={{flex: 1}}
        showsHorizontalScrollIndicator={false}>
        <View style={[rowsPurposeData?.length === 0 && {paddingBottom: 40}]}>
          <Table borderStyle={{borderColor: 'transparent'}}>
            <Row
              data={tablePurposeData?.tableHead}
              style={styles.head}
              textStyle={styles.title}
              widthArr={tablePurposeData?.widthArr}
              // flexArr={[1, 3, 5, 2, 2]}
            />
          </Table>
          <ScrollView style={{marginBottom: 10}}>
            <Table
            // borderStyle={{
            //   borderWidth: 1,
            //   borderColor: AppStyles.colorSet.greyColor,
            // }}
            >
              {rowsPurposeData.map((rowData, index) => {
                printLogs({row: rowData});
                return (
                  <TableWrapper key={index} style={styles.row}>
                    <Cell
                      key={0}
                      data={
                        <TouchableOpacity
                          style={styles.backgroundIconII}
                          activeOpacity={0.9}>
                          <VectorIconComponent
                            name={'minus'}
                            size={23}
                            color={AppStyles.colorSet.white}
                            type={ICON_TYPES.AntDesign}
                            onPress={() => deletePurposeTableRows(index)}
                          />
                        </TouchableOpacity>
                      }
                      textStyle={styles.text}
                      style={{width: 100}}
                    />
                    <Cell
                      key={index}
                      data={rowData[0][1]}
                      textStyle={styles.text}
                      style={{width: 200}}
                    />
                    <Cell
                      key={index}
                      data={rowData[0][2]}
                      textStyle={styles.text}
                      style={{width: 190}}
                    />
                    <Cell
                      key={index}
                      data={rowData[0][3]}
                      textStyle={styles.text}
                      style={{width: 190}}
                    />
                    <Cell
                      key={index}
                      data={rowData[0][4]}
                      textStyle={styles.text}
                      style={{width: 190}}
                    />
                    <Cell
                      key={index}
                      data={rowData[0][5]}
                      textStyle={styles.text}
                      style={{width: 240}}
                    />
                    <Cell
                      key={index}
                      data={rowData[0][6]}
                      textStyle={styles.text}
                      style={{width: 190}}
                    />
                    <Cell
                      key={index}
                      data={rowData[0][7]}
                      textStyle={styles.text}
                      style={{width: 190}}
                    />
                    <Cell
                      key={index}
                      // data={rowData[0][8]}
                      data={''}
                      // textStyle={styles.text}
                      textStyle={styles.text}
                      style={{width: 250}}
                    />
                    <Cell
                      key={index}
                      // data={rowData[0][9]}
                      data={''}
                      // textStyle={styles.text}
                      textStyle={styles.text}
                      style={{width: 200}}
                    />
                    <Cell
                      key={index}
                      data={rowData[0][10]}
                      textStyle={styles.text}
                    />
                  </TableWrapper>
                );
              })}
            </Table>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
  const renderElectricityRatioTable = () => (
    <View style={styles.containerII}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          // onPress={() => navigation.navigate(MAIN_SCREENS.APP_THE_DRAFT_PRICE)}
          activeOpacity={0.9}
          style={{width: '80%'}}>
          <Text style={styles.linkStyle}>
            Electricity ratio for each electricity usage price
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backgroundIcon} activeOpacity={0.9}>
          <VectorIconComponent
            name={'plus'}
            size={23}
            color={AppStyles.colorSet.white}
            type={ICON_TYPES.Entypo}
            onPress={toggleElectricityModel}
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal={true}
        style={{flex: 1}}
        showsHorizontalScrollIndicator={false}>
        <View
          style={[rowsElectricityData?.length === 0 && {paddingBottom: 40}]}>
          <Table borderStyle={{borderColor: 'transparent'}}>
            <Row
              data={tableElectricityData?.tableHead}
              style={styles.head}
              textStyle={styles.title}
              widthArr={tableElectricityData?.widthArr}
            />
          </Table>
          <ScrollView style={{marginBottom: 10}}>
            <Table
            // borderStyle={{
            //   borderWidth: 1,
            //   borderColor: AppStyles.colorSet.greyColor,
            // }}
            >
              {rowsElectricityData?.map((rowData, index) => {
                printLogs({rowData});
                return (
                  <Row
                    key={index}
                    data={rowData}
                    // flexArr={[1, 3, 5, 2, 2]}
                    widthArr={tableElectricityData?.widthArr}
                    style={styles.row}
                    textStyle={styles.text}
                  />
                );
              })}
            </Table>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );

  const renderPurposeDetails = () => (
    <View style={styles.detailContainerII}>
      <Text style={styles.textFieldStyleIII}>Purpose</Text>
      <TextInput
        style={styles.inputStyleII}
        value={purpose}
        // onChange={value => handleChange(0, value)}
        onChangeText={value => setPurpose(value)}
      />
      <Text style={styles.textFieldStyleIII}>Device's Name</Text>
      <TextInput
        style={styles.inputStyleII}
        value={deviceName}
        // onChange={value => handleChange(1, value)}
        onChangeText={value => setDeviceName(value)}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          // justifyContent: 'space-between',
        }}>
        <View style={{flex: 1}}>
          <Text style={styles.textFieldStyleIII}>Capacity (kW)</Text>
          <TextInput
            style={styles.inputStyleIII}
            value={capacity}
            // onChange={value => handleChange(3, value)}
            onChangeText={value => setCapacity(value)}
          />
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.textFieldStyleIII}>Quantity</Text>
          <TextInput
            style={styles.inputStyleIII}
            value={quantity}
            // onChange={value => handleChange(4, value)}
            onChangeText={value => setQuantity(value)}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          // justifyContent: 'space-between',
        }}>
        <View style={{flex: 1}}>
          <Text style={styles.textFieldStyleIII}>
            Coefficient Simultaneously
          </Text>
          <TextInput
            style={styles.inputStyleIII}
            value={coefficent}
            // onChange={value => handleChange(5, value)}
            onChangeText={value => setCoefficent(value)}
          />
        </View>
        <View style={{flex: 1}}>
          <Text
            style={[
              styles.textFieldStyleIII,
              {marginTop: MetricsMod.doubleBaseMargin},
            ]}>
            Percent or kWh
          </Text>
          <TextInput
            style={styles.inputStyleIII}
            value={percent}
            // onChange={value => handleChange(6, value)}
            onChangeText={value => setPercent(value)}
          />
        </View>
      </View>
      <Text style={styles.titleStyleII}>Used Time</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          // justifyContent: 'space-between',
        }}>
        <View style={{flex: 1}}>
          <Text style={styles.textFieldStyleIII}>Days</Text>
          <TextInput
            style={styles.inputStyleIII}
            value={days}
            // onChange={value => handleChange(7, value)}
            onChangeText={value => setDays(value)}
          />
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.textFieldStyleIII}>Months</Text>
          <TextInput
            style={styles.inputStyleIII}
            value={months}
            // onChange={value => handleChange(8, value)}
            onChangeText={value => setMonths(value)}
          />
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <CustomButton
          // disabled={!disable}
          buttonStyleWrapper={[
            styles.bookNowContainerII,
            // {
            //   backgroundColor: !disable
            //     ? AppStyles.colorSet.greyishIX
            //     : AppStyles.colorSet.blue,
            // },
          ]}
          loading={loading}
          title={'Save'}
          titleStyle={[styles.branchTitleStyle]}
          onPress={() => {
            togglePurposeModel();
            addPurposeTableRows();
          }}
        />
        <CustomButton
          // disabled={!disable}
          buttonStyleWrapper={[styles.bookNowContainerII]}
          loading={loading}
          title={'Close'}
          titleStyle={[styles.branchTitleStyle]}
          onPress={togglePurposeModel}
        />
      </View>
    </View>
  );
  const renderElectricityRatioDetails = () => (
    <View style={styles.detailContainerII}>
      <Text style={styles.titleStyleII}>Price quotation</Text>
      <Text style={styles.textFieldStyleIII}>Current Industry</Text>
      <TextInput
        style={styles.inputStyleII}
        value={purpose}
        onChangeText={value => setPurpose(value)}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          // justifyContent: 'space-between',
        }}>
        <View style={{flex: 1}}>
          <Text style={styles.textFieldStyleIII}>Number</Text>
          <TextInput
            style={styles.inputStyleIII}
            value={capacity}
            onChangeText={value => setCapacity(value)}
          />
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.textFieldStyleIII}>Apply date</Text>
          <TextInput
            style={styles.inputStyleIII}
            value={quantity}
            onChangeText={value => setQuantity(value)}
          />
        </View>
      </View>
      <Text style={styles.textFieldStyleIII}>Change measurement point</Text>
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
          style={[
            styles.textFieldStyleIII,
            {marginTop: MetricsMod.smallMargin},
          ]}>
          Accept
        </Text>
        <CheckBoxButton
          isActive={accept}
          onPress={toggleAccept}
          color={AppStyles.colorSet.black}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <CustomButton
          // disabled={!disable}
          buttonStyleWrapper={[
            styles.bookNowContainerII,
            // {
            //   backgroundColor: !disable
            //     ? AppStyles.colorSet.greyishIX
            //     : AppStyles.colorSet.blue,
            // },
          ]}
          loading={loading}
          title={'Accept'}
          titleStyle={[styles.branchTitleStyle]}
          onPress={toggleElectricityModel}
        />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        title={'Change the purpose of using electricity'}
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
        {/*<Text style={styles.titleStyle}>Special information</Text>*/}
        {/*{renderSpecialInformation()}*/}
        <Text style={styles.titleStyle}>Draft agreement for use purpose</Text>
        {renderDraftAgreement()}
        <View style={{marginVertical: MetricsMod.marginFifteen}}>
          {renderPurposeOfActualTable()}
        </View>
        <View style={{marginVertical: MetricsMod.marginFifteen}}>
          {renderElectricityRatioTable()}
        </View>
        <CustomModal
          open={openPurposeModal}
          close={togglePurposeModel}
          isChildren
          title={'Add purpose of electricity use'}
          // modalStyle={{height: 300}}
          // onPress={onPressItem}
        >
          {renderPurposeDetails()}
        </CustomModal>
        <CustomModal
          open={openElectricityModal}
          close={toggleElectricityModel}
          isChildren
          title={'Draft pricing'}>
          {renderElectricityRatioDetails()}
        </CustomModal>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SpecialInformation;
