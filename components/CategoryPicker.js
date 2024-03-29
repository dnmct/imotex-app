import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Theme from '../constants/Theme';

class CategoryPicker extends React.Component {
  render() {
    const {
      title,
      items,
      label,
      onValueChange,
      value,
      required,
      setRef,
    } = this.props;
    return (
      <View>
        <Text style={styles.heading}>
          {title}
          {!!required && <Text style={{ color: Theme.colors.red }}> *</Text>}
        </Text>
        <View style={styles.collectionContainer}>
          <RNPickerSelect
            style={{ ...pickerSelectStyles }}
            items={items}
            placeholder={{
              label: label,
              value: null,
            }}
            onValueChange={onValueChange}
            value={value}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    fontWeight: '700',
    fontSize: 16,
  },
  collectionContainer: {
    marginTop: 10,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    backgroundColor: 'white',
    color: 'black',
  },
});

export default CategoryPicker;
