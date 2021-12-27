import type { CardType } from './types';

import { Box, Text, Image, Icon } from '@chakra-ui/react';
import { ImLocation } from 'react-icons/im';

export default function Card({ placeName }: CardType) {
    return (
        <Box maxW="230px" boxShadow='xl' p='6' rounded='md' bg='white' align="center">
            <Box>
                <Image
                    mt="2"
                    borderTopRightRadius="md"
                    borderTopLeftRadius="md"
                    objectFit="contain"
                    src="https://i1.wp.com/www.ninocucina.com.br/2017/wp-content/uploads/2017/11/03.jpg?resize=625%2C495"
                    alt={`${placeName} featured photo`}
                />
                <Box mt="3" textAlign="left" w="100%" flexDir="column">
                    <Text as="b" fontSize='l'>{placeName}</Text>
                    <Box display="flex" flexDir="row" alignItems="center" mt="2">
                        <Icon as={ImLocation} fontSize='sm' color="green.500" />
                        <Text pl="1" fontSize='sm'>Location xpto</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}