import React from 'react'
import { Spinner } from '@chakra-ui/react'
const Loder = () => {
  return (
    <div>
          <Spinner
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='blue.500'
              size='xl'
          />
          <h1>Please wait Loading........</h1>
    </div>
  )
}

export default Loder
