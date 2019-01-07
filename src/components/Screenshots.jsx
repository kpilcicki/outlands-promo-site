import React, { Component } from 'react'
import styled from 'styled-components'
import Lightbox from 'react-image-lightbox'
import tw from 'tailwind.macro'
import { Portal } from 'react-portal'

import Projects from '../views/Projects'
import ProjectCard from './ProjectCard'
import { Title } from '../elements/Titles'

import welcome from '../../static/welcome.png'

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

const imagesArray = [welcome, welcome, welcome, welcome]

export class Screenshots extends Component {
  state = {
    lightboxIsOpen: true,
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
          <ProjectCard img={welcome} onClick={this.openLightbox} />
          <ProjectCard img={welcome} onClick={this.openLightbox} />
          <ProjectCard img={welcome} onClick={this.openLightbox} />
          <ProjectCard img={welcome} onClick={this.openLightbox} />
        </ProjectsWrapper>
        {/* <Portal>
          <Lightbox
            currentImage={currentImage}
            images={imagesArray}
            isOpen={lightboxIsOpen}
            onClickNext={this.gotoNext}
            onClickPrev={this.gotoPrevious}
            onClose={this.closeLightbox}
          />
        </Portal> */}
      </Projects>
    )
  }
}

export default Screenshots