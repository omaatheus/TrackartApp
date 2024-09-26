import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";

import SignIn from "../../screens/auth/SignIn";
import Register from "../../screens/auth/Register";
import SignUp from "../../screens/auth/SignUp";

type AuthRoutes = {
    SignIn: undefined;
    SignUp: undefined;
    Register: undefined;
}

const {Navigator, Screen} = createNativeStackNavigator<AuthRoutes>();

export type AuthNavigationRouteProps = NativeStackNavigationProp<AuthRoutes>

export function AuthRoutes() {
    return(
        <Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: false,
                
            }}
        >
            <Screen
                name='SignUp'
                component={SignUp}
            />
            
            <Screen
                name='SignIn'
                component={SignIn}
            />

            
            <Screen
                name='Register'
                component={Register}
            />

        </Navigator>
        
    )
}