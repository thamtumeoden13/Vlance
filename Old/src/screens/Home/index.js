import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import {useDispatch} from 'react-redux';

// local imports
import styles from './styles';
import AppStyles from '../../themes/AppStyles';
import CustomHeader from '../../components/CustomHeader';
import {Images, MetricsMod} from '../../themes';
import {printLogs} from '../../utils/logUtils';
import {MAIN_SCREENS} from '../../constants/screens';
import CustomButton from '../../components/CustomButton';

function Home(props) {
  const {navigation} = props;
  printLogs({navigation});
  const dispatch = useDispatch();

  const surveyPerformainingData = {
    requestId: '8',
    measurePoint: '23.345',
    customerName: 'dummy name',
    address: 'abc street xyz',
    surveyDetails: 'abc  dummy dummy xyz',
    street: ' 23 street ',
    phone: '6834234',
    stationId: '32',
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
        <CustomHeader
          title={'title'}
          isLeftImage
          leftImageName={Images.person}
          leftImageOnPress={() => navigation.navigate(MAIN_SCREENS.MY_TAB)}
          isRightImage
          rightImageOnPress={props.navigation.openDrawer}
          rightImageName={Images.person}
        />

        <View style={{marginTop: MetricsMod.threeHundred}}>
          <CustomButton
            // disabled={!disable}
            buttonStyleWrapper={[styles.bookNowContainer]}
            title={'additional contract'}
            titleStyle={[styles.branchTitleStyle]}
            onPress={() =>
              navigation.navigate(MAIN_SCREENS.ADDITIONAL_CONTRACT)
            }
          />
        </View>
        <View style={{marginTop: MetricsMod.doubleBaseMargin}}>
          <CustomButton
            // disabled={!disable}
            buttonStyleWrapper={[styles.bookNowContainer]}
            title={'Survey  Performing'}
            titleStyle={[styles.branchTitleStyle]}
            onPress={() =>
              navigation.navigate(MAIN_SCREENS.SURVEY_PERFORMING, {
                data: surveyPerformainingData,
              })
            }
          />
        </View>
        <View style={{marginTop: MetricsMod.doubleBaseMargin}}>
          <CustomButton
            // disabled={!disable}
            buttonStyleWrapper={[styles.bookNowContainer]}
            title={'Special Information'}
            titleStyle={[styles.branchTitleStyle]}
            onPress={() =>
              navigation.navigate(MAIN_SCREENS.SPECIAL_INFORMATION)
            }
          />
        </View>
        <View style={{marginTop: MetricsMod.doubleBaseMargin}}>
          <CustomButton
            // disabled={!disable}
            buttonStyleWrapper={[styles.bookNowContainer]}
            title={'Contract Appendix'}
            titleStyle={[styles.branchTitleStyle]}
            onPress={() => navigation.navigate(MAIN_SCREENS.CONTRACT_APPENDIX)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
