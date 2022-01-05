import 'styled-components';
import type { ResponsiveTheme } from '../ThemeProvider';

import { YourThemeType } from '../theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ResponsiveTheme, YourThemeType {}
}