import React, { Component } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Portal } from 'react-portal'
import { Player, ControlBar, BigPlayButton } from 'video-react'
import "video-react/dist/video-react.css"

import Projects from '../views/Projects'
import ProjectCard from './ProjectCard'
import { Title } from '../elements/Titles'

import welcome from '../../static/welcome.png'
import TrailerView from '../views/TrailerView';

const TrailerWrapper = styled.div`
  /* ${tw`flex flex-wrap justify-between mt-8`}; */
  width: 80%;
  height: 1000px;
`

const Modal = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalImage = styled.div`
  width: 100%;
  height: 700px;
  background-color: red;
`;

export class Trailer extends Component {
  render() {
    return (
        <TrailerView>
          <Title>Trailer</Title>
          {/* <ModalImage /> */}
          {/* <ProjectsWrapper>
            <ProjectCard img={welcome} onClick={this.openLightbox} />
            <ProjectCard img={welcome} onClick={this.openLightbox} />
            <ProjectCard img={welcome} onClick={this.openLightbox} />
            <ProjectCard img={welcome} onClick={this.openLightbox} />
          </ProjectsWrapper> */}
          {/* <TrailerWrapper> */}
          <Player
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            // fluid={false}
            // width="80%"
            // height="50vh"
          >
            <ControlBar disableCompletely />
            <BigPlayButton position="center" />
          </Player>
          {/* </TrailerWrapper> */}
        </TrailerView>
    )
  }
}

export default Trailer
