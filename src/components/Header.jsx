import React from 'react'
import { Heading, Image, Text } from '@chakra-ui/react'
import logo from '../assets/light-bulb.svg'


const Header = () => {
  return (
    <>
        <Image src={logo} alt='logo' width={100} marginBottom='1rem' />
        <Heading color='white' marginBottom='1rem'>
            Ai Keyphrase Extractor
        </Heading>

        <Text fontSize={25} textAlign='center'>
            Paste your text below and click the button to extract keyphrases.
        </Text>
    </>
  )
}

export default Header