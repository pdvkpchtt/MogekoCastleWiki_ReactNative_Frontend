import React from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { BottomCarusel } from '../Components/BottomCarusel';
import { SubPost } from '../Components/SubPost';

const TopBlock = styled.View`
    background-color: #333333;
    flex-direction: row;
    padding: 42px 0 20px 0;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`

const ItemImg = styled.Image`
    width: 100px;
    height: 100px;
    margin: 0 10px 0 10px;
`

const ItemTextBlock = styled.View`
    flex: 1;
    margin: 5px 0 10px 0;
`

const ItemTitle = styled.Text`
    font-size: 24px;
    font-weight: 700;
    color: #fff;
    opacity: 0.8;
`

const ItemSubText = styled.Text`
    font-size: 17px;
    color: #fff;
    opacity: 0.5;
    flex: 1;
`

const DescriptionText = styled.Text`
    color: #fff;
    opacity: 0.6;
    padding: 0;
    font-size: 16px;
`

const BottomHead = styled.Text`
    color: #fff;
    opacity: 0.7;
    font-size: 20px;
    font-weight: bold;
    padding: 0 20px 10px 20px;
`

const screenHeight = Dimensions.get('window').height;
const BottomBlockHeight = 153;
const TopBlockHeight = 165;

const ItemScreen = props => {
    return (
        <View style={styles.container}>
            <View>
                <TopBlock style={{
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.32,
                    shadowRadius: 5.46,
                    
                    elevation: 9,
                    
                    height: TopBlockHeight
                }}>
                    <ItemImg source={props.route.params.items[props.route.params.id].ImgPath} />
                    
                    <ItemTextBlock>
                        <ItemTitle>{props.route.params.items[props.route.params.id].Title}</ItemTitle>
                        <ItemSubText>{props.route.params.items[props.route.params.id].SubText}</ItemSubText>
                    </ItemTextBlock>
                </TopBlock>

                <View>
                    <ScrollView 
                        style={{maxHeight: screenHeight + 18 - TopBlockHeight - BottomBlockHeight, padding: 20}}
                    >
                        <DescriptionText>
                            {props.route.params.items[props.route.params.id].DescriptionText}
                            {/* {props.route.params.items[props.route.params.id].DescriptionText}
                            {props.route.params.items[props.route.params.id].DescriptionText}
                            {props.route.params.items[props.route.params.id].DescriptionText}
                            {props.route.params.items[props.route.params.id].DescriptionText} */}
                        </DescriptionText>
                    </ScrollView>
                </View>
            </View>
            
            <BottomCarusel 
                title={'Switch to other item:'} 
                dataItem={props.route.params.items}
                bottomHeight={true} 
                nav={props.navigation}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#474747',
      justifyContent: 'space-between'
    },
});

export default ItemScreen