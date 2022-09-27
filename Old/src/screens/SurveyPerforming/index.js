import React from 'react';
import {Dimensions, SafeAreaView, StatusBar, Text, View} from 'react-native';

// local imports
import styles from './styles';
import AppStyles from '../../themes/AppStyles';
import CustomHeader from '../../components/CustomHeader';
import {Images} from '../../themes';
import {TabBar, TabView} from 'react-native-tab-view';
import layout from 'react-native/Libraries/Components/Touchable/BoundingDimensions';
import {Survey} from '../index';
import ClientInformation from './ClientInformation';
import {getParams} from '../../utils/transform';

function SurveyPerforming(props) {
  const {navigation} = props;
  const {data} = getParams(props);

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {key: 'clientInformation', title: 'Client information'},
    {key: 'survey', title: 'Survey'},
  ]);

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'clientInformation':
        return <ClientInformation data={data} />;
      case 'survey':
        return <Survey props={props} />;
    }
  };

  const renderLabel = ({route, color}) => {
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
        title={'Survey Performing'}
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

export default SurveyPerforming;
