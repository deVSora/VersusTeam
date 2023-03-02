import { CaretLeft } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native';

import styled from 'styled-components/native'

export const Container = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Icon = styled(CaretLeft).attrs(({theme}) => ({
    color : theme.COLORS.WHITE,
    size: 36,
}))``;

export const BackButton = styled(TouchableOpacity)`
    flex: 1;
`;

export const Logo = styled.Image`
    width: 46px;
    height: 55px;
`;