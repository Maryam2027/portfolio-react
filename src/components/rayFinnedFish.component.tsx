import {Flex, Typography} from 'antd';

const {Title, Paragraph} = Typography;

export const RayFinnedFishTextComponent = () => {
  return (
    <Flex style={{padding: 24, flexDirection: 'column', gap: 16}}>
      <Title level={2}>🎣 Introduction to Ray-finned Fish</Title>
      <Paragraph>
        Ray-finned fish belong to the subclass <b>Actinopterygii</b>. They are
        the most diverse type of bony fishes, with fins supported by thin,
        flexible bony rays.
      </Paragraph>

      <Title level={3}>🌍 Habitat</Title>
      <ul>
        <li>Found in almost all water bodies, freshwater & marine.</li>
      </ul>

      <Title level={3}>🎨 Characteristics</Title>
      <ul>
        <li>Fins supported by bony rays (spines).</li>
        <li>Swim bladder for buoyancy.</li>
        <li>Diverse shapes, sizes, and habitats.</li>
      </ul>

      <Title level={3}>🍽️ Diet</Title>
      <ul>
        <li>Herbivores: algae & plants.</li>
        <li>Carnivores: other fish & invertebrates.</li>
        <li>Omnivores: mix of both.</li>
      </ul>

      <Title level={3}>⚖️ Importance</Title>
      <ul>
        <li>Main group eaten by humans.</li>
        <li>Vital for commercial fishing industries.</li>
      </ul>

      <Title level={3}>✨ Fun Facts</Title>
      <ul>
        <li>Includes tuna, salmon, goldfish, trout.</li>
        <li>Make up half of all vertebrates on Earth.</li>
      </ul>
    </Flex>
  );
};
