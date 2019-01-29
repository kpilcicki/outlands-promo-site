import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/addons.cjs'
import { transparentize } from 'polished';

// Components
import Layout from '../components/Layout'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/myavatar.png'
import { Screenshots } from '../components/Screenshots'
import { Trailer } from '../components/Trailer'
import Download from '../views/Download'

import { colors } from '../../tailwind'

import downloadBox from '../../static/downloadBox.png'

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
  line-height: 2em;
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const DownloadContainer = styled.div`
  display: flex;
  justify-content: center;
`

const DownloadIcon = styled.div`
  background-image: url(${downloadBox});
  background-size: contain;
  background-repeat: no-repeat;
  height: 70px;
  width: 70px;
  margin-top: 10px;
`

const DownloadButton = styled.a`
  width: 250px;
  height: 250px;
  border: 20px solid ${colors.white};
  border-radius: 50%;
  background-color: ${transparentize(0.2, colors.white)};
  /* font-size: 25px; */
  /* color: ${colors['green-darker']}; */
  /* color: white; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* font-family: sans-serif; */
  user-select: none;
  cursor: pointer;
  :active {
    margin-top: 20px;
    width: 270px;
  }
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={6}>
      <Hero>
        <BigTitle>Outlands</BigTitle>
        <Subtitle>
          A fast-paced and challenging top-down puzzle platformer based on eating things. And spitting them out.
        </Subtitle>
      </Hero>
      <Screenshots />
      <Download>
        <DownloadContainer>
          <DownloadButton>
            <img src={downloadBox} alt="download" />
          </DownloadButton>
        </DownloadContainer>
      </Download>
      <Trailer />
      <About>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="John Doe" />
          <AboutSub>
          An extraterrestrial pup ends up far away from home, and with the guidance of the player, it has to find its way back—all the while overcoming its increasing hunger. 
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          The player visits numerous alien places that are not quite right. They violate our understanding of physics and our gameplay expectations. Each world presents a unique challenge. 
          After entering a stage the player has to quickly accustom themselves to the rules reigning within and exploit them to satisfy their character’s ever-increasing hunger.
          <br /> <br />
          The alien creature they control needs food to gain the energy required to travel onto other realms—an ability whose unaccustomed use may have very well been the cause of its current predicament.
          It can only digest organic matter, however swallowing other things can still prove useful to the player—e.g. devouring rocks on a low-gravity planet may allow them to just not be blown away by the winds (and help them reach a tasty treat).
          <br /> <br />
          Of course, some things might just refuse to get eaten. But a little encouragement goes a long way. Usually, the things’ pieces are more cooperative.
        </AboutDesc>
      </About>
      <Contact>
        <Inner>
          <Title>Authors</Title>
          <ContactText>
            Michał Roźniakowski<br />
            Adam Dąbrowski<br />
            Maciej Olejnik<br />
            Michał Grzelak<br />
            Maciej Majchrowski<br />
            Krzysztof Pilcicki<br />
            Filip Florczyk
          </ContactText>
        </Inner>
        {/* <Footer>&copy; 2019 by Outlanders. </Footer> */}
      </Contact>
    </Parallax>
  </>
)

export default Index
