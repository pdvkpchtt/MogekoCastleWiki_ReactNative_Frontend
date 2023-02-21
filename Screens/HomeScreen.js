import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { BottomCarusel } from '../Components/BottomCarusel';
import { InfoTextMiddle } from '../Components/InfoTextMiddle';
import { InfoTextTop } from '../Components/InfoTextTop';
import { Post } from '../Components/Post'
import { TouchableNavText } from '../Components/TouchableNavText';

const BottomHead = styled.Text`
    color: #fff;
    opacity: 0.7;
    font-size: 20px;
    font-weight: bold;
    padding: 0 20px 10px 20px;
`

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
  padding: 7px 0;
  border: 1px solid #680a0a;
  background-color: #680a0a;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  width: 100%;
`

const TopImage = styled.Image`
  width: 180px;
  height: 150px;
  margin: 20px 0 5px 0;
`

const infoArr = [
  {
    topTile: 'Title',
    packOfInfo: [
      {
        main: 'Japanese:',
        sub: 'モゲコキャッスル'
      },
      {
        main: 'Rōmaji:',
        sub: 'Mogeko Castle'
      },
    ]
  },
  {
    topTile: 'Information',
    packOfInfo: [
      {
        main: 'Media Type:',
        sub: 'Game'
      },
      {
        main: 'Official Page:',
        sub: 'funamusea.com'
      },
      {
        main: 'Release Date:',
        sub: 'March 5, 2014'
      },
      {
        main: 'Engine:',
        sub: 'RPG Maker VX Ace'
      },
      {
        main: 'Platforms:',
        sub: 'Windows MacOS'
      },
    ]
  },
  {
    topTile: 'Translations',
    packOfInfo: [
      {
        main: 'Chinese:',
        sub: 'sikiv'
      },
      {
        main: 'English:',
        sub: 'vgperson'
      },
      {
        main: 'Indonesian:',
        sub: 'Shiyori NekoChi'
      },
      {
        main: 'Portuguese:',
        sub: 'Zero Corpse'
      },
      {
        main: 'Spanish:',
        sub: 'Tsumin'
      },
    ]
  },
]

const articles = [
  {
    title: 'Premise',
    text: 'A schoolgirl named Yonaka Kurai arrives in a castle inhabited by Mogekos after falling asleep on the train home. She spends the majority of the game escaping the castle with her guide and partner, Defect Mogeko.'
  },
  {
    title: 'Age Rating',
    text: "Mogeko Castle (Remake) contains gore, implied sexual assault, and other violent imagery. Unlike Deep-Sea Prisoner's other game Wadanohara and the Great Blue Sea, these elements are apparent from the start of the game and prevalent throughout the game as a whole. \n\nMogeko Castle is rated by Deep-Sea Prisoner as 15+; however, this age rating is based on Japanese standards and may vary from country to country. Hence, an age rating of 18+ may be more appropriate for some."
  },
  {
    title: 'Chronology',
    text: "No foreknowledge is required to play Mogeko Castle, and it does not have any prequels. It is currently unclear how the game exactly fits into the timeline of Deep-Sea Prisoner's works. \n\nA spinoff sequel of Mogeko Castle has been in the works, called General Hashasky's Great Adventure. It continues from Mogeko Castle's Normal End. As of March 2022, the sequel is on hold."
  },
  {
    title: 'Gameplay',
    text: "Unlike the original Mogeko Castle and many of Deep-Sea Prisoner's other games, the Mogeko Castle (Remake) does not have any battle mechanics. The game is explored using arrow keys. Much of the game can be interacted with using either the Space, Enter, or Z key to confirm actions. The inventory can be opened with the Escape or X key, and navigated using the arrow keys. Each item in the inventory has a picture inscribed in a bubble."
  }
]

const characters = [
  {
    Title: 'Yonaka Kurai',
    SubText: 'Is the main protagonist of Mogeko Castle.',
    ImgPath: require("../img/characters/1.png")
  },
  {
    Title: 'Defect Mogeko',
    SubText: "Is the deuteragonist of Mogeko Castle.",
    ImgPath: require("../img/characters/3.png")
  },
  {
    Title: 'Mogeko',
    SubText: "Are main antagonists in Mogeko Castle.",
    ImgPath: require("../img/characters/4.png")
  },
  {
    Title: 'Moge-ko',
    SubText: "Is a main antagonist in Mogeko Castle.",
    ImgPath: require("../img/characters/2.png")
  },
]

export default function HomeScreen(props) {  
  const showArticles = () => {
    return articles.map((item, key) => (
      <InfoTextMiddle main={item.title} sub={item.text} key={key} />
    ))
  }

  const renderCharacters = () => {
    return characters.map((item, key) => (
      <TouchableOpacity 
        activeOpacity={0.7} 
        key={key}
        onPress={() => props.navigation.navigate('ArticleScreen', {id: key})}
      >
        <Post title={item.Title} subText={item.SubText} imgPath={item.ImgPath} id={key} />
      </TouchableOpacity>
    ))
  }

  const renderInfo = () => {
    return infoArr.map((item, key) => (
      <InfoTextTop key={key} info={item} />
    ))
  }

  return (
    <View style={styles.container}> 
      <ScrollView>
        <TopBlock>
          <HeadTextRoundBottom>Mogeko Castle</HeadTextRoundBottom>

          <TopImage source={require('../img/logo.png')} />

          { renderInfo() }

        </TopBlock>

        <View style={styles.midPart}>
          { showArticles() }

          <InfoTextMiddle main={"Main characters"} />
          
          { renderCharacters() }

          <TouchableNavText text='Open "Characters" page...' func={() => props.navigation.navigate('ArticleHubScreen')} />
        </View>

        <View style={styles.bottomPart} >
          <View style={{paddingLeft: 20, paddingRight: 20, paddingBottom: 5}}>
            <InfoTextMiddle main={"Items"} />
          </View>
          <BottomCarusel 
            dataItem={props.route.params.items} 
            nav={props.navigation}
          />
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