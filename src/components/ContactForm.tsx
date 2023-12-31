import { Box, Button, Center, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react"


function ContactForm() {
  return (
    
      <Box width={"50%"}>
          <Center>
            <FormControl width={"65%"} textAlign={"center"}>
              <FormLabel mt={4}>Name</FormLabel>
              <Input type="name" name="name" placeholder="Your Name" />
              <FormLabel mt={4}>Email</FormLabel>
              <Input type="email" name="email" placeholder="Email" />
              <FormLabel mt={4}>Phone</FormLabel>
              <Input type="number" name="phone" placeholder="Phone" />
              <FormLabel mt={4}>Your Message</FormLabel>
              <Textarea placeholder="Please enter your message here" />

              <Button
                display={"block"}
                mt={4}
                colorScheme="yellow"
                type="submit"
              >
                Submit
              </Button>
            </FormControl>
          </Center>
        </Box>

  )
}

export default ContactForm
