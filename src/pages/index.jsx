import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/addons.cjs'

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
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero>
        <BigTitle>Outlands</BigTitle>
        <Subtitle>
          A fast-paced and challenging top-down puzzle platformer based on eating things. And spitting them out.
        </Subtitle>
      </Hero>
      <Screenshots />
      <About>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="John Doe" />
          <AboutSub>
            The Game is about Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia, tellus non lobortis
            cursus, urna magna facilisis odio, eu scelerisque metus enim non dui.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          Pellentesque eget placerat libero. Morbi quis vestibulum neque, ac interdum ligula. Quisque condimentum
          aliquet blandit. Donec cursus mi et elit facilisis, sed tempor tellus ornare. Praesent ut tempus lorem. Donec
          suscipit vel neque vel lobortis. Maecenas venenatis consequat urna, ac consectetur purus placerat sit amet.
          Fusce suscipit tellus augue, ac lacinia urna mollis sit amet. Morbi lacinia erat et varius volutpat. Curabitur
          sed fermentum est. Suspendisse vel scelerisque metus. Pellentesque tristique enim non turpis fermentum, quis
          suscipit massa consequat.
          <br /> <br /> Praesent eu sapien accumsan, ullamcorper sapien vitae, egestas elit. Interdum et malesuada fames
          ac ante ipsum primis in faucibus. Ut nec elit cursus risus vestibulum varius venenatis rutrum orci. Donec ut
          erat posuere, fermentum mi et, laoreet felis. Proin pretium vulputate egestas. Duis orci nunc, tempus vitae
          metus vitae, mattis hendrerit libero. Donec at feugiat dolor. Aenean non odio non magna finibus rhoncus. Nam
          porttitor eros vel ligula faucibus iaculis. Sed mattis posuere velit, sed egestas libero tincidunt eget.
          Aenean tincidunt, ante eu fermentum rutrum, massa lorem fermentum lacus, interdum scelerisque augue eros eu
          nisl. Morbi vitae elit ante. Ut pellentesque, lectus ac facilisis bibendum, ex nulla viverra consectetur mi
          ante ac eros.
        </AboutDesc>
      </About>
      <Contact>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:plizNoSp4m@domain.tld">Hi</a> or find me on other platforms:{' '}
            <a href="https://wikamp.com/my">Wikamp</a> & <a href="https://www.facebook.com/my/">Facebook</a>
          </ContactText>
        </Inner>
        <Footer>&copy; 2019 by Outlanders. </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
