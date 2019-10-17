import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import Display from '../components/Display';
import Button from '../components/Button';
import ButtonRow from '../components/ButtonRow';

class Home extends Component {
  render() {
    const darkColor = '#444';
    const lightColor = '#9e9e9e';
    const accentColor = '#ffa500';
    const lightText = '#fff';
    const darkText = '#000';

    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Display text={'1,000'}/>
          <ButtonRow>
            <Button text={'C'} color={darkText} backgroundColor={lightColor} onPress={() => alert('pressed')} />
            <Button text={'+/-'} color={darkText} backgroundColor={lightColor} onPress={() => alert('pressed')} />
            <Button text={'%'} color={darkText} backgroundColor={lightColor} onPress={() => alert('pressed')} />
            <Button text={'÷'} color={lightText} backgroundColor={accentColor} onPress={() => alert('pressed')} />
          </ButtonRow>
          <ButtonRow>
            <Button text={'7'} color={lightText} backgroundColor={darkColor} onPress={() => alert('pressed')} />
            <Button text={'8'} color={lightText} backgroundColor={darkColor} onPress={() => alert('pressed')} />
            <Button text={'9'} color={lightText} backgroundColor={darkColor} onPress={() => alert('pressed')} />
            <Button text={'x'} color={lightText} backgroundColor={accentColor} onPress={() => alert('pressed')} />
          </ButtonRow>
          <ButtonRow>
            <Button text={'4'} color={lightText} backgroundColor={darkColor} onPress={() => alert('pressed')} />
            <Button text={'5'} color={lightText} backgroundColor={darkColor} onPress={() => alert('pressed')} />
            <Button text={'6'} color={lightText} backgroundColor={darkColor} onPress={() => alert('pressed')} />
            <Button text={'-'} color={lightText} backgroundColor={accentColor} onPress={() => alert('pressed')} />
          </ButtonRow>
          <ButtonRow>
            <Button text={'1'} color={lightText} backgroundColor={darkColor} onPress={() => alert('pressed')} />
            <Button text={'2'} color={lightText} backgroundColor={darkColor} onPress={() => alert('pressed')} />
            <Button text={'3'} color={lightText} backgroundColor={darkColor} onPress={() => alert('pressed')} />
            <Button text={'+'} color={lightText} backgroundColor={accentColor} onPress={() => alert('pressed')} />
          </ButtonRow>
          <ButtonRow>
            <Button text={'0'} color={lightText} backgroundColor={darkColor} wide='true' onPress={() => alert('pressed')} />
            <Button text={'.'} color={lightText} backgroundColor={darkColor} onPress={() => alert('pressed')} />
            <Button text={'='} color={lightText} backgroundColor={darkColor} onPress={() => alert('pressed')} />
          </ButtonRow>
        </View>
      </SafeAreaView>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    padding: 10
  }
});

export default Home;
