import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, ScrollView, View} from 'react-native';
import Title from '../../components/Title';
import styles from './styles';
import Categories from '../../components/Categories';
import AttractionCard from '../../components/AttractionCard';
import jsonData from '../../data/attractions.json';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        contentContainerStyle={styles.flatList}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.header}>
            <Title text={'Where do'} style={{fontWeight: 'normal'}} />
            <Title text={'you want to go'} />
            <Title text={'Explore Attractions'} style={styles.subtitle} />
            <Categories
              selected={selectedCategory}
              onPress={setSelectedCategory}
              categories={[
                'All',
                'Popular',
                'Historical',
                'Random',
                'Other',
                'Scrolling',
                'Scrolling1',
                'Scrolling2',
                'Scrolling3',
                'Scrolling4',
              ]}
            />
          </View>
        }
        keyExtractor={item => String(item?.id)}
        renderItem={({item}) => {
          return (
            <AttractionCard
              title={item.name}
              subtitle={item.city}
              imageSrc={item.images?.length ? item.images[0] : null}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

export default React.memo(Home);
