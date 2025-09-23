import {Flex} from 'antd';
import SidebarComponent from './sidebar.component';
import {Header} from 'antd/es/layout/layout';

export const RootLayout = ({children}) => {
  return (
    <>
      <Header
        style={{
          width: '100%',
          position: 'absolute',
          zIndex: 1000,
          background: '#e2d0d0ff',
          color: '#000000',
        }}
      />

      <Flex style={{width: '100%'}}>
        <SidebarComponent />

        {children}
      </Flex>
    </>
  );
};
