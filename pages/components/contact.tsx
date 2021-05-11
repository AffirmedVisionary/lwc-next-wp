import {
    FormControl,
    Input,
    FormErrorMessage,
    Textarea,
    Button,
    Stack
} from '@chakra-ui/react'
import { useState } from 'react'

  
  const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)
  
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log('Sending')
      let data = {
        name,
        email,
        message,
      }
      fetch('/api/sendgrid', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((res) => {
        console.log('Response received')
        if (res.status === 200) {
          console.log('Response succeeded!')
          setSubmitted(true)
          setName('')
          setEmail('')
          setMessage('')
        }
      })
    }
  
    return (
      <>
      <Stack spacing={2}>
        <FormControl>
          <Input
            variant='flushed'
            placeholder='Full Name'
            focusBorderColor='#FFDE59'
            isRequired={true}
            value={name}
            id='name'
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
          <FormErrorMessage>Error message</FormErrorMessage>
        </FormControl>
  
        <FormControl>
          <Input
            variant='flushed'
            placeholder='Email Address'
            focusBorderColor='#FFDE59'
            isRequired={true}
            value={email}
            id='email'
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
          <FormErrorMessage>Error message</FormErrorMessage>
        </FormControl>
  
        <FormControl>
          <Textarea
            focusBorderColor='#FFDE59'
            isRequired={true}
            placeholder='Your Message'
            variant='flushed'
            value={message}
            onChange={(e) => {
              setMessage(e.target.value)
            }}
            id='message'
          />
          <FormErrorMessage>Error message</FormErrorMessage>
        </FormControl>
  
        <Button variant='outline' size='md' onClick={handleSubmit}>
          Submit
        </Button>
        </Stack>
        </>
    )
}
  
export default ContactForm