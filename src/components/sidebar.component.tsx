import React from 'react';
import {Breadcrumb, Layout, Menu, theme} from 'antd';

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
    token: {colorBgContainer, borderRadiusLG},
  } = theme.useToken();

  return (
    <Layout>
      <Sider width={200} style={{background: colorBgContainer}}>
        <Menu
          mode='inline'
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{height: '100%', borderInlineEnd: 0}}
          items={siderItems}
        />
      </Sider>

      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        Content
      </Content>
    </Layout>
  );
};

export default SidebarComponent;
