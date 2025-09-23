import {Flex, Typography} from 'antd';

const {Title, Paragraph} = Typography;

export const FishTextComponent = () => {
  return (
    <Flex style={{padding: 24, flexDirection: 'column', gap: 16}}>
      <Title level={2}>🐟 Introduction to Fish</Title>
      <Paragraph>
        Fish are aquatic, gill-bearing animals that lack limbs with digits. They
        are the most diverse group of vertebrates, with more than{' '}
        <b>34,000 recognized species</b> found in oceans, rivers, lakes, and
        streams worldwide. Fish play vital roles in ecosystems, human culture,
        and food supply.
      </Paragraph>

      <Title level={3}>🌍 Habitat</Title>
      <Paragraph>
        Fish live in almost every aquatic environment, from shallow ponds to the
        deepest parts of the ocean. Their habitats include:
      </Paragraph>
      <ul>
        <li>
          <b>Freshwater:</b> Rivers, lakes, streams, ponds.
        </li>
        <li>
          <b>Saltwater:</b> Oceans, seas, coral reefs.
        </li>
        <li>
          <b>Brackish water:</b> Estuaries where freshwater and saltwater mix.
        </li>
      </ul>

      <Title level={3}>🎨 Diversity</Title>
      <Paragraph>
        Fish come in many sizes, shapes, and colors. They are usually divided
        into three main groups:
      </Paragraph>
      <ul>
        <li>
          <b>Jawless fish:</b> Primitive fish like lampreys and hagfish.
        </li>
        <li>
          <b>Cartilaginous fish:</b> Sharks, rays, and skates, which have
          skeletons made of cartilage.
        </li>
        <li>
          <b>Bony fish:</b> The largest group, including salmon, tuna, goldfish,
          and most species people are familiar with.
        </li>
      </ul>

      <Title level={3}>🍽️ Diet</Title>
      <Paragraph>Fish diets vary widely depending on the species:</Paragraph>
      <ul>
        <li>
          <b>Herbivores:</b> Eat plants and algae.
        </li>
        <li>
          <b>Carnivores:</b> Feed on other fish and aquatic animals.
        </li>
        <li>
          <b>Omnivores:</b> Consume both plants and animals.
        </li>
        <li>
          <b>Detritivores:</b> Feed on decomposing organic matter.
        </li>
      </ul>

      <Title level={3}>⚖️ Importance of Fish</Title>
      <Paragraph>Fish are important to both nature and humans:</Paragraph>
      <ul>
        <li>
          <b>Ecological role:</b> They maintain balance in aquatic food chains.
        </li>
        <li>
          <b>Human food source:</b> A major source of protein worldwide.
        </li>
        <li>
          <b>Economy:</b> Fishing industries support millions of jobs.
        </li>
        <li>
          <b>Culture:</b> Fish feature in art, religion, and mythology.
        </li>
      </ul>

      <Title level={3}>✨ Fun Facts</Title>
      <ul>
        <li>
          The smallest fish is less than 1 cm long, while the whale shark can
          reach 12 m.
        </li>
        <li>Some fish can change sex depending on environmental conditions.</li>
        <li>
          Clownfish form strong social hierarchies, with one dominant female.
        </li>
        <li>Some species can generate electricity, like the electric eel.</li>
      </ul>
    </Flex>
  );
};
