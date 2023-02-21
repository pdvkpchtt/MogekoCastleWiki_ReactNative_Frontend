import styled from 'styled-components/native';
import { View, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import { SubPost } from './SubPost';

const BottomHead = styled.Text`
    color: #fff;
    opacity: 0.7;
    font-size: 20px;
    font-weight: bold;
    padding: 0 20px 10px 20px;
`

const BottomBlockHeight = 153;

export const BottomCarusel = props => {
    return (
    <View style={[!props.bottomHeight ? styles.bottom : null]} >
        {
            props.title != null ?
            <BottomHead>{props.title}</BottomHead> :
            null
        }
        <FlatList
            horizontal={true}
            alwaysBounceVertical
            showsHorizontalScrollIndicator={false}
            data={props.dataItem}
            renderItem={({ item, index }) => (
                <TouchableOpacity activeOpacity={0.7} 
                    onPress={
                        () => props.nav.navigate('ItemScreen', {id: index})
                    }
                >
                    <SubPost title={item.Title} imgPath={item.ImgPath} />
                </TouchableOpacity>
            )}
        />
    </View>
    )
}

const styles = StyleSheet.create({
    bottom: {
        height: BottomBlockHeight
    }
})
