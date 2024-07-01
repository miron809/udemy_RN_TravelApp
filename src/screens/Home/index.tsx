import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Title from '../../components/Title';

const Home = () => {
  const [title, setTitlte] = useState('My Home');

  useEffect(() => {
    setTimeout(() => {
      setTitlte('Updated from timeout');
    }, 3000);
  });

  console.log('title => ', title);

  return (
    <View>
      <Text>
        <Title />
      </Text>
    </View>
  );
};

export default React.memo(Home);
