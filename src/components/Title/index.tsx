import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import styles from './styles';

interface titleProps {
  text: string;
}

const Title = (props: titleProps) => {
  const [stateText, setText] = useState('Default state');
  console.log('UPDATE in TITLE');

  const onTextPress = () => {
    setText('Updated');
  };

  return (
    <Text style={styles.title} onPress={onTextPress}>
      {stateText}
    </Text>
  );
};

Title.defaultProps = {
  text: 'Default Title',
};

export default React.memo(Title);
