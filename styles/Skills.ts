import { Box, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const VideoSkillsSection = styled.video`
    height: 100%;
    width: 100%;
    object-fit: cover;
`

export const SKillsCard = styled(Box)`
    width: 100%;
    border-radius: 40px;
    box-shadow: 5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22);
    cursor: pointer;
    transition: 0.4s;
    background-color: ${(props? : any) => (props.theme === 'light' ? 'white' : '#191B1D')};
    padding: 25px;
    transform: scale(0.9, 0.9);

    &:hover{
        transform: scale(1);
        box-shadow: 5px 5px 30px 15px rgba(0,0,0,0.25), 
          -5px -5px 30px 15px rgba(0,0,0,0.22);
    }
`       

export const SkillsCardTitleText = styled(Text)`
    font-size: 25px;
    margin-bottom: 25px;
    font-weight: 700;
    color: ${(props? : any) => (props.theme === 'light' ? '#202020' : 'white')};
`

