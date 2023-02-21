import { useState } from "react";
import { View, ScrollView } from "react-native";
import styled from "styled-components";
import { InfoTextMiddle } from "../Components/InfoTextMiddle";
import { Carusel } from "../Components/Carusel";
import { TouchableNavText } from "../Components/TouchableNavText";

const BackgrView = styled.View`
    flex: 1;
    background-color: #333333;
`

const ArtImage = styled.Image`
    width: 250px;
    height: 150px;
    margin: 0 0 15px 0;
    border-radius: 15px;
    border: 1px solid #222222;
`

const screenshots = [
    [
        {
            id: 0,
            imgPath: require('../img/screenshots/g1.png')
        },
        {
            id: 1,
            imgPath: require('../img/screenshots/g2.png')
        },
        {
            id: 2,
            imgPath: require('../img/screenshots/g3.png')
        },
        {
            id: 3,
            imgPath: require('../img/screenshots/g4.png')
        },
        {
            id: 4,
            imgPath: require('../img/screenshots/g5.png')
        },
    ],
    [
        require('../img/screenshots/a1.png'),
        require('../img/screenshots/a2.png'),
        require('../img/screenshots/a3.png'),
        require('../img/screenshots/a4.png')
    ]
]

export const ScreenShots = props => {
    const [showImgs, setShowImgs] = useState(false)
    
    const renderArts = () => {
        return screenshots[1].map((item, key) => (
            <ArtImage key={key} source={item} />
        ))
    }

    return(
        <BackgrView>
            <ScrollView>
                <View style={{paddingTop: 20, paddingLeft: 20, paddingRight: 20, paddingBottom: 5}}>
                    <InfoTextMiddle main='Screenshots' />
                </View>

                <Carusel imgs={screenshots[0]} />

                <View style={{paddingTop: 20, paddingLeft: 20, paddingRight: 20, paddingBottom: 5}}>
                    <InfoTextMiddle main='Arts' />
                </View>
                
                <View style={{display: 'flex', alignItems: 'center', paddingBottom: 15}}>
                    { 
                        showImgs ?     
                        [renderArts(), <TouchableNavText key={1} text='Hide arts' func={() => setShowImgs(false)} />] :
                        <View>
                            <ArtImage source={screenshots[1][0]} />
                            <TouchableNavText text='Show more arts' func={() => setShowImgs(true)} />
                        </View>
                    }
                </View>
            </ScrollView>
        </BackgrView>
    )
}