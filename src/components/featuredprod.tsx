import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Divider,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoSearchSharp,
  } from 'react-icons/io5';
  import { ReactElement } from 'react';
  import { FaCheck } from 'react-icons/fa'

  interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
  }
  
  const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export default function SplitWithImage() {
    return (
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                'https://d33wubrfki0l68.cloudfront.net/5e2f6e1782962c2638e7a994b07c052bb2304116/a3a9c/wp-content/uploads/2021/12/befunky-collage-768x629-1.jpg'
              }
              objectFit={'cover'}
            />
          </Flex>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'#866d5b'}
              fontWeight={600}
              fontSize={'sm'}
              bg={'#f0ece9'}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
               Why us?
            </Text>
            <Heading color={'#866d5b'}>Perfect for any occasion</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
            Our gift boxes are the perfect gift for <strong>any</strong> occasion. You can mix up the contents by contacting us with your requirements.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <Feature
                icon={
                  <Icon as={FaCheck} color={'#866d5b'} w={5} h={5} />
                }
                iconBg={'#f0ece9'}
                text={'Raksha Bandhan gifts'}
              />
              <Feature
                icon={<Icon as={FaCheck} color={'#866d5b'} w={5} h={5} />}
                iconBg={'#f0ece9'}
                text={'Diwali Gifts'}
              />
              <Feature
                icon={<Icon as={FaCheck} color={'#866d5b'} w={5} h={5} />}
                iconBg={'#f0ece9'}
                text={'Thank you gifts'}
              />
              <Feature
                icon={<Icon as={FaCheck} color={'#866d5b'} w={5} h={5} />}
                iconBg={'#f0ece9'}
                text={'Birthday gifts'}
              />
              <Feature
                icon={<Icon as={FaCheck} color={'#866d5b'} w={5} h={5} />}
                 iconBg={'#f0ece9'}
                text={'Teacher gifts and many more...'}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }