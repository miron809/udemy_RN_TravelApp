import React from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const Categories = ({categories, selected, onPress}) => {
  return (
    <FlatList
      horizontal
      style={{marginRight: -32}}
      showsHorizontalScrollIndicator={false}
      data={categories}
      renderItem={({item, index}) => {
        const selectedItem = selected === item;
        const lastItem = index === categories.length - 1;

        return (
          <TouchableOpacity
            onPress={() => onPress(item)}
            style={[
              styles.itemContainer,
              [
                selectedItem ? styles.selectedItemContainer : null,
                lastItem ? styles.itemContainerLastChild : null,
              ],
            ]}>
            <Text
              style={[styles.item, selectedItem ? styles.selectedItem : null]}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default React.memo(Categories);
