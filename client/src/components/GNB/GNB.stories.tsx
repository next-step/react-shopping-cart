// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'

import GNB from './index'

storiesOf('GNB', module).add('default', () => (
  <MemoryRouter>
    <GNB />
  </MemoryRouter>
))
