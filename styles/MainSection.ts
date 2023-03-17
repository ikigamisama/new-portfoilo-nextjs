import { Box, Button } from '@chakra-ui/react'
import styled from '@emotion/styled'


interface StyleProps {
    isscrolldown: string | undefined
  }

export const MainSectionWrapper = styled.section`
    width: 100%;
`

export const BGMainSection = styled.section`
    width: 100%;
   height: 100vh;
    position: relative;
`

export const MainSectionVidWrap = styled(Box)`
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
`

export const VideoMainSection = styled.video`
    height: 100vh;
    width: 100%;
    object-fit: cover;
`

export const MainSectionWrapContent = styled.div`
    width: 100%;
    height: calc(100vh - 75px);
    display: flex;
    align-items: center;
`

export const ContentIntroText = styled.p`
    font-weight: 400;
    margin-bottom: 25px;
    color: white !important;
    line-height: 1;
`

export const MainSectionHeadingText = styled.h2`
    font-size: clamp(2.5rem, 8vw, 5rem);
    font-weight: 900;
    color: white !important;
    line-height: 1;
    margin-bottom: 1rem;
`

export const MainSectionSubHeadingText = styled.h4`
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 700;
    line-height: 1;
    margin-bottom: 25px;
    color: white !important;
`

export const MainSectionText = styled.p`
    max-width: 540px;
    font-size: 18px;
    color: white !important;
    margin-bottom: 50px;
`

export const ResumeDownloadButton = styled(Button)`
    background-color: transparent;
    border: 1px solid white;
    color: white !important;
    padding: 22px !important;
    align-self: flex-start;

    &:hover{
        color: #202020 !important;
        background-color : white !important;
      }
`

export const CornerInfo = styled(Box)`
    width: 40px;
    position: fixed;
    bottom: 0px;
    ${(props) => (props.positionorient === 'left' ? ' left: 40px; right: auto;' : 'right: 40px; left: auto; padding-top: 20px;')};
    z-index: 100;
`

export const CornerWrapper = styled.div<StyleProps> `
    display: flex;
    align-items: center;
    position: relative;
    flex-direction: column;

    &::after{
        content: "";
        display: block;
        width: 1px;
        height: 125px;
        margin: 0px auto;
        background-color: ${(props) => (props.isscrolldown === 'true' ? '#202020' : 'white')};
    }
`

export const CornerLink = styled.a<StyleProps>`
    display: inline-block;
    margin: 20px auto;
    padding: 10px;
    letter-spacing: 0.1rem;
    font-size: 14px;
    color: ${(props) => (props.isscrolldown === 'true' ? '#202020' : 'white')};
    writing-mode: vertical-lr;
    transform: rotate(180deg);

`
export const CornerLinkSocials = styled.a<StyleProps>`
    margin-bottom: 25px;
    color: ${(props) => (props.isscrolldown === 'true' ? '#202020' : 'white')};
    & > svg{
        width: 25px; 
        height: 25px;
    }
`

export const ButtonFloatScrollUp = styled.button<StyleProps>`
    position: fixed;
    z-index: 100;
    bottom: 25px;
    right: 100px;
    background-color: #3182CE;
    width: 4rem;
    height: 4rem;
    filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
    display:  ${(props) => (props.isscrolldown === 'true' ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
    color: white;
    border-radius: 100%;

    &:hover{
        filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));
    }

    & > svg{
        width: 30px;
        height: 30px;
    }
`