import {Flex, Typography, Button} from 'antd';
import {useState} from 'react';
import {ExploreComponent} from './Explore.component';

const {Title, Paragraph} = Typography;

export const WelcomeScreenComponent = () => {
  const [click, setClicked] = useState(false);

  const handleExploreClick = () => {
    setClicked(true);
  };

  return (
    <>
      {!click && (
        <Flex
          vertical
          align='center'
          justify='center'
          style={{
            minHeight: '100vh',
            background: '#f0f8ff',
            textAlign: 'center',
            padding: 24,
          }}
        >
          <Title level={1}>🐟 Welcome to the Fish Encyclopedia</Title>
          <Paragraph style={{maxWidth: 600, fontSize: 16}}>
            Dive into the fascinating world of fishes — from sharks to rays to
            colorful coral reef dwellers. Explore their habitats,
            characteristics, diets, and fun facts!
          </Paragraph>

          <Flex
            wrap='wrap'
            gap={16}
            justify='center'
            style={{marginTop: 24, maxWidth: 800}}
          >
            <img
              src='https://i.ibb.co/d098MB03/4694899147-fcd4b69350-o.jpg'
              alt='Gold Fish'
              style={{
                width: 200,
                borderRadius: 12,
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              }}
            />
            <img
              src='https://i.ibb.co/dwtFXL2F/images.jpg'
              alt='Shark'
              style={{
                width: 200,
                borderRadius: 12,
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              }}
            />
            <img
              src='https://i.ibb.co/FCXTjSg/parrot-fish.webp'
              alt='Fish'
              style={{
                width: 200,
                borderRadius: 12,
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              }}
            />
          </Flex>

          <Button
            type='primary'
            size='large'
            style={{marginTop: 32, borderRadius: 8}}
            onClick={handleExploreClick}
          >
            Explore Now
          </Button>
        </Flex>
      )}
      {click && <ExploreComponent />}
    </>
  );
};
