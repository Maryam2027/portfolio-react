import {Flex, Typography} from 'antd';

const {Title, Paragraph} = Typography;

export const CartilaginousFishTextComponent = () => {
  return (
    <Flex style={{padding: 24, flexDirection: 'column', gap: 16}}>
      <Title level={2}>🦈 Introduction to Cartilaginous Fish</Title>
      <Paragraph>
        Cartilaginous fish are a group of fishes whose skeletons are made of{' '}
        <b>cartilage instead of bone</b>. They belong to the class{' '}
        <b>Chondrichthyes</b> and include some of the most well-known predators
        of the ocean, such as sharks, rays, and skates.
      </Paragraph>

      <Title level={3}>🌍 Habitat</Title>
      <Paragraph>
        Cartilaginous fish are mostly found in saltwater environments, although
        some species can survive in brackish and freshwater habitats. They live
        in diverse areas such as:
      </Paragraph>
      <ul>
        <li>
          <b>Open oceans:</b> Sharks like the great white and hammerhead.
        </li>
        <li>
          <b>Coral reefs:</b> Reef sharks and stingrays.
        </li>
        <li>
          <b>Seafloor:</b> Skates and benthic rays.
        </li>
      </ul>

      <Title level={3}>🎨 Characteristics</Title>
      <Paragraph>
        Cartilaginous fish have unique features that make them different from
        bony fish:
      </Paragraph>
      <ul>
        <li>
          Their skeletons are made of <b>lightweight cartilage</b>.
        </li>
        <li>
          Skin is covered with <b>placoid scales</b>, giving a sandpaper-like
          texture.
        </li>
        <li>
          They lack a swim bladder, so many must keep swimming to avoid sinking.
        </li>
        <li>
          They have <b>sharp teeth</b> and powerful jaws for capturing prey.
        </li>
      </ul>

      <Title level={3}>🍽️ Diet</Title>
      <Paragraph>
        Most cartilaginous fish are carnivores and top predators in their
        ecosystems:
      </Paragraph>
      <ul>
        <li>
          <b>Sharks:</b> Feed on fish, seals, and other marine animals.
        </li>
        <li>
          <b>Rays and skates:</b> Often eat mollusks, crustaceans, and small
          fish.
        </li>
        <li>
          Some species are <b>filter feeders</b> (like whale sharks and manta
          rays), eating plankton.
        </li>
      </ul>

      <Title level={3}>⚖️ Importance of Cartilaginous Fish</Title>
      <Paragraph>
        These fish are vital for the health of marine ecosystems:
      </Paragraph>
      <ul>
        <li>
          <b>Ecological role:</b> As apex predators, sharks control populations
          of other species, maintaining balance.
        </li>
        <li>
          <b>Biodiversity:</b> Rays and skates contribute to ocean floor
          ecosystems.
        </li>
        <li>
          <b>Human impact:</b> They are important for marine tourism but are
          often threatened by overfishing and habitat loss.
        </li>
      </ul>

      <Title level={3}>✨ Fun Facts</Title>
      <ul>
        <li>Sharks can detect a drop of blood in water from miles away.</li>
        <li>Manta rays have the largest brain of any fish.</li>
        <li>
          Cartilaginous fish have special organs called{' '}
          <b>Ampullae of Lorenzini</b> to sense electric fields.
        </li>
        <li>
          The whale shark, the largest fish in the world, is a gentle filter
          feeder.
        </li>
      </ul>
    </Flex>
  );
};
