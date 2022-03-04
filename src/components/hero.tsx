import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
import { Center, Square, Circle } from '@chakra-ui/react'
  
  export default function SplitScreen() {
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                <center>
              <Text
                color={'#866d5b'}
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: '#f0ece9',
                  zIndex: -1,
                }}>
                Beautiful
              </Text>
              <br />{' '}
              <Text color={'#866d5b'} as={'span'}>
                Gift Boxes
              </Text>{' '}
              </center>
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            <center> 
                A beautiful gift delivered straight to your loved one’s door! The best part is it fits through the letterbox allowing this gift to be a total surprise with no waiting around for the postie! <br />
                Select the products page to get started. 
            </center> 
            </Text>
            <Center>
                <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                <Button
                    rounded={'full'}
                    bg={'#866d5b'}
                    color={'white'}
                    _hover={{
                    bg: '#9e8a7b',
                    }}>
                    Products
                </Button>
                </Stack>
            </Center>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
          />
        </Flex>
      </Stack>
    );
  }