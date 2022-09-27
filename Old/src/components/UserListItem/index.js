import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {MetricsMod} from '../../themes';
import PropTypes from 'prop-types';
import styles from './styles';

function UserListItem(props) {
  const {
    image,
    name,
    msg,
    divider,
    isChat,
    time,
    count,
    countStyle,
    descStyle,
    itemPress,
  } = props;

  const renderImage = () => (
    <Image
      resizeMode={'contain'}
      style={styles.profileImage}
      source={{uri: image}}
    />
  );

  const renderNameAndWelcomeText = () => (
    <View style={{flex: 1, paddingHorizontal: MetricsMod.baseMargin}}>
      <View style={styles.nameContainer}>
        <Text style={styles.nameStyle}>{name}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
      <View style={styles.nameContainer}>
        <Text style={[styles.desc, descStyle]} numberOfLines={1}>
          {msg}
        </Text>
        <Text style={[styles.count, countStyle]}>
          {isChat ? count : `${count} EGP`}
        </Text>
      </View>
    </View>
  );

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={itemPress} style={[styles.userInfoMainView]}>
          {renderImage()}
          {renderNameAndWelcomeText()}
        </TouchableOpacity>
      </View>
      {divider && <View style={styles.divider} />}
    </>
  );
}

export default UserListItem;

UserListItem.propTypes = {
  divider: PropTypes.bool,
  isChat: PropTypes.bool,
  name: PropTypes.string,
  msg: PropTypes.string,
  time: PropTypes.string,
  image: PropTypes.string,
  count: PropTypes.string,
  itemPress: PropTypes.func,
};

UserListItem.defaultProps = {
  divider: false,
  isChat: false,
  name: '',
  msg: '',
  time: '',
  image: '',
  count: 1,
  itemPress: () => {},
};
