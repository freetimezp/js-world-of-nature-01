"use client";
import styled from "styled-components";

import Header from "./Components/Header/Header";
import SectionLayout from "./Components/SectionLayout";

import { cards } from './utils/cards';
import Card from "./Components/Card";
import Fullpage from "./Components/Fullpage";
import TextSection from "./TextSection";
import Footer from "./Components/Footer";

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

        <Fullpage />

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

        <SectionLayout>
          <TextSection />
        </SectionLayout>

        <SectionLayout>
          <div className="video">
            <iframe
              src="https://www.youtube.com/embed/uEcjgnzIv7g"
              title="Youtube video"
              allow="accelerometr; autoplay; clipboard-write; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </SectionLayout>

        <SectionLayout>
          <TextSection />
        </SectionLayout>

        <Footer />
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
  }

  .video {
    padding: 2rem;
    background-color: #161616;
    border-radius: 1rem;
    iframe {
      border: none;
      width: 100%;
      height: 52rem;
    }
  }
`;



