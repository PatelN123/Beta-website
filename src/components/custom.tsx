import { Box, Heading, Text } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { Divider } from '@chakra-ui/react'

export default function Success() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <EditIcon boxSize={'50px'} color={'#866d5b'} />
      <Heading color={'#866d5b'} as="h2" size="xl" mt={6} mb={2}>
      Want to add a FREE personalised message?
      </Heading>
      <Text color={'gray.500'}>
      I love this team! They did fantastic work, many thanks for the perfect collaboration so far, very much appreciated!. You can leave your FREE personalised message on checkout. <br />
For more information, contact us.
      </Text>
    </Box>
  );
}