import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const HelloWorld = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Button
        title="Go to Counter App"
        onPress={() => navigation.navigate('App')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default HelloWorld;
