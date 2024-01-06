import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import AuthStack from './AuthStack';
import AuthenticatedStack from './AuthenticatedStack';


const Stack = createNativeStackNavigator();

export default function Navigation() {
  const auth = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {auth.isAuthenticated ? AuthenticatedStack(Stack,dispatch) : AuthStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}