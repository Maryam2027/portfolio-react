import React from 'react';
import {Flex, Layout} from 'antd';

const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
};

const HeaderComponent: React.FC = () => (
  <Flex gap='middle' wrap>
    <Layout style={layoutStyle} />
  </Flex>
);

export default HeaderComponent;
