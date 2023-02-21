import React from 'react';
import { StyleSheet, View, TouchableOpacity, FlatList, RefreshControl } from 'react-native';
import { Post } from '../../Components/Post';
import { Loading } from '../../Components/Loading';

export const ArticleHubScreen = props => {
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
  

    return(
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
                () => props.navigation.navigate('ArticleScreen', {id: index})
              }
            >
              <Post title={item.Title} subText={item.SubText} imgPath={item.ImgPath} id={index} />
            </TouchableOpacity>
          )}
        />
        : 
        <Loading name='characters' />
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