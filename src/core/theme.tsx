const theme: {
  wrapper: {
    main: string;
  };
  font: {
    main: string;
  };
  color: {
    sky: string;
    gold: string;
    dark: string;
    darker: string;
    medium: string;
    light: string;
    lighter: string;
    error: string;
  };
  borderRadius: {
    main: string;
  };
  boxShadow: {
    main: string;
  };
  padding: {
    mobile: string;
  };
  breakpoint: {
    tablet: string;
    desktop: string;
  };
  easing: {
    inOutExpo: string;
  };
} = {
  wrapper: {
    main: "60rem",
  },
  font: {
    main: "'Lato', sans-serif",
  },
  color: {
    sky: "#0377C6",
    gold: "#F3B408",
    darker: "#1D201E",
    dark: "#26282B",
    medium: "#39373C",
    light: "#9696A4",
    lighter: "#DEDEDF",
    error: "#ff9a9a",
  },
  borderRadius: {
    main: "3px",
  },
  boxShadow: {
    main: "0 4px 8px 0 rgba(0,0,0,0.20)",
  },
  padding: {
    mobile: "1rem", // 16px, 100%
  },
  breakpoint: {
    tablet: "42rem", // 672px, 100%
    desktop: "82rem", // 1213px, 100%
  },
  easing: {
    inOutExpo: "cubic-bezier(0.40, 0.05, 0.05, 1)",
  },
};

export const tablet = `@media (min-width: ${theme.breakpoint.tablet})`;
export const desktop = `@media (min-width: ${theme.breakpoint.tablet})`;

export default theme;
