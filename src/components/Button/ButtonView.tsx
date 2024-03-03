import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

//Styles
import styles from './styles';

//Props
import {ButtonProps} from './ButtonComponent';

const ButtonView = ({title, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonView;
