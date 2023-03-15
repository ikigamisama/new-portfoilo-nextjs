import { Button } from '@chakra-ui/react'
import styled from '@emotion/styled'


export const HeaderMain = styled.header`
    padding: 0 50px;
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

export const NavLinks = styled.a`
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
    width: 22px;
    height: 22px;
   }
`

