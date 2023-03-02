import { NavigationContainer } from '@react-navigation/native'
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';

import { AppRoute } from "./app.routes";

export function Route(){
    const { COLORS } = useTheme();
    return(
        <View style={{backgroundColor: COLORS.GRAY_600, flex: 1}}>
            <NavigationContainer>
                <AppRoute/>
            </NavigationContainer>
        </View>
    )
}