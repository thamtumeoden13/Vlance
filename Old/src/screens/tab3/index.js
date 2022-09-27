import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text} from 'react-native';

// local imports
import styles from './styles';
import AppStyles from '../../themes/AppStyles';
import CustomHeader from '../../components/CustomHeader';
import {Images} from '../../themes';
import {printLogs} from '../../utils/logUtils';

function Tab3(props) {
  const {navigation} = props;
  printLogs({navigation});

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
        <Text>Tab3</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Tab3;
