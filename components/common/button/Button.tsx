import { Box, Text } from  '@chakra-ui/react';

import type { ButtonType } from './types';

export default function Button({ leftSlot, rightSlot, label }: ButtonType) {
    return (
        <Box flexDirection="row" display="flex" justifyContent="space-between">
            {leftSlot && leftSlot}
            <Box marginLeft="md">
                <Text>{label}</Text>
            </Box>
            {rightSlot && rightSlot}
        </Box>
    )
}