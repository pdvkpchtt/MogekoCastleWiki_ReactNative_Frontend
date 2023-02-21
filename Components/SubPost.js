import styled from 'styled-components/native';

const OtherPostView = styled.View`
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin: 0 2.5px 10px 2.5px;
  background-color: #333333;
  border: 1px solid #333333;
  border-radius: 10px;
  overflow: hidden;
  width: 150px;
`;

const PostImage = styled.Image`
  width: 70px;
  height: 70px;
  margin: 0;
`;

const PostTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  opacity: 0.6;
`;

export const SubPost = props => {
    return (
        <OtherPostView>
            <PostImage source={props.imgPath} />
            <PostTitle>{props.title}</PostTitle>
        </OtherPostView>
    )
}

