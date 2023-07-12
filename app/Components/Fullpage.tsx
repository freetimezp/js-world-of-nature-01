"use client";
import Image from "next/image";
import { styled } from "styled-components";

import Rhino from '/public/images/page-1.jpg';

const Fullpage = () => {
  return (
    <FullpageStyled>
      <div className="image">
        <Image
          src={Rhino}
          alt="rhino"
          fill={true}
          style={{
            objectFit: "cover",
            objectPosition: "center"
          }}
        />
      </div>
    </FullpageStyled>
  );
}

const FullpageStyled = styled.div`
  .image {
    width: calc(100% - 10rem);
    height: 800px;
    position: relative;
    border-radius: 8px;
    border: 1px solid var(--color-border);
    transition: border 0.3s ease-in-out;

    img {
      padding: 1.5rem;
    }

    &:hover {
      border: 1px solid #f2994a;
    }
  }
`;

export default Fullpage;
