import { ComponentStory, ComponentMeta } from '@storybook/react'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './index'

export default {
  title: 'Header',
  component: Header,
} as ComponentMeta<typeof Header>

export const Default: ComponentStory<typeof Header> = () => (
  <Router>
    <Header />
  </Router>
)
