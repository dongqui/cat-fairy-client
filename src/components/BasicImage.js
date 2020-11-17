import styled from 'styled-components';

const BasicImage = function ({ width, height, src, alt}) {
  return(
    <S.ImageWrapper width={width} height={height}>
      <img src={src} alt={alt}/>
    </S.ImageWrapper>
  )
}

export default BasicImage;
const ImageWrapper = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  display: flex;
  align-items: center;
  justify-content: center;
  >img {
    width: 100%;
  }
`;
const S = {
  ImageWrapper,
};
