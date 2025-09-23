import React, {useState} from 'react';
import {Layout, Menu, theme} from 'antd';
import {FishTextComponent} from './fishText.component';
import {GoldFishTextComponent} from './goldFishText.component';
import {AccountDetailsTextComponent} from './accountDetailsText.component';

const {Content, Sider} = Layout;

const siderItems = [
  {
    key: 'account',
    label: 'Account',
  },
  {
    key: 'fish',
    label: 'Fish',
  },
  {
    key: 'goldFish',
    label: 'Gold Fish',
  },
];

const SidebarComponent: React.FC = () => {
  const {
    token: {borderRadiusLG},
  } = theme.useToken();

  const [selectedKey, setSelectedKey] = useState('account');

  const renderContent = () => {
    switch (selectedKey) {
      case 'account':
        return <AccountDetailsTextComponent />;
      case 'fish':
        return <FishTextComponent />;
      case 'goldFish':
        return <GoldFishTextComponent />;
      default:
        return <h2>Welcome! Please select a menu item.</h2>;
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
