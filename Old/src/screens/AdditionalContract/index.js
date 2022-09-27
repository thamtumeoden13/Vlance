import React from 'react';
import {Dimensions, SafeAreaView, StatusBar, Text, View} from 'react-native';
import {TabBar, TabView} from 'react-native-tab-view';

// local imports
import styles from './styles';
import AppStyles from '../../themes/AppStyles';
import CustomHeader from '../../components/CustomHeader';
import {Images} from '../../themes';
import layout from 'react-native/Libraries/Components/Touchable/BoundingDimensions';
import {printLogs} from '../../utils/logUtils';
import {CustomerDetails} from '../index';

function AdditionalContract(props) {
  const {navigation} = props;
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {key: 'generalInformation', title: 'General information'},
    {key: 'contract', title: 'Contract'},
    {key: 'client', title: 'Client'},
    {
      key: 'measurementAndPricePressure',
      title: 'Measurement and price pressure',
    },
    {key: 'paymentAndCommonHouseHold', title: 'Payment and common house hold '},
    {key: 'ContactCustomer', title: 'Contact customer'},
    {key: 'contractAppendix', title: 'Contract appendix'},
    {key: 'contactPrintingInformation', title: 'Contact printing information'},
    {key: 'documentProfileInformation', title: 'Document profile information'},
  ]);

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'generalInformation':
        return <CustomerDetails />;
      case 'contract':
        return <View style={[styles.scene]} />;
    }
  };

  const renderLabel = ({route, color}) => {
    printLogs({route});

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
        title={'End New Sign/Additional Contract'}
        headerTitleStyle={styles.headerTitleStyle}
        isLeftImage
        leftImageName={Images.back}
        leftImageOnPress={() => navigation.goBack()}
      />
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
    </SafeAreaView>
  );
}

export default AdditionalContract;
