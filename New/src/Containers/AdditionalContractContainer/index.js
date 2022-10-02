import React, { useLayoutEffect, useMemo } from 'react';
import { Dimensions, SafeAreaView, StatusBar, Text, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TabBar, TabView } from 'react-native-tab-view';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

// local imports
import styles from './styles';
import { useTheme } from '@/hooks';
import Header from '@/components/Common/Header';
import GeneralInfomation from '@/components/UI/AdditionalContractComponent/GeneralInfomation';


const routes = [
  { key: 'generalInformation', title: 'General information' },
  { key: 'contract', title: 'Contract' },
  { key: 'client', title: 'Client' },
  {
    key: 'measurementAndPricePressure',
    title: 'Measurement and price pressure',
  },
  { key: 'paymentAndCommonHouseHold', title: 'Payment and common house hold ' },
  { key: 'ContactCustomer', title: 'Contact customer' },
  { key: 'contractAppendix', title: 'Contract appendix' },
  { key: 'contactPrintingInformation', title: 'Contact printing information' },
  { key: 'documentProfileInformation', title: 'Document profile information' },
]

function AdditionalContract(props) {

  const dispatch = useDispatch();
  const navigation = useNavigation()
  const route = useRoute()
  const { t } = useTranslation();

  const { Common, Fonts, Gutters, Layout } = useTheme();

  const [index, setIndex] = React.useState(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <Header
        title='End New Sign/Additional Contract'
        isShowBackIcon
        onGoBack={() => { if (navigation.canGoBack) navigation.goBack() }}
      // onPressRightIcon={() => navigation.openDrawer()}
      // onPressLeftIcon = {()=> navigation.navigate('')}
      />,
    })
  }, [navigation])

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'generalInformation':
        return <GeneralInfomation />;
      default:
        return (
          <View style={[Layout.fill]}>
            <Text>{`View test`}</Text>
          </View>
        )
    }
  };

  const renderLabel = ({ route, color }) => {
    return <Text style={Fonts.textSmall}> {route?.title}</Text>;
  };

  const renderTabBar = (props) => {

    return (
      <TabBar
        {...props}
        renderLabel={renderLabel}
        scrollEnabled
        contentContainerStyle={[Layout.center]}
        activeColor="red"
        inactiveColor="black"
        labelStyle={[Fonts.textSmall]}
        indicatorStyle={{
          borderColor: 'rgba(39,28,22,0.82)',
          borderWidth: 1,
        }}
        style={styles.transparent}
      />
    );
  };

  return (
    <View
      style={[
        Layout.fill,
        Layout.colCenter,
        Layout.justifyContentEnd,
        Gutters.smallHPadding,
      ]} >
      <TabView
        style={[Layout.fullWidth, { flexGrow: 1 }]}
        swipeEnabled={true}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: Dimensions.get('window').width }}
        renderTabBar={renderTabBar}
      />
    </View>
  );
}

export default AdditionalContract;
