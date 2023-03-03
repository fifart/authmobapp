import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './src/components/AuthNavigation';




const App = () => {
  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>

    
  )
}


export default App