import React from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';

import { productImgs, tabBarIcons } from '../constants/Images';
import { observer } from 'mobx-react/native';
import theme from '../constants/Theme';
const { width, height } = Dimensions.get('window');

const ProductLink = ({ product }) => {
  const companyId = product.id.slice(0, 3);
  const productPos = product.id.slice(-1);
  return (
    <View style={styles.itemContainer}>
      <Image source={productImgs[companyId][productPos]} style={styles.image} />
      <TouchableOpacity style={[styles.button, styles.firstButton]}>
        <Text style={styles.buttonText}>L&ouml;schen</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Verl&auml;ngern</Text>
      </TouchableOpacity>
    </View>
  );
};

export default observer(ProductLink);

const styles = StyleSheet.create({
  itemContainer: {
    width: width / 2 - 30,
    height: width / 2,
    marginRight: 20,
  },
  image: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'cover',

    position: 'relative',
  },
  button: {
    backgroundColor: theme.colors.lightGrey,
    padding: 2,
  },
  firstButton: {
    borderBottomWidth: 0.5,
    borderBottomColor: theme.colors.midGrey,
  },
  buttonText: {
    textAlign: 'center',
  },
});