import styled from 'styled-components'
import colors from '../../styles/constants/colors'

export const navMenu = styled.nav`
  max-width: 1080px;
  height: 100%;
  display: flex;
  justify-content: space-between;
`
export const navLogoBox = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.WHITE};
  font-weight: 600;
  font-size: 30px;

  div {
    margin-left: 5px;
  }
  svg {
    width: 38px;
    height: 40px;
    margin-bottom: 7px;
    path {
      fill: ${colors.WHITE};
    }
  }
`

export const navBtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    color: ${colors.WHITE};
    font-size: 18px;
    width: 100px;
  }
`
