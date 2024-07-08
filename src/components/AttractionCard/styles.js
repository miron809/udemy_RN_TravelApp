import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    padding: 4,
    borderWidth: 1,
    borderColor: '#e2e2e2',
    borderRadius: 15,
    flexGrow: 1,
    minWidth: '45%',
    margin: 8,
  },
  image: {
    height: 120,
    borderRadius: 15,
    objectFit: 'cover',
    marginBottom: 12,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 6,
    marginLeft: 6,
  },
  icon: {
    height: 10,
    width: 10,
    marginRight: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    marginLeft: 6,
  },
  subtitle: {
    fontSize: 8,
    fontWeight: '300',
  },
});

export default styles;
