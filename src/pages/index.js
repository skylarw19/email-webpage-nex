import {
  Text,
  FormLabel,
  Switch,
  Box,
  Flex,
  Link,
  Button,
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Image,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/core'

import { ReportAProblem } from '../components/ReportAProblem'
import {useState} from 'react'

// update ID for each Switch
// change width of whole thing once on real 'MyAccount' webpage
// purple nexus color not showing for Switch or Button colors? #5766F1 - need to make custom theme? but red.500 doesn't work either? 
// tried changing switch colors with prop color, colorScheme, backgroundColor, background, css={{}}
// transparentGrey is rgba(216,216,216,0.1)
// change fontColor to color="#ffffff"

const notifications = [
  'Content Recommendations',
  'Updates on your Favorite Shows',
  'Advice on How to Save on your Service Subscriptions',
  'Bill Reminders',
  'Insights',
  'Product Updates',
  'Contests & Sweepstakes',
  'Special Offers',
  'Promotional Emails'
]


const Index = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure()

  const [formIsOpen, setFormIsOpen] = useState(false)
  const openForm = () => setFormIsOpen(true)
  const closeForm = () => setFormIsOpen(false)

  return(
    <Flex direction="column" alignItems="center" justifyContent="flex-start" bg="#302F35">
      <Box border="1px" rounded="5px" my="5%" mx="20%" py="2%" px="5%" textAlign="center" backgroundColor="rgba(216,216,216,0.1)" color="#bcbccc">
        <Text fontSize="lg" color="#ffffff" fontSize="150%">Edit Communication Preferences</Text>
        <Text fontSize="75%" >Tell us how you would like us to engage with you.</Text>
        <br></br>
        <Text ml="-5%" textAlign="left" color="#ffffff">Email Notifications:</Text>
        <br></br>
        <Box border="1px">
          <Flex border="1px" p="1%" justifyContent="space-between" align="center">
            <FormLabel color="#FCFCFC" fontSize="sm">Frequency of Billing Summaries</FormLabel>
            <Select size="sm" w="wrap" variant="unstyled" placeholder="monthly">
              <option value="quarterly">bi-monthly</option>
              <option value="quarterly">quarterly</option>
              <option value="annually">annually</option>
            </Select>
          </Flex>
          
          {notifications.map(notification => (
            <Flex key={notification} border="1px" p="1%" justifyContent="space-between" align="center">
              <FormLabel color="#FCFCFC" fontSize="sm">{notification}</FormLabel>
              <Switch id={notification} defaultIsChecked={true} 
                css={{
                  '.chakra-switch__track': {
                    backgroundColor: "#5766F1",
                  },
                }}
                //tried color, colorScheme, backgroundColor, background
                ></Switch>
            </Flex>
          ))}
        </Box>
        <br></br>
        <Link color="#5766F1"><a>Unsubscribe from all emails</a></Link>
        <Text fontSize="75%">Please note: You will still receive email confirmation for any purchases made and from billing receipts.</Text>
        <br></br>
        <Button m="1%" bg="#5766F1" color="#ffffff" w="84px">Save</Button>
        <br></br>
        <Button m="1%" bg="#5766F1" color="#ffffff">Cancel</Button>
      </Box>

{/* 
      <Button onClick={onOpen} variant="link" color="#5766F1" mb="2%">Report a Problem</Button>
      <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={false} size="xl">
        <ModalOverlay />
        <ModalContent bg="#302F35" border="1px" rounded="5px" color="#bcbccc" py="1%" px="1%" >
          <Box boxSize="sm">
            <Image src="https://i.imgur.com/Un5VNLk.png" alt="Nexus Logo" h="4.5vh"/>
          </Box>
          <ModalHeader  textAlign="center" color="#ffffff" fontSize="150%" >Report a Problem</ModalHeader>
          <ModalCloseButton color="#5766F1" />
          <ModalBody>
            <ReportAProblem></ReportAProblem>
          </ModalBody>
        </ModalContent>
      </Modal> */}
      
      <Button onClick={openForm} variant="link" color="#5766F1" mb="2%">Report a Problem</Button>
      <Modal isOpen={formIsOpen} onClose={closeForm} blockScrollOnMount={false} size="xl">
        <ModalOverlay />
        <ModalContent bg="#302F35" border="1px" rounded="5px" color="#bcbccc" py="1%" px="1%" >
          <Box boxSize="sm">
            <Image src="https://i.imgur.com/Un5VNLk.png" alt="Nexus Logo" h="4.5vh"/>
          </Box>
          <ModalHeader  textAlign="center" color="#ffffff" fontSize="150%" >Report a Problem</ModalHeader>
          <ModalCloseButton color="#5766F1" />
          <ModalBody>
            <ReportAProblem closeForm={closeForm}></ReportAProblem>
          </ModalBody>
        </ModalContent>
      </Modal>

    </Flex>
  )
}
 
export default Index;

// import {
//   Link as ChakraLink,
//   Text,
//   Code,
//   Icon,
//   List,
//   ListIcon,
//   ListItem,
// } from '@chakra-ui/core'

// import { Hero } from '../components/Hero'
// import { Container } from '../components/Container'
// import { Main } from '../components/Main'
// import { DarkModeSwitch } from '../components/DarkModeSwitch'
// import { CTA } from '../components/CTA'
// import { Footer } from '../components/Footer'

// const Index = () => (
//   <Container>
//     <Hero />
//     <Main>
//       <Text>
//         Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code>.
//       </Text>

//       <List spacing={3} my={0}>
//         <ListItem>
//           <ListIcon icon="check-circle" color="green.500" />
//           <ChakraLink
//             isExternal
//             href="https://chakra-ui.com"
//             flexGrow={1}
//             mr={2}
//           >
//             Chakra UI <Icon name="external-link" mx="2px" />
//           </ChakraLink>
//         </ListItem>
//         <ListItem>
//           <ListIcon icon="check-circle" color="green.500" />
//           <ChakraLink isExternal href="https://nextjs.org" flexGrow={1} mr={2}>
//             Next.js <Icon name="external-link" mx="2px" />
//           </ChakraLink>
//         </ListItem>
//       </List>
//     </Main>

//     <DarkModeSwitch />
//     <Footer>
//       <Text>Next ❤️ Chakra</Text>
//     </Footer>
//     <CTA />
//   </Container>
// )

// export default Index
