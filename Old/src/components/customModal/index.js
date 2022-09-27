import React from 'react';
import {Modal, View} from 'react-native';
import styles from './styles';
import CustomListItem from '../CustomListItem';
import CustomHeader from '../CustomHeader';
import {ICON_TYPES} from '../../constants/constant';
import {AppStyles, MetricsMod} from '../../themes';
import {printLogs} from '../../utils/logUtils';

function CustomModal({
  open,
  close,
  data = [],
  onPress,
  isChildren = false,
  children,
  title,
  modalStyle,
}) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={open}
      onRequestClose={close}
      onBackdropPress={close}>
      <View style={styles.centeredView}>
        <View style={[styles.modalView, modalStyle]}>
          <CustomHeader
            headerContainerStyle={styles.headerStyle}
            title={title}
            isRightIcon
            rightIconType={ICON_TYPES.Entypo}
            rightIconName={'cross'}
            rightIconOnPress={close}
          />
          {isChildren
            ? children
            : data.map(item => {
                const {title, key, iconType, icon} = item || {};
                return (
                  <CustomListItem
                    containerStyle={styles.customContainerStyle}
                    text={title}
                    key={key}
                    isLeftIcon
                    iconName={icon}
                    iconType={iconType}
                    onPress={() => onPress(key)}
                    iconColor={AppStyles.colorSet.black}
                    textStyleContainer={{
                      marginTop: MetricsMod.baseMargin,
                      marginLeft: MetricsMod.baseMargin,
                    }}
                  />
                );
              })}
        </View>
      </View>
    </Modal>
  );
}

export default CustomModal;
