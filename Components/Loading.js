import {Text, View, ActivityIndicator, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const LoadingSubBlock = styled.View`
    border: 1px solid #333333;
    background: #333333;
    border-radius: 10px;
    padding: 20px;
`;

export const Loading = props => {
    return(
        <View style={styles.loadingBlock}>
          <LoadingSubBlock>
            <ActivityIndicator size="large" color="orange" />
              <Text style={styles.loadingBlock_Text} >
                Loading {props.name}... 
              </Text>
          </LoadingSubBlock>
        </View>
    )
}

const styles = StyleSheet.create({
    loadingBlock: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#474747'
    },
    loadingBlock_Text: {
      color: '#fff',
      opacity: 0.7,
      fontSize: 16,
      marginTop: 7
    }
  });