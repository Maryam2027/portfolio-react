import {Flex, Typography} from 'antd';

const {Title, Paragraph} = Typography;

export const GoldFishTextComponent = () => {
  return (
    <Flex style={{padding: 24, flexDirection: 'column', gap: 16}}>
      <Title level={2}>🐠 All About Goldfish</Title>

      <Paragraph>
        Goldfish are one of the most well-known and popular freshwater aquarium
        fish in the world. They belong to the family <b>Cyprinidae</b> (the carp
        family) and have been domesticated for more than a <b>thousand years</b>
        . Originally bred in ancient China, goldfish were selectively developed
        for their color, shape, and size.
      </Paragraph>

      <Title level={3}>📜 Origins and History</Title>
      <Paragraph>
        The earliest goldfish were not gold at all; they were dull silver or
        gray carp. During the <b>Tang dynasty in China (618–907 AD)</b>, genetic
        mutations produced shades of red, orange, and yellow. Breeders began to
        selectively raise fish with brighter hues, and by the{' '}
        <b>Song dynasty (960–1279 AD)</b>, goldfish keeping had become a popular
        hobby.
      </Paragraph>

      <Title level={3}>🎨 Appearance and Varieties</Title>
      <Paragraph>
        Goldfish come in a wide range of colors, shapes, and fin types. While
        orange is most common, they can also be red, white, black, yellow, and
        calico.
      </Paragraph>

      <ul>
        <li>
          <b>Single-tailed (slim body):</b> Common Goldfish, Comet, Shubunkin.
        </li>
        <li>
          <b>Fancy Goldfish (round body):</b> Oranda, Fantail, Telescope,
          Ranchu, Ryukin.
        </li>
      </ul>

      <Title level={3}>🐟 Behavior and Personality</Title>
      <Paragraph>
        Goldfish are intelligent and can recognize their owners. They associate
        people with feeding time and can even be trained to swim through hoops
        or push floating balls. They are social creatures that thrive in groups.
      </Paragraph>

      <Title level={3}>🏡 Habitat and Care</Title>
      <Paragraph>
        Despite being sold in small bowls, goldfish actually need much larger
        environments to thrive:
      </Paragraph>

      <ul>
        <li>
          <b>Tank Size:</b> At least 20 gallons (75 L) per goldfish.
        </li>
        <li>
          <b>Filtration:</b> Strong filter is essential — they produce lots of
          waste.
        </li>
        <li>
          <b>Water:</b> Cool, oxygen-rich water (18–23°C / 65–74°F).
        </li>
        <li>
          <b>Diet:</b> Pellets, flakes, vegetables (peas, spinach), and
          occasional protein (bloodworms, brine shrimp).
        </li>
      </ul>

      <Title level={3}>⏳ Lifespan</Title>
      <Paragraph>
        With proper care, goldfish can live <b>10–15 years</b>. Some reach{' '}
        <b>20+ years</b>, and the record is an astonishing <b>43 years</b>.
      </Paragraph>

      <Title level={3}>🌏 Symbolism and Culture</Title>
      <ul>
        <li>
          <b>China:</b> Symbol of wealth and prosperity.
        </li>
        <li>
          <b>Japan:</b> Goldfish festivals and shows celebrate their beauty.
        </li>
        <li>
          <b>West:</b> Common first pet for children, often kept in bowls (not
          recommended).
        </li>
      </ul>

      <Title level={3}>✨ Fun Facts</Title>
      <ul>
        <li>Goldfish have memory that lasts for months, not seconds.</li>
        <li>They can see ultraviolet light, beyond human vision.</li>
        <li>
          They can switch metabolism in low oxygen water and survive by
          producing alcohol instead of lactic acid.
        </li>
        <li>Some goldfish in the wild grow to several pounds in weight.</li>
      </ul>
    </Flex>
  );
};
