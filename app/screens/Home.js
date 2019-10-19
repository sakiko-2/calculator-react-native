import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import Display from '../components/Display';
import Button from '../components/Button';
import ButtonRow from '../components/ButtonRow';

class Home extends Component {
  state = {
    current: '0'
  };

  handlePress(value) {
    if (typeof value === 'number') {
      this.handleNumber(value);
    }
    else if (typeof value === 'string') {
      this.handleOperator(value);
    }
  };

  handleNumber(num) {
    this.setState(state => {
      if (state.current === '0') {
        return { current: `${num}` }
      }
      else {
        return { current: `${state.current}${num}` }
      }
    });
  };

  handleOperator(str) {
    switch (str) {
      case 'c':
        this.setState({ current: '0' });
      case '+/-':
      case '%':
      case '/':
      case '*':
      case '-':
      case '+':
      case '.':
      case '=':
        break;
    }
  };

  formatNumber(num) {
    return parseInt(num).toLocaleString()
  };

  render() {
    const darkColor = '#444';
    const lightColor = '#9e9e9e';
    const accentColor = '#ffa500';
    const lightText = '#fff';
    const darkText = '#000';

    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Display text={this.formatNumber(this.state.current)}/>
          <ButtonRow>
            <Button text={'C'} color={darkText} backgroundColor={lightColor} onPress={() => this.handlePress('c')} />
            <Button text={'+/-'} color={darkText} backgroundColor={lightColor} onPress={() => this.handlePress('+/-')} />
            <Button text={'%'} color={darkText} backgroundColor={lightColor} onPress={() => this.handlePress('%')} />
            <Button text={'÷'} color={lightText} backgroundColor={accentColor} onPress={() => this.handlePress('/')} />
          </ButtonRow>
          <ButtonRow>
            <Button text={'7'} color={lightText} backgroundColor={darkColor} onPress={() => this.handlePress(7)} />
            <Button text={'8'} color={lightText} backgroundColor={darkColor} onPress={() => this.handlePress(8)} />
            <Button text={'9'} color={lightText} backgroundColor={darkColor} onPress={() => this.handlePress(9)} />
            <Button text={'x'} color={lightText} backgroundColor={accentColor} onPress={() => this.handlePress('*')} />
          </ButtonRow>
          <ButtonRow>
            <Button text={'4'} color={lightText} backgroundColor={darkColor} onPress={() => this.handlePress(4)} />
            <Button text={'5'} color={lightText} backgroundColor={darkColor} onPress={() => this.handlePress(5)} />
            <Button text={'6'} color={lightText} backgroundColor={darkColor} onPress={() => this.handlePress(6)} />
            <Button text={'-'} color={lightText} backgroundColor={accentColor} onPress={() => this.handlePress('-')} />
          </ButtonRow>
          <ButtonRow>
            <Button text={'1'} color={lightText} backgroundColor={darkColor} onPress={() => this.handlePress(1)} />
            <Button text={'2'} color={lightText} backgroundColor={darkColor} onPress={() => this.handlePress(2)} />
            <Button text={'3'} color={lightText} backgroundColor={darkColor} onPress={() => this.handlePress(3)} />
            <Button text={'+'} color={lightText} backgroundColor={accentColor} onPress={() => this.handlePress('+')} />
          </ButtonRow>
          <ButtonRow>
            <Button text={'0'} color={lightText} backgroundColor={darkColor} wide='true' onPress={() => this.handlePress(0)} />
            <Button text={'.'} color={lightText} backgroundColor={darkColor} onPress={() => this.handlePress('.')} />
            <Button text={'='} color={lightText} backgroundColor={darkColor} onPress={() => this.handlePress('=')} />
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
