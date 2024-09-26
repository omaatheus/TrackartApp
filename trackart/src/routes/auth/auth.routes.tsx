import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";

import SignIn from "../../screens/auth/SignIn";
import Home from "../../screens/auth/Home";
import SignUp from "../../screens/auth/SignUp";

type AuthRoutes = {
    SignIn: undefined;
    SignUp: undefined;
    Home: undefined;
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
                name='Home'
                component={Home}
            />

        </Navigator>
        
    )
}