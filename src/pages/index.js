import {
  Text,
  FormLabel,
  Switch,
  Box,
  Flex,
  Link,
  Button,
  Select,
} from '@chakra-ui/core'

import { Container } from '../components/Container'

// update ID for each Switch
// change width of whole thing once on real 'MyAccount' webpage
// purple nexus color not showing for Switch or Button colors? #5B62CC - need to make custom theme?

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

  return(
    <Flex direction="column" alignItems="center" justifyContent="flex-start">
      <Box border="1px" w="75%" pt="2%" pb="5%" pl="10%" pr="10%" textAlign="center">
        <Text fontSize="lg">Edit Communication Preferences</Text>
        <Text fontSize="sm">Tell us how you would like us to engage with you.</Text>
        <br></br>
        <Text textAlign="left">Email Notifications:</Text>
        <br></br>
        <Box border="1px">
          <Flex border="1px" p="1%" justifyContent="space-between" align="center">
            <FormLabel fontSize="sm">Frequency of Billing Summaries</FormLabel>
            <Select size="sm" w="wrap" variant="unstyled" placeholder="bi-monthly">
              <option value="monthly">monthly</option>
              <option value="quarterly">quarterly</option>
              <option value="annually">annually</option>
            </Select>
          </Flex>

          {notifications.map(notification => (
            <Flex border="1px" p="1%" justifyContent="space-between" align="center">
              <FormLabel fontSize="sm">{notification}</FormLabel>
              <Switch id={notification} defaultIsChecked={true}></Switch>
            </Flex>
          ))}
        </Box>
        <br></br>
        <Link fontSize="lg"><a>Unsubscribe from all emails</a></Link>
        <Text fontSize="sm">Please note: You will still receive email confirmation for any purchases made and from billing receipts.</Text>
        <br></br>
        <Button border="1px" m="1%">Save</Button>
        <br></br>
        <Button border="1px" m="1%">Cancel</Button>
      </Box>
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
