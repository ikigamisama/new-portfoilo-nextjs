
import styled from '@emotion/styled'

interface LoaderProps {
    isload: Boolean | undefined 
}

export const LoaderWrapper = styled.div<LoaderProps>`
   width: 100%;
   height: 100%;
   position: fixed;
   ${(props? : any) => (props.isload === true ? ' display: block; opacity: 1;' : 'display: none; opacity: 0;')};
   ${(props? : any) => (props.theme === 'light' ? 'background-color: white;' : 'background-color: #202020;')};
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   z-index: 1000;
   transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
`

export const RingLoader = styled.div`
    position: absolute;
    width: 175px;
    height: 175px;
    border-radius: 50%;
    animation: ring 2s linear infinite;
`

