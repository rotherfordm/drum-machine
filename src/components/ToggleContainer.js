import styled from "styled-components";

 const ToggleContainer = styled.button`
  background: transparent;
  border: none;
  //background: ${({ theme }) => theme.gradient};
  //border: 2px solid ${({ theme }) => theme.toggleBorder};
  //border-radius: 30px;
  cursor: pointer;
  display: block;
  font-size: 100%;
  //justify-content: space-between
  margin: 0;
  overflow: hidden;
  padding: 0;
  position: absolute;
  top: 50px;
  right: 10px;
  //width: 4.5rem;
  //height: 2.6rem;
  width: 2.2em;
  height: 2.2em;
  

  svg {
    //height: auto
    height: 2em;
    //width: 1.3rem;
    width: 2em;
    transition: all 0.3s linear;
    
    // sun icon
    &:first-child {
      //z-index: 1;
      transform: ${({ pianoMode }) => !pianoMode ? 'translateY(-100px)' : 'translateY(0)'} ;
    }
    
    // moon icon
    &:nth-child(2) {
      //z-index: 2;
      transform: ${({ pianoMode }) => !pianoMode ? 'translateY(-50px)' : 'translateY(0)'} ;
    }
  }
`;

export default ToggleContainer;