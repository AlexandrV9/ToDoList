import { createListCollection, Portal, Select, Text } from "~/shared";

import styles from "./ThemeSwitcher.module.css";
import { THEMES, useTheme, type Theme } from "~/shared/theme";
import { useCallback } from "react";

const themeListCollection = createListCollection({
  items: Object.keys(THEMES).map((item) => ({ label: item, value: item })),
});

export type ThemeSwitcherProps = {};

export const ThemeSwitcher = () => {
  const { theme, changeTheme } = useTheme();

  const currentTheme = themeListCollection.items[0].value;

  const handleChangeTheme = useCallback(
    (theme: Theme) => {
      changeTheme(theme);
    },
    [changeTheme]
  );

  return (
    <Select.Root
      value={[theme]}
      collection={themeListCollection}
      onValueChange={(e) => handleChangeTheme(e.value[0] as Theme)}
      minWidth="80px"
      width="max-content"
    >
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger
          cursor="pointer"
          borderRadius="10px"
          justifyContent="center"
          backgroundColor="rgb(255, 255, 255)"
        >
          <Select.ValueText color="rgb(0, 0, 0)" fontWeight="semibold">
            {currentTheme}
          </Select.ValueText>
        </Select.Trigger>
      </Select.Control>

      <Portal>
        <Select.Positioner>
          <Select.Content className={styles.content}>
            {themeListCollection.items.map(({ label, value: ln }) => (
              <Select.Item item={label} key={ln} className={styles.item}>
                <Text fontWeight="medium">{label}</Text>
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};
