import React, {useState} from 'react';
import {Button, Platform, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import {printLogs} from '../../utils/logUtils';

function CustomDateTimePicker({mode}) {
  const [date, setDate] = useState(new Date());
  // const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Select Date');
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    let temDate = new Date(currentDate);
    let fDate =
      temDate.getDate() +
      '/' +
      (temDate.getMonth() + 1) +
      '/' +
      temDate.getFullYear();
    let fTime =
      'Hours ' + temDate.getHours() + ' | Minutes: ' + temDate.getTime();
    setText(fDate);
  };
  const showMode = currentMode => {
    setShow(true);
    // setMode(currentMode);
  };
  const displayDatepicker = () => {
    showMode('date');
  };
  printLogs({text});
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={displayDatepicker} style={styles.inputStyle}>
        <Text style={styles.textFieldStyle}>{text}</Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
}

export default CustomDateTimePicker;
