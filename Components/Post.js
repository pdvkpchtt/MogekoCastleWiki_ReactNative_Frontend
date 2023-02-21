import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

const PostView = styled.View`
  flex-direction: row;
  padding: 10px;
  margin: 0 10px 10px 10px;
  background-color: #333333;
  border: 1px solid #333333;
  border-radius: 10px;
  overflow: hidden;
`;

const PostBlock = styled.View`
  flex: 1; 
`;

const PostImage = styled.Image`
  width: 70px;
  height: 70px;
  margin: 0 10px 0 0;
`;

const PostTitle = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  opacity: 0.8;
`;

const PostSubText = styled.Text`
  font-size: 16px;
  color: #fff;
  opacity: 0.5;
`;

export const Post = props => {
  return (

      <PostView style={[props.id == 0 ? styles.margintop : null]}>
        <PostImage source={props.imgPath} />

        <PostBlock>
          <PostTitle>{props.title}</PostTitle>
          <PostSubText>{props.subText}</PostSubText>
        </PostBlock>
      </PostView>
  );
}

const styles = StyleSheet.create({
  margintop: {
    marginTop: 10,
  },
});