import styled from "@vue-styled-components/core";

export const SmallHeading = styled.span`
    background-image: var(--text-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    background-clip: text;
    color: transparent;
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 1.1rem;
`
export const Heading1 = styled.div`
    font-size: calc(1.375rem + 1.5vw);
    font-weight: 700;
    margin-bottom: 0;
    line-height: 1.2;
`

export const Heading2 = styled.div`
    font-size: calc(1.3rem + .6vw);
    
    font-weight: 500;
    line-height: 1.3;
`
export const Heading3 = styled.div`
    font-size: calc(1.2rem + 0.4vw);
     
    font-weight: 500;
    line-height: 1.3;
`

export const Paragraph1 = styled.div`
    color: var(--text-secondary);
    line-height: 1.8rem;
    font-size: 1.1rem;
`
export const Paragraph2 = styled.div`
    color: var(--text-primary);
    line-height: 1.8rem;

`
export const Divider = styled.div`
    width: 80px;
    height: 3px;
    background-image: var(--linear-gradient);
    margin-bottom: 2rem;
`

