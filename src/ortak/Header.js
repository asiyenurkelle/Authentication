import React from 'react';
import {View, Text} from 'react-native';

const Header = ({headerText}) => {
  const {viewStyle, textStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}> {headerText} </Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20,
  },
  viewStyle: {
    backgroundColor: '#dcdcdc',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    shadowOffset: {widht: 0, height: 2},
    shadowOpacity: 0.2,
  },
};

export default Header;
