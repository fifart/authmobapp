import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import authApi  from '../api/auth'


function SignInScreen() {

    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error,setError]=useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = async () => {
        const result = await authApi.login(email, password)
        // if(!result.ok) return setError(true)
        // setErrorMessage(result.problem)
        // setError(false)
        // console.log(result)
        // console.log(result.data)
       console.log(email, password);
    }


    return (
    <View style={styles.container}>
     <Input label='Email' value={email} autoCapitalize="none" autoCorrect={false} onChangeText={setEmail}/>
     <Input label='Password' value={password} autoCapitalize="none" autoCorrect={false} onChangeText={setPassword} secureTextEntry />
     {error?<Text style={{color:'red'}}>Error: {errorMessage}</Text>:null}
     <Button title='Submit' onPress={handleSubmit}/>
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