import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";

import SignIn from "../../screens/auth/SignIn";

type AuthRoutes = {
    SignIn: undefined;
}

const {Navigator, Screen} = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
    return(
        <Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: false,
                
            }}
        >
            
            <Screen
                name='SignIn'
                component={SignIn}
            />
            
        </Navigator>
    )
}