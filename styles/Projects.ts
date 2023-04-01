import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

interface ProjectProps {
    paragraphalign: "left" | "right"
}


export const ProjectTabs = styled(Box)`
    padding-left: 1.75rem;
    padding-right: 1.75rem;
    ${(props) => (props.activetab === 'true' ? 'background: linear-gradient(90deg,#3182CE 2.34%,#b673f8 100.78%);' : '')}
    border-radius: 30px;
    min-width: 100px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    cursor:pointer;
    margin: 1rem;
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
    color: #3A4556;
    color: ${(props? : any) => (props.theme === 'light' ? '#3A4556' : 'white')};
`

export const ProjectListTextAlign = styled(Box)`
    text-align: ${(props? : any) => (props.aligntext)};
    display: flex;
    flex-direction: column;

`

export const ProjectTitleText = styled.h4`
    font-size: clamp(24px, 5vw, 42px);
    font-weight: 700;
    color: ${(props? : any) => (props.theme === 'light' ? '#202020' : 'white')};
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
    margin-bottom: 35px;
    &:hover{
        color: #3182CE;
    }
`

export const ProjectDescriptionText = styled.p<ProjectProps>`
    font-size: 18px;
    letter-spacing: 0.01em;
    margin-bottom: 20px;
    width: 80%;
    float: ${(props? : any) => (props.paragraphalign)};
`

export const ProjectTools = styled(Box)`
    background-color: #3182CE;
    border-radius: 30px;
    font-size: 16px;
    padding: 10px 14px;
`