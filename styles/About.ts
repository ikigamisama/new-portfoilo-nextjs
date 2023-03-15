import { Box, Button, ListItem, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'


export const SecTitleText = styled.h1`
    font-size: 2rem;
    line-height: 1;
    padding: 2rem 0;
    color: ${(props? : any) => (props.theme === 'light' ? '#202020' : 'white')};
`

export const AboutMeImg = styled(Box)`
    animation: morph 8s ease-in-out infinite;
    background-image: url('${(props) => (props.srcimg)}');
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border: 5px solid ${(props? : any) => (props.theme === 'light' ? '#202020' : 'white')}; 
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    height: 30rem;
    position: relative;
    transition: all 1s ease-in-out;
    width: 30rem;
`

export const AboutMeHeadingText = styled(Text)`
    font-size: 40px;
    margin-bottom: 25px;
    font-weight: 700;
    color: ${(props? : any) => (props.theme === 'light' ? '#202020' : 'white')};
`

export const AboutMeText = styled(Text)`
    font-size: 18px;
    letter-spacing: 0.01em;
    margin-bottom: 20px;
`

export const AboutButtonTabList = styled(Button)`
    width: 100%;
    margin-top: 0 !important;
    border-radius: 0;
    font-size: 18px;
    padding: 28px 0;
    background: ${(props? : any) => (props.currentclick === 'true' ? 'rgba(49, 130, 206, 0.3)' : 'transparent')};
    position: relative;
    font-weight: 400;
    font-size: 16px;
    color: white;

    &:hover{
        background: rgba(49, 130, 206, 0.3);
        color: white;
    }

    &::before{
        content: "";
        position:absolute;
        height: 100%;
        width: 5px;
        left: 0;
        top: 0;
        background-color: ${(props? : any) => (props.currentclick === 'true' ? 'rgb(49, 130, 206)' : 'rgba(255,255,255,0.4)')}; 
    }
    
`

export const WorkTitleHeadText = styled(Text)`
    font-size: 35px;
    font-weight: 700;
    margin-bottom: 15px;
    letter-spacing: 0.02em;
    color: ${(props? : any) => (props.theme === 'light' ? '#202020' : 'white')};;
`

export const WorkTitleCompanyText = styled.span`
    color: rgba(49, 130, 206);
`

export const WorkTitleDuration = styled(Text)`
    font-size: 18px;
    letter-spacing: 0.01em;
    margin-bottom: 50px;
`
export const WorkDescriptionText = styled(ListItem)`
font-size: 18px;
letter-spacing: 0.01em;
margin-bottom: 25px;
`