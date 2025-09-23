import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {App, ConfigProvider} from 'antd';
import {RootLayout} from './components/layout.component';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider>
      <RootLayout>
        <App />
      </RootLayout>
    </ConfigProvider>
  </StrictMode>
);
