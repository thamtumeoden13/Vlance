import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';

// local imports
import styles from './styles';
import {AppStyles, Images} from '../../../../themes';
import {INFORMATION_LIST} from '../../../../constants/constant';
import CustomListItem from '../../../../components/CustomListItem';
import {printLogs} from '../../../../utils/logUtils';
import {MAIN_SCREENS} from '../../../../constants/screens';

function Information(props) {
  const {navigation} = props?.props;
  const renderDocumentText = () => (
    <Text style={styles.titleStyle}>Document information</Text>
  );

  const renderOnPressItem = item => {
    if (item?.key === 'documentInformation') {
      return navigation.navigate(MAIN_SCREENS.LIST_OF_PAPERS);
    } else if (item?.key === 'clientHomeCoordinates') {
      return navigation.navigate(MAIN_SCREENS.HOME_COORDINATES);
    } else if (item?.key === 'photoSurveyInformation') {
      return navigation.navigate(MAIN_SCREENS.DOCUMENT_INFORMATION);
    }
  };

  const renderInformationList = () => (
    <View>
      {INFORMATION_LIST.map(item => {
        const {title, key, desc, subTitle, subTitleII} = item || {};
        return (
          <CustomListItem
            onPress={() => renderOnPressItem(item)}
            key={key}
            text={title}
            desc={desc}
            subTitle={subTitle}
            subTitleII={subTitleII}
            containerStyle={styles.listContainer}
            isRightImage
            rightImageName={Images.rightArrow}
          />
        );
      })}
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
        {renderDocumentText()}
        {renderInformationList()}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Information;
