import {
    Text,
    FormLabel,
    Box,
    Button,
    Input,
    FormControl,
    Textarea
  } from '@chakra-ui/core'

const ContactUs = () => {
    return (  
    <Box bg="#302F35" h="100vh">
        <Text pt="10vh" textAlign="center" fontSize="lg" color="#ffffff" fontSize="150%">Contact Us</Text>
        <br></br>
        <Box border="1px" rounded="5px" mx="20%" py="2%" px="3%" color="#bcbccc">
            <form>
                <FormControl id="name" isRequired mb="3%">
                    <FormLabel color="#FFFFFF">Name</FormLabel>
                    <Input border="1px" rounded="5px" backgroundColor="rgba(216,216,216,0.1)" color="#bcbccc"></Input>
                </FormControl>
               

                <FormControl id="email" isRequired my="3%">
                    <FormLabel color="#FFFFFF">Email Address</FormLabel>
                    <Input border="1px" rounded="5px" backgroundColor="rgba(216,216,216,0.1)" color="#bcbccc"></Input>
                </FormControl>
                

                <FormControl id="message" isRequired>
                    <FormLabel color="#FFFFFF">Message</FormLabel>
                    <Textarea border="1px" rounded="5px" backgroundColor="rgba(216,216,216,0.1)" color="#bcbccc"></Textarea>
                </FormControl>
                
                <br></br>
                <Box textAlign="center">
                    <Button  bg="#5766F1" color="#ffffff" w="84px" type="submit">Submit</Button>
                </Box>
            </form>
        </Box>
    </Box>
    );
}
 
export default ContactUs;