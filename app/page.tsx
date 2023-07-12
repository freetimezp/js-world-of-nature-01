"use client";
import styled from "styled-components";

import Header from "./Components/Header/Header";
import SectionLayout from "./Components/SectionLayout";

import { cards } from './utils/cards';
import Card from "./Components/Card";

export default function Home() {
  return (
    <>
      <Header />
      <MainStyled>
        <SectionLayout>
          <div className="cards">
            {cards?.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                image={card.image} />
            ))}
          </div>
        </SectionLayout>
      </MainStyled>
    </>
  );
}

const MainStyled = styled.main`
  min-height: 100vh;
  width: 100%;

  .cards {
    display: grid;
    grid-template-columns: repeat(5, 30rem);
    gap: 4rem;
    position: absolute;
  }
`;



