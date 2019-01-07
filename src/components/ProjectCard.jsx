import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Wrapper = styled.a`
  width: 100%;
  ${tw`shadow-lg relative no-underline rounded-lg text-white`};
  background: ${props => props.bg};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
  }
`

const Text = styled.div`
  ${tw`opacity-75 font-sans text-sm md:text-base`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`

const Title = styled.div`
  ${tw`text-white uppercase text-2xl md:text-3xl xl:text-4xl tracking-wide font-sans pt-8`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`

const Image = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${props => props.src});
  background-size: cover;
`

const ProjectCard = ({ img, onClick }) => (
  <Wrapper onClick={onClick}>
    <Image src={img} alt="" />
  </Wrapper>
)

export default ProjectCard

ProjectCard.propTypes = {
  img: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}
