import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {changeCount} from '../../Redux/Actions/counts';
import {useDispatch, useSelector} from 'react-redux';

interface CountInterface {
  count: number;
}
interface StateInterface {
  count: CountInterface;
}
const CounterApp = ({navigation}) => {
  // const [state, setState] = useState<StateInterface>({count: 0});
  const dispatch = useDispatch();
  const count = useSelector((state: StateInterface) => state.count);
  // let {count} = state;

  // const decrementCount = () => {
  //   setState({
  //     count: count - 1,
  //   });
  // };
  // const incrementCount = () => {
  //   setState({
  //     count: count + 1,
  //   });
  // };
  return (
    <View style={styles.container}>
      <Button title="increment" onPress={() => dispatch(changeCount(1))} />
      <Text>{count.count}</Text>
      <Button title="decrement" onPress={() => dispatch(changeCount(-1))} />
      <Text />
      <Button
        title="Go to Hello World"
        onPress={() => navigation.navigate('Hello')}
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

export default CounterApp;
