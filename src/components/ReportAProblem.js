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
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
  } from '@chakra-ui/core'

import {useState} from 'react'

export const ReportAProblem = (props) => {
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
    })
    
    const [alertIsOpen, setAlertIsOpen] = useState(false)
    const openAlert = () => setAlertIsOpen(true)
    const closeAlert = () => setAlertIsOpen(false)

    const updateField = async (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        props.closeForm();
        //openAlert
        // setAlertIsOpen(true)
        const apiResult = await fetch(`/api/report-a-problem`, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-type': 'application/json'
            }
        })
    }
    
    return (
        <>

    <form onSubmit={handleSubmit} >
        <FormControl id="name" isRequired mb="3%">
            <FormLabel color="#FFFFFF">Name</FormLabel>
            <Input name="name" type="name" onChange={updateField} border="1px" rounded="5px" backgroundColor="rgba(216,216,216,0.1)" color="#bcbccc"></Input>
        </FormControl>

        <FormControl id="email" isRequired my="3%">
            <FormLabel color="#FFFFFF">Email Address</FormLabel>
            <Input name="email" type="email" onChange={updateField} border="1px" rounded="5px" backgroundColor="rgba(216,216,216,0.1)" color="#bcbccc"></Input>
        </FormControl>
        
        <FormControl id="phoneNumber" my="3%">
            <Flex alignItems="center">
                <FormLabel color="#FFFFFF">Phone Number</FormLabel>
                <Text fontSize="75%">(Optional)</Text>
            </Flex>
            <Input name="phoneNumber" type="phone" onChange={updateField} border="1px" rounded="5px" backgroundColor="rgba(216,216,216,0.1)" color="#bcbccc"></Input>
        </FormControl>
        
        <FormControl id="message" isRequired>
            <FormLabel color="#FFFFFF">Message</FormLabel>
            <Textarea name="message" onChange={updateField} height="30vh" resize="vertical" border="1px" rounded="5px" backgroundColor="rgba(216,216,216,0.1)" color="#bcbccc" placeholder="Description of Problem"></Textarea>
        </FormControl>

        <br></br>
        <Box textAlign="center">
            <Button type="submit" bg="#5766F1" color="#ffffff" w="84px">Submit</Button>
        </Box>
    </form>

        {/* <AlertDialog
            isOpen={alertIsOpen}
            onClose={closeAlert}
        >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Delete Customer
                </AlertDialogHeader>
    
                <AlertDialogBody>
                  Are you sure? You can't undo this action afterwards.
                </AlertDialogBody>
    
                <AlertDialogFooter>
                  <Button onClick={closeAlert}>
                    Cancel
                  </Button>
                  <Button colorScheme="red" onClick={closeAlert} ml={3}>
                    Delete
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
    
        </AlertDialog> */}
    
    </>   
  )
}