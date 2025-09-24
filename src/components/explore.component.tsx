import {Typography} from 'antd';
import {useEffect, useState} from 'react';

const {Title, Paragraph} = Typography;

export const ExploreComponent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    setVisible(true);
  }, []);

  return (
    <div
      style={{
        marginTop: 40,
        textAlign: 'center',
      }}
    >
      <Title
        level={2}
        style={{
          color: '#0077b6',
          transition: 'opacity 1s ease, transform 1s ease',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
        }}
      >
        🌊 Exploring the Ocean of Fishes...
      </Title>

      <Paragraph
        style={{
          maxWidth: 600,
          margin: '20px auto',
          fontSize: 16,
          lineHeight: 1.6,
          color: '#023e8a',
          transition: 'opacity 1.5s ease, transform 1.5s ease',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
        }}
      >
        Discover thousands of fish species, from the tiniest neon tetras to the
        mighty sharks of the deep sea. Learn about their habitats, diets, and
        amazing adaptations that let them survive underwater.
      </Paragraph>

      <Paragraph
        style={{
          maxWidth: 600,
          margin: '10px auto',
          fontSize: 16,
          lineHeight: 1.6,
          color: '#0077b6',
          transition: 'opacity 2s ease, transform 2s ease',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
        }}
      >
        Dive into colorful coral reefs, explore mysterious deep oceans, and meet
        fascinating creatures that swim, glide, and float through the waters.
        Every fish has a story to tell!
      </Paragraph>

      <Paragraph
        style={{
          maxWidth: 600,
          margin: '10px auto',
          fontSize: 16,
          lineHeight: 1.6,
          color: '#0096c7',
          transition: 'opacity 2.5s ease, transform 2.5s ease',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
        }}
      >
        Are you ready to explore, learn, and be amazed by the incredible world
        of fishes? Let's dive in and start the adventure! 🐠🐟🦈
      </Paragraph>
    </div>
  );
};
