/// <reference types="react-scripts" />

interface Window {
    ethereum: any
}

declare module '*.mp4' {
    const src:string;
    export default src;
}