import {Flex, Typography} from 'antd';

const {Title, Paragraph} = Typography;

export const JawlessFishTextComponent = () => {
  return (
    <Flex style={{padding: 24, flexDirection: 'column', gap: 16}}>
      <Title level={2}>🐍 Introduction to Jawless Fish</Title>
      <Paragraph>
        Jawless fish are the most primitive vertebrates. They belong to the
        superclass <b>Agnatha</b> and lack jaws, paired fins, and true bones.
        Their skeletons are made of cartilage.
      </Paragraph>

      <Title level={3}>🌍 Habitat</Title>
      <ul>
        <li>
          <b>Marine:</b> Hagfish live mostly in deep seas.
        </li>
        <li>
          <b>Freshwater:</b> Lampreys are found in rivers and lakes.
        </li>
      </ul>

      <Title level={3}>🎨 Characteristics</Title>
      <ul>
        <li>No jaws, round sucking mouth.</li>
        <li>Skeleton made of cartilage.</li>
        <li>No paired fins, eel-like body.</li>
      </ul>

      <Title level={3}>🍽️ Diet</Title>
      <ul>
        <li>
          <b>Hagfish:</b> Feed on dead/decaying fish.
        </li>
        <li>
          <b>Lampreys:</b> Many are parasitic, sucking blood.
        </li>
      </ul>

      <Title level={3}>⚖️ Importance</Title>
      <ul>
        <li>Nutrient recyclers in aquatic systems.</li>
        <li>Help control fish populations.</li>
      </ul>

      <Title level={3}>✨ Fun Facts</Title>
      <ul>
        <li>Hagfish release slime as defense.</li>
        <li>They have existed for 360+ million years.</li>
      </ul>
    </Flex>
  );
};
