import { RouterProvider } from 'react-router';

import { MuiThemeWrapper } from './components/MuiThemeWrapper';
import { ThemeProvider } from './components/ThemeContext';
import { router } from './routes';

export default function App() {
  return (
    <ThemeProvider>
      <MuiThemeWrapper>
        <RouterProvider router={router} />
      </MuiThemeWrapper>
    </ThemeProvider>
  );
}
