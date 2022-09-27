import React from 'react';
import SelectList from 'react-native-dropdown-select-list';
import {View} from 'react-native';
import styles from './styles';

export default function CustomDropdown({data, customStyle, selectedValue}) {
  return (
    <View style={[styles.container, customStyle]}>
      <SelectList
        // onSelect={() => alert(selected)}
        setSelected={selectedValue}
        data={data}
        // arrowicon={
        //   <FontAwesome name="chevron-down" size={12} color={'black'} />
        // }
        // searchicon={<FontAwesome name="search" size={12} color={'black'} />}
        search={false}
        boxStyles={{borderRadius: 10}} //override default styles
      />
    </View>
  );
}
