import styled from "styled-components";
import { View, StyleSheet } from "react-native";

const MainHead = styled.Text`
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  opacity: .7;
`

const SubHead = styled.Text`
  font-size: 16px;
  color: #fff;
  opacity: .5;
`

export const InfoTextMiddle = props => {
    return(
        <View style={[props.sub == null ? styled.noSub : styles.normal]}>
          <MainHead>{props.main}</MainHead>
          <View
            style={{
                borderBottomColor: '#fff',
                opacity: .4,
                marginTop: 7,
                marginBottom: 7,
                borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
          {
            props.sub != null ?
            <SubHead>{props.sub}</SubHead> :
            null
          }
        </View>
    )
}

const styles = StyleSheet.create({
  normal: {
    display: 'flex', 
    flexDirection: 'column', 
    marginBottom: 30
  },
  noSub: {
    display: 'flex', 
    flexDirection: 'column', 
  }
})
