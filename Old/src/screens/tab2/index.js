import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text} from 'react-native';

// local imports
import styles from './styles';
import AppStyles from '../../themes/AppStyles';
import {printLogs} from '../../utils/logUtils';

function Tab2(props) {
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
        <Text>Tab2</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Tab2;
