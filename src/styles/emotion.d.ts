import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      // gray
      gray900: string;
      gray800: string;
      gray600: string;
      gray500: string;
      gray450: string;
      gray400: string;
      gray300: string;
      gray200: string;
      gray100: string;

      // green
      green700: string;
      green600: string;

      // red
      red700: string;
    };
  }
}
