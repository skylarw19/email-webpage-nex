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

import {useState} from 'react'

export const ReportAProblem = (props) => {

    const [formData, setFormData] = useState({
        test: "blue",
        name: "",
        email: "",
        phoneNumber: "",
        message: ""
    })

    const updateField = async (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData.name)
        console.log(formData.email)
        console.log(formData.phoneNumber)
        console.log(formData.message)

        const apiResult = await fetch(`/api/report-a-problem`)
        const data = await apiResult.json();
        console.log(data)
    }
    
    return (
    
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
            <Button type="submit" bg="#5766F1" color="#ffffff" w="84px" type="submit">Submit</Button>
        </Box>
    </form>
        
    
  )
}