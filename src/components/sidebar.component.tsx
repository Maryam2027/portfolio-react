import React, {useState} from 'react';
import {Layout, Menu, theme} from 'antd';
import {FishTextComponent} from './fishText.component';
import {GoldFishTextComponent} from './goldFishText.component';
import {CartilaginousFishTextComponent} from './cartilaginousFish.component';
import {JawlessFishTextComponent} from './jawlessFish.component';
import {BonyFishTextComponent} from './bonyFish.component';
import {RayFinnedFishTextComponent} from './rayFinnedFish.component';
import {LobeFinnedFishTextComponent} from './lobeFinnedFish.component';
import {WelcomeScreenComponent} from './welcome.component';

const {Content, Sider} = Layout;

const siderItems = [
  {
    key: 'fish',
    label: 'Fish',
  },
  {
    key: 'goldFish',
    label: 'Gold Fish',
  },
  {
    key: 'jawlessFish',
    label: 'Jawless Fishes',
  },
  {
    key: 'cartilaginousFish',
    label: 'Cartilaginous Fishes',
  },
  {
    key: 'bonyFish',
    label: 'Bony Fishes',
  },
  {
    key: 'rayFinnedFish',
    label: 'Ray-finned Fishes',
  },
  {
    key: 'lobeFinnedFish',
    label: 'Lobe-finned Fishes',
  },
];

const SidebarComponent: React.FC = () => {
  const {
    token: {borderRadiusLG},
  } = theme.useToken();

  const [selectedKey, setSelectedKey] = useState('account');

  const renderContent = () => {
    switch (selectedKey) {
      case 'fish':
        return <FishTextComponent />;
      case 'goldFish':
        return <GoldFishTextComponent />;
      case 'cartilaginousFish':
        return <CartilaginousFishTextComponent />;
      case 'jawlessFish':
        return <JawlessFishTextComponent />;
      case 'bonyFish':
        return <BonyFishTextComponent />;
      case 'rayFinnedFish':
        return <RayFinnedFishTextComponent />;
      case 'lobeFinnedFish':
        return <LobeFinnedFishTextComponent />;

      default:
        return <WelcomeScreenComponent />;
    }
  };

  return (
    <Layout>
      <Sider width={200} style={{marginTop: 80}}>
        <Menu
          mode='inline'
          selectedKeys={[selectedKey]}
          style={{height: '100%', borderInlineEnd: 0}}
          items={siderItems}
          onClick={(e) => setSelectedKey(e.key)} // update content when clicked
        />
      </Sider>

      <Content
        style={{
          padding: 24,
          minHeight: 80,
          borderRadius: borderRadiusLG,
          marginTop: 50,
        }}
      >
        {renderContent()}
      </Content>
    </Layout>
  );
};

export default SidebarComponent;
