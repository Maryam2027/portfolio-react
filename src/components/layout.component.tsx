import {Flex} from 'antd';
import SidebarComponent from './sidebar.component';
import HeaderComponent from './header.component';

export const RootLayout = ({children}) => {
  return (
    <Flex style={{height: '100vh', width: '100%'}}>
      <HeaderComponent />
      <SidebarComponent />
      {children}
    </Flex>
  );
};
