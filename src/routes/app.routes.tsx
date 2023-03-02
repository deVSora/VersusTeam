import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ClassList } from "@screens/ClassList";
import { NewClass } from "@screens/NewClass";
import { ClassDetail } from "@screens/ClassDetail";

const {Navigator, Screen} = createNativeStackNavigator()

export function AppRoute(){
    return(
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name="classList"
                component={ClassList}
            />

            <Screen
                name="newClass"
                component={NewClass}
            />

            <Screen
                name="classDetail"
                component={ClassDetail}
            />
        </Navigator>
    )
}