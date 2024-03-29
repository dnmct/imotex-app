import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { images } from '../constants/Images';
import { NavigationService } from '../api/NavigationService';
import Theme from '../constants/Theme';

class ProductListItem extends PureComponent {
  handlePress = () => {
    NavigationService.navigate(
      'SearchCompany',
      this.props.all ? null : { category: this.props.category }
    );
  };

  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.touchable}
          onPress={this.handlePress}
          activeOpacity={0.8}
        >
          <Text style={styles.item}>{this.props.category.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.5,
    borderColor: Theme.colors.midGrey,
  },
  touchable: {
    marginBottom: 10,
  },

  item: {
    fontWeight: '500',
  },
});

export default ProductListItem;
