"use client";
import { useRef } from "react";
import Image from "next/image";
import styled from "styled-components";
import { FaCrow, FaRocket } from 'react-icons/fa';
import { Abril_Fatface } from 'next/font/google';

import Logo from '../../../public/logo.png';
import Button from "../Button/Button";

import header1 from '../../../public/images/header-1.jpg';

import hover3d from '../../utils/hover';

const abril = Abril_Fatface({
  subsets: ['latin'],
  weight: "400"
});

const Header = () => {
  const hero = useRef<HTMLDivElement>(null);

  const hoverHero = hover3d(hero, {
    x: 30,
    y: -40,
    z: 30
  });

  const imageHover = hover3d(hero, {
    x: 20,
    y: -5,
    z: 11
  });

  return (
    <HeaderStyled ref={hero}>
      <nav>
        <div className="logo">
          <Image src={Logo} alt="logo" width={40} />
          <h2>Logo</h2>
        </div>

        <div className="input">
          <input type="text" placeholder="Search" />
        </div>

        <ul className="nav-items">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Map</a>
          </li>

          <Button name="Explore World" icon={<FaCrow />} />
        </ul>
      </nav>
      <div className="header-content">
        <div className="text-content">
          <h1 className={abril.className}>
            Explore This Beautiful World With Us.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Vel quae minima distinctio mollitia libero illum deleniti
            delectus eligendi recusandae? Vero, impedit voluptate. Soluta
            magnam tempore ratione aliquam error esse ipsam consequuntur
            consectetur, odit quasi quo.
          </p>
          <div className="buttons">
            <Button
              name="Get Started"
              background="#f2994a"
              color="#fff"
              border="1px solid #f2994a"
              icon={<FaRocket />}
            />
            <Button name="Learn More" />
          </div>
        </div>
        <div className="image-content">
          <div
            className="image"
            style={{ transform: hoverHero.transform, transition: hoverHero.transition }}
          >
            <Image
              src={header1}
              alt="header"
              width="600"
              height="600"
              style={{ transform: imageHover.transform, transition: imageHover.transition }}
            />
          </div>
        </div>
      </div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  nav {
    padding: 0 4rem;
    min-height: 10vh;
    border-bottom: 1px solid var(--color-border);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
    }

    .input {
      flex: 2;
      display: flex;
      justify-content: center;

      input {
        width: 55%;
        padding: 0.6rem 0.8rem;
        border-radius: 8px;
        background-color: #161616;
        border: 1px solid var(--color-border);

        &::placeholder {
          color: var(--color-border);
          font-weight: 500;
        }
      }
    }

    .nav-items {
      display: flex;
      align-items: center;
      gap: 2rem;

      li {
        transition: all 0.3s ease-in-out;

        &:hover {
          color: #fff;
          transform: scale(1.1);
        }
      }
    }
  }

  .header-content {
    padding: 0 10rem 5rem 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    min-height: 90vh;

    .text-content {
      > h1 {
        font-size: clamp(2rem, 5vw, 5rem);
        color: #f2994a;
        transition: all 0.01s linear;
        padding-bottom: 1.5rem;
      }

      .buttons {
        display: flex;
        gap: 1rem;
        margin-top: 2.5rem;
      }
    }

    .image-content {
      .image {
        padding: 1rem;
        border-radius: 8px;
        background-color: var(--color-bg);
        border: 1px solid var(--color-border);

        img {
          border-radius: 8px;
        }
      }
    }
  }
`;

export default Header;
