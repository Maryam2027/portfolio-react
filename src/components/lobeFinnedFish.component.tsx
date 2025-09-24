import {Flex, Typography} from 'antd';

const {Title, Paragraph} = Typography;

export const LobeFinnedFishTextComponent = () => {
  return (
    <Flex style={{padding: 24, flexDirection: 'column', gap: 16}}>
      <Title level={2}>🐡 Introduction to Lobe-finned Fish</Title>
      <Paragraph>
        Lobe-finned fish belong to the subclass <b>Sarcopterygii</b>. They have
        fleshy, lobed fins with bones inside, making them evolutionary
        precursors to land vertebrates.
      </Paragraph>

      <Title level={3}>🌍 Habitat</Title>
      <ul>
        <li>Coelacanths live in deep oceans.</li>
        <li>Lungfish inhabit freshwater rivers and lakes.</li>
      </ul>

      <Title level={3}>🎨 Characteristics</Title>
      <ul>
        <li>Fleshy, lobed fins with bones.</li>
        <li>Some species (lungfish) breathe air.</li>
        <li>Ancestors of amphibians and land vertebrates.</li>
      </ul>

      <Title level={3}>🍽️ Diet</Title>
      <ul>
        <li>Lungfish: plants, insects, small fish.</li>
        <li>Coelacanths: smaller fish, squid.</li>
      </ul>

      <Title level={3}>⚖️ Importance</Title>
      <ul>
        <li>Key to studying vertebrate evolution.</li>
        <li>Rare and scientifically significant species.</li>
      </ul>

      <Title level={3}>✨ Fun Facts</Title>
      <ul>
        <li>Coelacanth rediscovered in 1938 after thought extinct.</li>
        <li>Lungfish survive droughts by burrowing in mud.</li>
      </ul>
    </Flex>
  );
};
