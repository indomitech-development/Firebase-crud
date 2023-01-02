import React from 'react'
import {FormControl,FormLabel,Input,FormHelperText,FormErrorMessage,Button,Box} from '@chakra-ui/react'
export const Form = () => {
  const [input, setInput] = React.useState('')

  const handleInputChange = (e:any) => setInput(e.target.value)

  const isError = input === ''

  return (
    <>
   <Box  bg='white' w='500px' h="300px" m="auto" py="5">

    <FormControl isRequired>
  <FormLabel>First name</FormLabel>
  <Input placeholder='First name' w='400px' />
  <FormLabel>Last name</FormLabel>
  <Input placeholder='Last name' w='400px' />
  <FormLabel>Email</FormLabel>
      <Input type='email' value={input} onChange={handleInputChange} w='400px' />
      {!isError ? (
        <FormHelperText>
          Enter the email you'd like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
      <Input
 placeholder="Select File"
w="400px"
 type="File"
/>
</FormControl>
      <Button colorScheme='blue' mt='5' w="400px">Button</Button>

   </Box>
   </>
  )
}
