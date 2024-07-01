import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  item: {
    fontSize: 12,
    color: 'rgba(0,0,0, .5)',
    paddingVertical: 2,
  },
  selectedItem: {
    color: 'black',
  },
  itemContainer: {
    marginRight: 12,
    marginVertical: 14,
  },
  itemContainerLastChild: {
    marginRight: 32,
  },
  selectedItemContainer: {
    borderBottomColor: 'blue',
    borderBottomWidth: 1,
  },
});

export default styles;
