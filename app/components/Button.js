import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';


const screen = Dimensions.get('window');
const buttonWidth = screen.width / 4;

const Button = ({ text, onPress, backgroundColor, color, wide }) => {
  const containerStyles = [styles.container];
  const textStyles = [styles.text];

  if (backgroundColor) {
    containerStyles.push({ backgroundColor });    
  }

  if (color) {
    textStyles.push({ color });
  }
 
  if (wide) {
    containerStyles.push(styles.wideButton);
  }

  return (
    <TouchableOpacity onPress={onPress} >
      <View style={containerStyles} >
        <Text style={textStyles} >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Math.floor(buttonWidth - 10),
    height: Math.floor(buttonWidth - 10),
    borderRadius: buttonWidth,
    margin: 5,
    backgroundColor: '#222'
  },
  text: {
    fontSize: 32
  },
  wideButton: {
    flex: 2,
    width: Math.floor(buttonWidth * 2 - 10),
    alignItems: 'flex-start',
    paddingLeft: buttonWidth / 2 - 14
  }
});

export default Button;
