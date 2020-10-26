import {
  Text,
  FormLabel,
  Switch,
  Box,
  Flex,
  Link,
  Button
} from '@chakra-ui/core'

import { Container } from '../components/Container'

// could probably create an array of titles and map out components for each one
// instead of repeating so many Flex tags
const Index = () => {
  return(
    <Container>
      <Text>Hello</Text>
      <Box border="1px" pt="2%" pb="5%" pl="15%" pr="15%" textAlign="center">
        <Text fontSize="lg">Edit Communication Preferences</Text>
        <Text fontSize="sm">Tell us how you would like us to engage with you.</Text>
        <br></br>
        <Text textAlign="left">Email Notifications:</Text>
        <br></br>
        <Box>
          <Flex border="1px" p="2%" justifyContent="space-between" align="center">
            <FormLabel>Frequency of Billing Summaries</FormLabel>
            <Switch id="frequency-of-billing" defaultIsChecked={true}></Switch>
          </Flex>

        </Box>
        
        <Box border="1px" p="2%">Content Recommendations</Box>
        <Box border="1px" p="2%">Updates on your Favorite Shows</Box>
        <Box border="1px" p="2%">Advice on how to save on your service subscriptions</Box>
        <Box border="1px" p="2%">Bill reminders</Box>
        <Box border="1px" p="2%">Insights</Box>
        <Box border="1px" p="2%">Product Updates</Box>
        <Box border="1px" p="2%">Contests & Sweepstakes</Box>
        <Box border="1px" p="2%">Special Offers</Box>
        <Box border="1px" p="2%">Promostional Emails</Box>
        <br></br>

        <Link><a>Unsubscribe from all emails</a></Link>
        <Text fontSize="sm">Please note: You will still receive email confirmation for any purchases made and from billing receipts.</Text>
        <br></br>
        <Button border="1px" m="1%">Save</Button>
        <br></br>
        <Button border="1px" m="1%">Cancel</Button>
        
      </Box>
    </Container>
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
