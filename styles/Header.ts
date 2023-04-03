import { Box, Button } from '@chakra-ui/react'
import styled from '@emotion/styled'
import AnchorLink from 'react-anchor-link-smooth-scroll'

interface HeaderProps {
    ismobile: 'true' | 'false' 
}

export const HeaderMain = styled.header<HeaderProps>`
    padding: 0 35px;
    width: 100%;
    height: 75px;
    background-color: transparent;
`

export const NavHeader = styled.nav`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const NavLinks = styled(AnchorLink)`
    font-size: 16px;
    color: white;
    line-height: 1;
    padding: 10px 18px;
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);

    &:hover{
        color: #3182CE;
    }
`

export const NavLinksOrdinary = styled.a`
    font-size: 16px;
    color: white;
    line-height: 1;
    padding: 10px 18px;
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);

    &:hover{
        color: #3182CE;
    }
`

export const ThemeButton = styled(Button)`
    font-width: 400;
    background-color: transparent;
    border: 1px solid white;
    color: white !important;


   &:hover{
     color: #202020 !important;
     background-color : white !important;
   }

   & > svg{
    width: 18px;
    height: 18px;
   }
`

export const MobileNavBG = styled(Box)`
    position: fixed;
    padding: 25px 15px;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0px;
    bottom: 0px;
    right: 0px;
    width: min(65vw, 400px);
    height: 100vh;
    z-index: 100;
    background-color: ${(props) => (props.theme === 'light' ? 'white' : '#202020')};
    transform: ${(props) => (props.isactive === 'true' ? 'translateX(0vw)' : 'translateX(100vw)')};
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
`
