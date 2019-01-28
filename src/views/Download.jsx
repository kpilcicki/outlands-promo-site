import React from 'react'
import PropTypes from 'prop-types'
import { Divider } from '../elements/Dividers'
import Content from '../elements/Content'
import Inner from '../elements/Inner'
import { UpDown, UpDownWide } from '../styles/animations'
import { colors } from '../../tailwind'
import SVG from '../components/SVG'

const Download = ({ children }) => (
  <>
    <Content speed={0.4} offset={2.4}>
      <Inner>{children}</Inner>
    </Content>
  </>
)

export default Download

Download.propTypes = {
  children: PropTypes.node.isRequired,
}
