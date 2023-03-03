import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

function HomeScreen({navigation}) {
    return (
    <View style={styles.container}>
      <Text >Welcome Screen</Text>
      <Button title="Sign In" onPress={()=>navigation.navigate('SignIn')} />
      <Button title="Sign Up" onPress={()=>navigation.navigate('SignUp')} />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default HomeScreen;