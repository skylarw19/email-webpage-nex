import {
    Text,
    FormLabel,
    FormHelperText,
    Box,
    Button,
    Input,
    FormControl,
    Textarea,
    Flex,
  } from '@chakra-ui/core'

export const ReportAProblem = (props) => {
  return (
    
    <form method="post" enctype="text/plain" action="mailto:li.q.wong@gmail.com" >
        <FormControl id="name" isRequired mb="3%">
            <FormLabel color="#FFFFFF">Name</FormLabel>
            <Input type="name" border="1px" rounded="5px" backgroundColor="rgba(216,216,216,0.1)" color="#bcbccc"></Input>
        </FormControl>

        <FormControl id="email" isRequired my="3%">
            <FormLabel color="#FFFFFF">Email Address</FormLabel>
            <Input type="email" border="1px" rounded="5px" backgroundColor="rgba(216,216,216,0.1)" color="#bcbccc"></Input>
        </FormControl>
        
        <FormControl id="phone-number" my="3%">
            <Flex alignItems="center">
                <FormLabel color="#FFFFFF">Phone Number</FormLabel>
                <Text fontSize="75%">(Optional)</Text>
            </Flex>
            <Input type="phone" border="1px" rounded="5px" backgroundColor="rgba(216,216,216,0.1)" color="#bcbccc"></Input>
        </FormControl>
        
        <FormControl id="message" isRequired>
            <FormLabel color="#FFFFFF">Message</FormLabel>
            <Textarea height="30vh" resize="vertical" border="1px" rounded="5px" backgroundColor="rgba(216,216,216,0.1)" color="#bcbccc" placeholder="Description of Problem"></Textarea>
        </FormControl>

            <Button type="submit" bg="#5766F1" color="#ffffff" w="84px" type="submit">Submit</Button>
        <br></br>
        <Box textAlign="center">
        </Box>
    </form>
        
    
  )
}