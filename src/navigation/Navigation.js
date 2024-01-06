import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import AuthStack from './AuthStack';
import AuthenticatedStack from './AuthenticatedStack';


const Stack = createNativeStackNavigator();

export default function Navigation() {
  const auth = useSelector((state) => state.AuthReducer);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {auth.isAuthenticated ? AuthenticatedStack(Stack) : AuthStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}