import styled from 'styled-components';

function Avatar({ src, alt, size }) {
  return (
    <S.AvatarContainer size={size}>
      <img src={src} alt={alt}/>
    </S.AvatarContainer>
  )
}

export default Avatar;

const AvatarContainer = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: ${props => props.size}px;
  >img {
    width: 100%;
    border-radius: ${props => props.size}px;
    vertical-align: center;
  }
`;

const S = {
  AvatarContainer,
};
