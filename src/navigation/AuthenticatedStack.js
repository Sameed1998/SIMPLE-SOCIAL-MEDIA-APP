import { useDispatch } from "react-redux";
import NavigationStrings from "./NavigationStrings";
import * as Screens from '../screens';
import FontFamily from "../styles/FontFamily";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { logoutUser } from '../redux/reducers/AuthReducer';




function AuthenticatedStack(Stack) {
    const dispatch = useDispatch();
      return(
              <>
                  <Stack.Screen name={NavigationStrings.HOME_SCREEN} component={Screens.HomeScreen} 
                  options={{
                    title: 'Home Screen',
                    headerTitleAlign: 'center',
                    headerTitleStyle:{fontFamily:FontFamily.bold},
                    headerRight: () => (
                      <Ionicons
                        name="log-out-outline"
                        size={30}
                        color="black"
                        style={{ marginRight: 15 }}
                        onPress={() => dispatch(logoutUser())}
                      />
                    ),
                  }}
                  />
                  <Stack.Screen name={NavigationStrings.ADD_POST_SCREEN} component={Screens.AddPostScreen} 
                  options={{
                    title: 'Add Post',
                    headerTitleAlign: 'center',
                    headerTitleStyle:{fontFamily:FontFamily.bold}
                  }}
                  />
              </>)
  }

  export default AuthenticatedStack;