import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function SignInScreen(props) {
    return (
    <View style={styles.container}>
      <Text >Welcome to SignIn Screen</Text>
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

export default SignInScreen;