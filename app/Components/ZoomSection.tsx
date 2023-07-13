"use client";
import React, { useRef } from 'react';

import hover3d from '../utils/hover';
import { styled } from 'styled-components';
import Image from 'next/image';

import Animal1 from '../../public/images/zoom-1.jpg';
import Animal2 from '../../public/images/zoom-2.jpg';
import spiral from '../../public/images/spiral.svg';

const ZoomSection = () => {
  const hero = useRef<HTMLDivElement>(null);

  const hover = hover3d(hero, {
    x: -5,
    y: 10,
    z: 4
  });

  const hover2 = hover3d(hero, {
    x: 40,
    y: 20,
    z: 7
  });

  const hover3 = hover3d(hero, {
    x: -40,
    y: -20,
    z: -7
  });

  return (
    <ZoomSectionStyled ref={hero}>
      <div className='image'>
        <Image
          src={spiral}
          alt="zoom"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            transform: hover.transform,
            transition: hover.transition,
            scale: 1.2,
            background: "var(--color-bg)"
          }}
        />

        <Image
          src={Animal1}
          alt="zoom"
          className='animall'
          width={500}
          height={500}
          style={{
            objectFit: "cover",
            objectPosition: "50% 50%",
            transform: hover2.transform,
            transition: hover2.transition,
          }}
        />

        <Image
          src={Animal2}
          alt="zoom"
          className='animal2'
          width={500}
          height={500}
          style={{
            objectFit: "cover",
            objectPosition: "center",
            transform: hover3.transform,
            transition: hover3.transition,
          }}
        />
      </div>
    </ZoomSectionStyled>
  );
}

const ZoomSectionStyled = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid var(--color-border);

  .image {
    width: 100%;
    height: 50rem;
    border-radius: 8px;
    img {
      border-radius: 8px;
    }
  }

  .animall {
    position: absolute;
    top: 19%;
    left: 5rem;
  }

  .animal2 {
    position: absolute;
    top: 19%;
    right: 5rem;
  }
`;

export default ZoomSection;
