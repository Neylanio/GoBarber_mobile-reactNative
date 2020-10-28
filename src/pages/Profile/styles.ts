import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { Form as FormMobile } from '@unform/mobile';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
  position: relative;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 14px 0;
`;

export const Form = styled(FormMobile)`
  width: 100%;
`;

export const UserAvatarButton = styled.TouchableOpacity``;

export const UserAvatar = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  align-self: center;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 100px;
`;
