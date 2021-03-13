import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

type Props = KeyboardAvoidingView['props'];

const KeyboardAvoidingContainer = ({ children }: Props): JSX.Element => (
  <KeyboardAvoidingView
    behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    style={{ flex: 1 }}
    keyboardVerticalOffset={150}
  >
    {children}
  </KeyboardAvoidingView>
);

export default KeyboardAvoidingContainer;
