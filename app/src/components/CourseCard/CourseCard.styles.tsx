import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '92%',
    alignSelf: 'center',
    borderRadius: 12,
    overflow: 'hidden',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginVertical: 12,
  },
  image: {
    height: 120,
    width: 120,
    objectFit: 'cover',
    overflow: 'hidden',
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginVertical: 3,
    // width: 200,
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    color: '#335ef7',
  },
  orgPrice: {
    fontSize: 12,
    fontWeight: '500',
    color: 'grey',
  },
  labelContainer: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginBottom: 4,
  },
  labelView: {
    backgroundColor: '#eff3ff',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 5,
  },
  labelText: {
    color: '#335ef7',
    fontWeight: '600',
    // fontSize: 18,
  },
  priceContainer: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  flex: {flexDirection: 'row', gap: 10},
});

export default styles;
