import { Card } from '.';

import type { CardType } from './types';

const CardStory = {
  title: 'Alecrim UI / Card',
  component: Card,
};

export const Primary = (args: CardType) => <Card {...args} />;

Primary.args = {
  placeName: 'Nino Cucina'
}

export default CardStory;
