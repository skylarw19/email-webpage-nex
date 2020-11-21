import {
    Text,
    FormLabel,
    Switch,
    Box,
    Flex,
    Link,
    Button,
    Select,
    Input,
    FormControl,
    Textarea
  } from '@chakra-ui/core'

const ContactUs = () => {
    return (  
    <Box bg="#302F35" h="100vh">
        <Text textAlign="center" fontSize="lg" color="#ffffff" fontSize="150%">Contact Us</Text>
        <br></br>
        <Box border="1px" rounded="5px" 
            // mt="5%" mb="5%"  
            // margin="auto"
            mx="20%"
            py="2%"
            px="5%"
        
            // textAlign="center"
            color="#bcbccc"
            >
            <form>
                <FormControl id="name" isRequired>
                    <FormLabel color="#FFFFFF">Name</FormLabel>
                    <Input border="1px" rounded="5px" 
                        // mt="5%" mb="5%"  
                        // margin="auto"
                        // pt="2%" pb="2%" pl="5%" pr="5%" 
                        backgroundColor="rgba(216,216,216,0.1)" color="#bcbccc">
                    
                    </Input>
                </FormControl>
                <br></br>

                <FormControl id="email" isRequired>
                    <FormLabel color="#FFFFFF">Email Address</FormLabel>
                    <Input border="1px" rounded="5px" 
                        // mt="5%" mb="5%"  
                        // margin="auto"
                        // pt="2%" pb="2%" pl="5%" pr="5%" 
                        backgroundColor="rgba(216,216,216,0.1)" color="#bcbccc">
                    
                    </Input>
                </FormControl>
                <br></br>

                <FormControl id="message" isRequired>
                    <FormLabel color="#FFFFFF">Message</FormLabel>
                    <Textarea border="1px" rounded="5px" 
                        // mt="5%" mb="5%"  
                        // margin="auto"
                        // pt="2%" pb="2%" pl="5%" pr="5%" 
                        backgroundColor="rgba(216,216,216,0.1)" color="#bcbccc">
                    </Textarea>
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