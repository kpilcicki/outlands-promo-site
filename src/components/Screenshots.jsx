import React, { Component } from 'react'
import styled from 'styled-components'
import Lightbox from 'react-image-lightbox'
import tw from 'tailwind.macro'
import { Portal } from 'react-portal'
import { Image } from 'rebass';

import Projects from '../views/Projects'
import ProjectCard from './ProjectCard'
import { Title } from '../elements/Titles'

import welcome from '../../static/welcome.png'
import lordis from '../../static/lordis.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
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
  background-image: url(${props => props.src});
  width: 75%;
  height: 70%;
  background-size: cover;
`;

const imagesArray = [welcome, lordis, welcome, welcome]

export class Screenshots extends Component {
  state = {
    lightboxIsOpen: false,
    currentImage: 0,
  }

  openLightbox = index => {
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    })
  }

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }

  gotoPrevious = () => {
    this.setState(prevState => ({
      currentImage: prevState.currentImage - 1,
    }))
  }

  gotoNext = () => {
    this.setState(prevState => ({
      currentImage: prevState.currentImage + 1,
    }))
  }

  gotoImage = index => {
    this.setState({
      currentImage: index,
    })
  }

  handleClickImage = () => {
    const { currentImage } = this.state
    if (currentImage === imagesArray.length - 1) return

    this.gotoNext()
  }

  render() {
    const { lightboxIsOpen, currentImage } = this.state

    return (
      <Projects>
        <Title>Screenshots</Title>
        <ProjectsWrapper>
          <ProjectCard img={imagesArray[0]} onClick={() => this.openLightbox(0)} />
          <ProjectCard img={imagesArray[1]} onClick={() => this.openLightbox(1)} />
          <ProjectCard img={imagesArray[2]} onClick={() => this.openLightbox(2)} />
          <ProjectCard img={imagesArray[3]} onClick={() => this.openLightbox(3)} />
        </ProjectsWrapper>
        { lightboxIsOpen && 
          <Portal>
            <Modal onClick={this.closeLightbox}>
              <ModalImage src={imagesArray[currentImage]} />
            </Modal>
          </Portal>
        }
      </Projects>
    )
  }
}

export default Screenshots
