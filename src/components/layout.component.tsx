import {Flex} from 'antd';
import SidebarComponent from './sidebar.component';
import {HeaderComponent} from './header.component';

export const RootLayout = ({children}) => {
  return (
    <>
      <HeaderComponent />
      <Flex style={{width: '100%'}}>
        <SidebarComponent />

        {children}
      </Flex>
    </>
  );
};
