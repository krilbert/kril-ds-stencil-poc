import { Fragment } from 'react'
import { MyComponent } from '@kril-ds/react'

const HomePage = () => {
  return (
    <Fragment>
      <h1>Nextjs playground</h1>
      <MyComponent first="Alberto" last="Sánchez" />
    </Fragment>
  )
}

export default HomePage
