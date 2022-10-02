import { StyleSheet } from 'react-native';

export default function ({ Colors, Gutters, Layout }) {
  const base = {
    // ...Gutters.smallLMargin,
    ...Gutters.regularRMargin,
    ...Gutters.regularVMargin,
    height: 24,
    width: 24,
    // backgroundColor: Colors.primary,
  };
  const rounded = {
    ...base,
    borderRadius: 13,
  };
  return StyleSheet.create({
    base,
    rounded,
    contain: {
      ...base,
      resizeMode: 'contain',
    },
    regular: {
      ...base,
      height: 30,
      width: 30,
    },
  });
}

// height: 25,
// width: 25,
// marginLeft: 6,
// marginRight: 12,
// marginVertical: 12,
// resizeMode: 'contain',
