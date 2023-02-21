import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { InfoTextMiddle } from '../../Components/InfoTextMiddle';
import { InfoTextTop } from '../../Components/InfoTextTop';

const TopBlock = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #222222;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #222222;
  padding: 0 0 25px 0;
`

const HeadTextRoundBottom = styled.Text`
  color: #fff;
  opacity: 0.7;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  padding: 42px 0 7px 0;
  border: 1px solid #680a0a;
  background-color: #680a0a;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  width: 100%;
`

const TopImage = styled.Image`
  width: 180px;
  height: 180px;
  margin: 20px 0 5px 0;
`

export default function ArticleScreen(props) {  
  const showArticles = () => {
    return char[id].articles.map((item, key) => (
      <InfoTextMiddle main={item.title} sub={item.text} key={key} />
    ))
  }
  const renderInfo = () => {
    return char[id].info.map((item, key) => (
      <InfoTextTop key={key} info={item} />
    ))
  }
  
  const char = props.route.params.items;  
  const id = props.route.params.id;

  return (
    <View style={styles.container}> 
      <ScrollView>
        <TopBlock>
          <HeadTextRoundBottom>{ char[id].Title }</HeadTextRoundBottom>

          <TopImage source={char[id].ImgPath} />

          { renderInfo() }

        </TopBlock>

        <View style={styles.midPart}>
          { showArticles() }
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#474747',
  },
  midPart: {
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20
  },
  bottomPart: {
    paddingTop: 20,
    marginBottom: -35
  }
});