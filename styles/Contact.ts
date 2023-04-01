import { Box, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'


export const ContactCardWrapper = styled(Box)`
    width: 100%;
    height: 100%;
    ${(props? : any) => (props.theme === 'light' ? 'background-color: white;' : 'background-color: #202020;')};
`
export const ContactTextHead = styled(Text)`
    font-size: 30px;
    margin-bottom: 25px;
    font-weight: 300;
    font-style: italic;
    color: ${(props? : any) => (props.theme === 'light' ? '#202020' : 'white')};


    & > a{
        text-decoration: underline;
        text-underline-offset: 5px;
        font-weight: 500;
    }
`