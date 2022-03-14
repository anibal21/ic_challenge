const customViewports = {
  DESKTOP: {
    name: "Desktop",
    styles: {
      width: "90rem",
      height: "56.25rem",
    },
  },
  MOBILE: {
    name: "Mobile",
    styles: {
      width: "23.438rem",
      height: "57.5rem",
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports, defaultViewport: "Desktop" },
};
