import {Flex} from 'antd';
import {Header} from 'antd/es/layout/layout';

export const HeaderComponent = () => {
  return (
    <>
      <Header
        style={{
          width: '100%',
          position: 'absolute',
          zIndex: 1000,
          margin: 0,
          background: '#e2d0d0ff',
          color: '#000000',
          display: 'flex',
          alignItems: 'center',
          padding: '0 24px',
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: 20,
            color: '#000000',
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
          }}
        >
          🐟🐟 Fish Encyclopedia🐟🐟
        </h1>
      </Header>
    </>
  );
};
