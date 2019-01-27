import React, { Component } from 'react'
import styled from 'styled-components'
import YouTube from 'react-youtube'

import { Title } from '../elements/Titles'
import TrailerView from '../views/TrailerView';


const YtContainer = styled.div`
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;

  iframe {
    border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

export class Trailer extends Component {
  render() {
    return (
        <TrailerView>
          <Title>Trailer</Title>
          <YtContainer>
            <YouTube
              videoId="suBZ5MBOBUA"
            />
          </YtContainer>
        </TrailerView>
    )
  }
}

export default Trailer
