/// <reference types="next" />
/// <reference types="next/types/global" />

declare module 'react-anchor-link-smooth-scroll-v2' {
    interface Props {
      href: string;
      offset?: function | number;
      onClick?: (e: Event) => void;
      [key: string]: any;
    }
  
    export default class AnchorLink extends React.Component<Props> {}
  }

  declare module '*.png' {
    const content: StaticImageData;
    export default content;
  }
  
  declare module '*.svg' {
    const content: React.FC<React.SVGProps<SVGSVGElement>>;
    export default content;
  }
  
  declare module '*.jpg' {
    const content: StaticImageData;
    export default content;
  }
  
  declare module '*.jpeg' {
    const content: StaticImageData;
    export default content;
  }
  
  declare module '*.gif' {
    const content: StaticImageData;
    export default content;
  }
  
  declare module '*.webp' {
    const content: StaticImageData;
    export default content;
  }
  
  declare module '*.ico' {
    const content: StaticImageData;
    export default content;
  }
  
  declare module '*.bmp' {
    const content: StaticImageData;
    export default content;
  }