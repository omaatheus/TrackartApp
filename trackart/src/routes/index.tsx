import { NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./auth/auth.routes";

export function Routes(){
    return(
        <NavigationContainer>
            <AuthRoutes />
        </NavigationContainer>
    )
}