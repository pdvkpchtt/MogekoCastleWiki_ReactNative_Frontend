import React from 'react';
import { StyleSheet, View, TouchableOpacity, FlatList, RefreshControl } from 'react-native';
import { Loading } from '../Components/Loading';
import { Post } from '../Components/Post';

export default function ItemsHubScreen(props) {  
  // const showItems = () => {
  //   return items.map((item, key) => (
  //     <Post 
  //       key={key}
  //       title={item.Title}
  //       subText={item.SubText}
  //       imgPath={item.ImgPath}
  //     />
  //   ))
  // }

  const [isLoading, setIsLoading] = React.useState(false);

  // костыль для иммитации загрузки контента 
  function sleep(time){
    return new Promise((resolve)=>setTimeout(resolve,time))
  }
  const showPosts = () => { 
    setIsLoading(true)
    
    sleep(1000).then(()=>{
      setIsLoading(false)
   })
  }
  // костыль для иммитации загрузки контента

  return (
    <View style={styles.container}> 
      {
        !isLoading ?
        <FlatList
          // alwaysBounceVertical
          showsVerticalScrollIndicator={false}
          refreshControl={<RefreshControl colors={['orange']} progressBackgroundColor={'#272727'} refreshing={isLoading} onRefresh={showPosts} />}
          data={props.route.params.items}
          renderItem={({ item, index }) => (
            <TouchableOpacity 
              activeOpacity={0.7} 
              onPress={
                () => props.navigation.navigate('ItemScreen', {id: index})
              }
            >
              <Post title={item.Title} subText={item.SubText} imgPath={item.ImgPath} id={index} />
            </TouchableOpacity>
          )}
        />
        : 
        <Loading name='items' />
      } 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#474747',
  }
});