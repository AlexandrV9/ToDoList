import {
  createSystem,
  defaultConfig,
  defineConfig,
  type ThemingConfig,
} from "@chakra-ui/react";

const theme: ThemingConfig = {
  ...defaultConfig,
  semanticTokens: {
    ...defaultConfig.theme?.tokens,
    colors: {
      ...defaultConfig.theme?.tokens?.colors,
      bgTest: { value: "var(--color-bg-primary)" },
      textPrimary: { value: "var(--color-text-primary)" },
      accentTest: { value: "var(--color-accent)" },
    },
  },
};

const config = defineConfig({
  cssVarsRoot: ":where(html)",
  theme,
});

export const chakraConfig = createSystem(defaultConfig, config);

export default chakraConfig;
