import NavigationStrings from "./NavigationStrings";
import * as Screens from '../screens';


function AuthStack(Stack) {
    return (
        <>
            <Stack.Screen name={NavigationStrings.AUTH_SCREEN} component={Screens.AuthScreen} options={{ headerShown: false }} />
        </>)
}

export default AuthStack;