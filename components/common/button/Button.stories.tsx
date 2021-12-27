import { Icon, Box } from '@chakra-ui/react';
import { Button } from '.';
import { ImLocation } from 'react-icons/im';

import type { ButtonType } from './types';

const ButtonStory = {
  title: 'Alecrim UI / Button',
  component: Button,
  decorator: (storyFn: any) => (
      <Box width="30px">
          {storyFn}
      </Box>
  )
  
};

export const Primary = (args: ButtonType) => <Button {...args} />;

Primary.args = {
  label: 'Nino Cucina',
  leftSlot: <Icon as={ImLocation} fontSize='sm' color="green.500" />,
  rightSlot: <Icon as={ImLocation} fontSize='sm' color="green.500" />,
}

export const withLeftSlot = (args: ButtonType) => <Button {...args} />;

withLeftSlot.args = {
  label: 'Nino Cucina',
  leftSlot: <Icon as={ImLocation} fontSize='sm' color="green.500" />,
}

export const withRightSlot = (args: ButtonType) => <Button {...args} />;

withRightSlot.args = {
  label: 'Nino Cucina',
  rightSlot: <Icon as={ImLocation} fontSize='sm' color="green.500" />,
}

export default ButtonStory;
