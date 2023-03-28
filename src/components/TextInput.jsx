import React from 'react'
import { useState } from 'react'
import { Textarea, Button, useToast } from '@chakra-ui/react'

const TextInput = ({extractKeyphrases}) => {
  const [text, setText] = useState('');
  const toast = useToast();

  const submitText = () => {
    if (text === '') {
      toast({
        title: "Text is empty",
        description: "Please enter some text to extract keyphrases",
        status: "error",
        duration: 5000,
        isClosable: false,
      });
    }else {
        extractKeyphrases(text);
      
    }
  };
  return (
    <>
      <Textarea bg='blue.400' color='white' padding={4} marginTop='6' height={200} value={text}
        onChange={(e) => setText(e.target.value)} />

      <Button
      bg='blue.500'
      color='white'
      width='100%'
      marginTop='4'
      _hover={{ bg: 'blue.700' }}
      onClick={(submitText)}
      >
        Extract Keyphrase
      </Button>
      
    </>
  )
}

export default TextInput