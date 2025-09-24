import {Flex, Typography} from 'antd';

const {Title, Paragraph} = Typography;

export const BonyFishTextComponent = () => {
  return (
    <Flex style={{padding: 24, flexDirection: 'column', gap: 16}}>
      <Title level={2}>🐠 Introduction to Bony Fish</Title>
      <Paragraph>
        Bony fish belong to the class <b>Osteichthyes</b>, the largest group of
        fish species. Their skeletons are made of bone, and they include most
        common fish known to humans.
      </Paragraph>

      <Title level={3}>🌍 Habitat</Title>
      <ul>
        <li>Freshwater: rivers, lakes, ponds.</li>
        <li>Saltwater: oceans, seas.</li>
      </ul>

      <Title level={3}>🎨 Characteristics</Title>
      <ul>
        <li>Skeleton of bone.</li>
        <li>Swim bladder for buoyancy.</li>
        <li>Covered with scales & operculum over gills.</li>
      </ul>

      <Title level={3}>🍽️ Diet</Title>
      <ul>
        <li>Herbivores: eat plants and algae.</li>
        <li>Carnivores: eat smaller fish.</li>
        <li>Omnivores: eat both plants & animals.</li>
      </ul>

      <Title level={3}>⚖️ Importance</Title>
      <ul>
        <li>Main source of fish for humans worldwide.</li>
        <li>Maintain aquatic food chain balance.</li>
      </ul>

      <Title level={3}>✨ Fun Facts</Title>
      <ul>
        <li>Over 95% of fish are bony fish.</li>
        <li>Includes goldfish, salmon, tuna, catfish.</li>
      </ul>
    </Flex>
  );
};
