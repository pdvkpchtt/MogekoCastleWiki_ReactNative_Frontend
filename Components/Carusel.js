import React, { useState } from "react";
import { View, StyleSheet, Dimensions, FlatList, Image } from "react-native";
import styled from "styled-components";
import Animated, { interpolate, Extrapolate, useSharedValue, useAnimatedStyle } from "react-native-reanimated";

const SCR_WIDTH = Dimensions.get('window').width;
const CARD_LENGTH = SCR_WIDTH * 0.8;
const SPACING = SCR_WIDTH * 0.02;
const SIDECARD_LENGTH = (SCR_WIDTH * 0.18) / 2;

const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList)

const SliderImg = styled.Image`
    width: 100%;
    height: 100%;
`

function Item(props){
    const size = useSharedValue(0.8)
    const opacity = useSharedValue(1);

    const intputRange = [
        (props.index - 1) * CARD_LENGTH,
        props.index * CARD_LENGTH,
        (props.index + 1) * CARD_LENGTH
    ]
    const opacityInputRange = [
        (props.index - 1) * CARD_LENGTH,
        props.index * CARD_LENGTH,
        (props.index + 1) * CARD_LENGTH,
    ];

    size.value = interpolate(
        props.scrollX,
        intputRange,
        [0.8, 1, 0.8],
        Extrapolate.CLAMP
    )
    opacity.value = interpolate(
        props.scrollX,
        opacityInputRange,
        [0.2, 1, 0.2],
        Extrapolate.CLAMP
    );

    const cardStyle = useAnimatedStyle(() => {
        return{
            transform: [{scaleY: size.value}],
            opacity: opacity.value,
        }
    })

    return(
        <Animated.View style={[styles.CaruselView, cardStyle, {
            marginLeft: props.index == 0 ? SIDECARD_LENGTH : SPACING,
            marginRight: props.index == props.imgs[props.imgs.length - 1].id ?  SIDECARD_LENGTH : SPACING,
        }]}>
            <SliderImg source={props.item.imgPath} />
        </Animated.View>
    )
}

export const Carusel = props => {
    const [scrollX, setScrollX] = useState(0);

    return(
        <Animated.View>
            <AnimatedFlatlist 
                snapToInterval={CARD_LENGTH + (SPACING * 1.5)}
                showsHorizontalScrollIndicator={false}
                disableIntervalMomentum={true}
                disableScrollViewPanResponder={true}
                data={props.imgs}
                horizontal={true}
                renderItem={({item, index}) => (
                    <Item index={index} imgs={props.imgs} item={item} scrollX={scrollX} />
                )}
                onScroll={(event) => {setScrollX(event.nativeEvent.contentOffset.x)}}
                // keyExtractor={(item) => item.id}
            />
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    CaruselView: {
        width: CARD_LENGTH,
        height: 200,
        overflow: "hidden",
        borderRadius: 15
    }
})