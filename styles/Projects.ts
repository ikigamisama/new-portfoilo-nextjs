import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

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