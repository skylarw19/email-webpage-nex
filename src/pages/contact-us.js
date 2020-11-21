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
  } from '@chakra-ui/core'

const ContactUs = () => {
    return (  
    // <Flex direction="column" 
    //      alignItems="center"  
    //     justifyContent="flex-start" bg="#302F35" h="100vh">
    //   <Box border="1px" rounded="5px" mt="5%" mb="5%" ml="20%" mr="20%" pt="2%" pb="2%" pl="5%" pr="5%" textAlign="center" backgroundColor="rgba(216,216,216,0.1)" color="#bcbccc">
    //     <Text fontSize="lg" color="#ffffff" fontSize="150%">Contact Us</Text>
    //     <Text fontSize="75%">Send us a message!</Text>
    //     <Button m="1%" bg="#5766F1" color="#ffffff" w="84px">Submit</Button>
    //   </Box>

    // </Flex>
    <Box bg="#302F35" h="100vh">
        <Text textAlign="center" fontSize="lg" color="#ffffff" fontSize="150%">Contact Us</Text>
        <Box border="1px" rounded="5px" 
            // mt="5%" mb="5%"  
            // margin="auto"
            mx="20%"
            pt="2%" pb="2%" pl="5%" pr="5%" 
            textAlign="center"
            color="#bcbccc"
            >
            <form>
                <FormControl id="name" isRequired>
                    <FormLabel color="#FFFFFF">Name</FormLabel>
                    <Input border="1px" rounded="5px" 
                        // mt="5%" mb="5%"  
                        margin="auto"
                        pt="2%" pb="2%" pl="5%" pr="5%" 
                        backgroundColor="rgba(216,216,216,0.1)" color="#bcbccc">
                    
                    </Input>
                </FormControl>
                <br></br>
                
                <FormControl id="email" isRequired>
                    <FormLabel color="#FFFFFF">Email Address</FormLabel>
                    <Input border="1px" rounded="5px" 
                        // mt="5%" mb="5%"  
                        margin="auto"
                        pt="2%" pb="2%" pl="5%" pr="5%" 
                        backgroundColor="rgba(216,216,216,0.1)" color="#bcbccc">
                    
                    </Input>
                </FormControl>
                <br></br>

                <FormControl id="message" isRequired>
                    <FormLabel color="#FFFFFF">Message</FormLabel>
                    <Input border="1px" rounded="5px" 
                        // mt="5%" mb="5%"  
                        margin="auto"
                        pt="2%" pb="2%" pl="5%" pr="5%" 
                        backgroundColor="rgba(216,216,216,0.1)" color="#bcbccc">
                    </Input>
                </FormControl>
                <br></br>
                <Button margin="auto" bg="#5766F1" color="#ffffff" w="84px" type="submit">Submit</Button>
            </form>
        </Box>
    </Box>
    );
}
 
export default ContactUs;