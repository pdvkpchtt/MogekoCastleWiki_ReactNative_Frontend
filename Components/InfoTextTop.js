import styled from "styled-components";
import { View, StyleSheet } from "react-native";

const HeadTextRoundTop = styled.Text`
  color: #fff;
  opacity: 0.7;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  padding: 7px 0;
  border: 1px solid #680a0a;
  background-color: #680a0a;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 270px;
  margin: 20px 0 10px 0;
`

const MainHead = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  opacity: .8;
`

const SubHead = styled.Text`
  font-size: 14px;
  color: #fff;
  opacity: .6;
`

export const InfoTextTop = props => {
  const showItems = () => {
    return props.info.packOfInfo.map((item, key) => (
      <View style={styles.infoString} key={key} >
        <MainHead>{item.main}</MainHead>
        <SubHead>{'\t\t'}{item.sub}</SubHead>
      </View>
    ))
  }

    return(
        <View>
          <HeadTextRoundTop>{props.info.topTile}</HeadTextRoundTop> 
          
          <View style={styles.infoBlock}>
            { showItems() }
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
  infoString: {
    display: 'flex', 
    flexDirection: 'row',
    padding: 2
  },
  infoBlock: {
    alignItems: 'center',
  }
})
