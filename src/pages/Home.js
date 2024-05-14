import {
  MainTitle,
  HeroDescription,
  HeroSection,
  HeroContainer,
  Item,
  List,
  Description,
  Container,
} from './Home.styled.js';
import { Text, Title, Suptitle, Section } from 'components/CommonStyles';
import Button from 'components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import aboutMe from '../images/about-me-one.jpg';
import aboutMeTwo from '../images/about-me-two.jpg';

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Your favorite Tattoo and Permanent Makeup Artist in Toronto"
        />
        <meta
          name="keywords"
          content="tattoo, toronto, canada, permanent, makeup, alina ivenko, ivenko alina, ivenko, alina, booking, artist, fine line tattoo, small tattoo, large tattoo, tattoo faqs, aftercare, portfolio"
        />
        <meta name="author" content="Alina Ivenko" />
        <meta property="og:title" content="Alina Ivenko" />
        <meta
          property="og:description"
          content="Your favorite Tattoo and Permanent Makeup Artist in Toronto"
        />
        <title>BOOK</title>
      </Helmet>

      <HeroSection>
        <HeroContainer>
          <Suptitle>VIP BOOKING</Suptitle>
          <MainTitle>BOOK A Ⓜ️ASTER</MainTitle>
          <HeroDescription>
            Book a vetted Hair Master near you, communicate in one open Hair
            Discord city channel to ensure quality customer service.
          </HeroDescription>
        </HeroContainer>
      </HeroSection>
      <Section primary={'primary'}>
        <Container>
          <List>
            <Item>
              <img src={aboutMe} alt="about-me-one" width={270} />
            </Item>
            <Item>
              <img src={aboutMeTwo} alt="about-me-two" width={270} />
            </Item>
          </List>

          <Description>
            <Suptitle primary={'primary'}>MASTER STYLISTS</Suptitle>
            <Title>Verified Hair Master Stylist</Title>
            <Text primary={'primary'} main={'main'}>
              To raise the quality of service in the hair industry Arvrtise
              created a new way to book online and communicate with stylists.
              Arvrtise <a href=" https://discord.com/servers/hair-1188100125705375806" title="Hair Products" target="_blank" rel="noopener">Hair</a>
               Discord is a premium subscription for everything hair including 
              booking, CRM, Podcast, Live shows and classes, and Hairverse live 
              streaming events in one location.
            </Text>
            <Button onClick={() => navigate('/booking/service')}>
              Online-Booking
            </Button>
          </Description>
        </Container>
      </Section>
    </>
  );
}
