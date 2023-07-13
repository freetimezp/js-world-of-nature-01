"use client";
import React from 'react';
import { styled } from 'styled-components';

interface Props {
    children: React.ReactNode;
}

const TextWrapper = ({ children }: Props) => {
    const text = React.useRef<HTMLDivElement>(null);

    return (
        <div ref={text}>
            <p>
                {children}
            </p>
        </div>
    )
}

const TextSection = () => {
    return (
        <TextSectionStyled>
            <TextWrapper>
                Lorem ipsum dolor, sit amet consectetur adipisicing.
            </TextWrapper>
            <TextWrapper>
                Lorem ipsum dolor, sit amet consectetur adipisicing.
            </TextWrapper>
            <TextWrapper>
                Lorem ipsum dolor, sit amet consectetur adipisicing.
            </TextWrapper>
            <TextWrapper>
                Lorem ipsum dolor, sit amet consectetur adipisicing.
            </TextWrapper>
        </TextSectionStyled>
    )
}

const TextSectionStyled = styled.section`
    p {
        font-size: 5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 10;
        margin-bottom: 4rem;
        background-color: var(--color-bg);
    }
`;

export default TextSection;
