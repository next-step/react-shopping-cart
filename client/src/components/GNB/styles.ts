import styled from 'styled-components'
import colors from '../../styles/constants/colors'

export const navMenu = styled.nav`
  max-width: 1080px;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
`
export const navLogoBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: ${colors.WHITE};
    font-size: 30px;
    font-weight: 600;
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

  a {
    color: ${colors.WHITE};
    font-size: 18px;
    width: 100px;
  }
`
