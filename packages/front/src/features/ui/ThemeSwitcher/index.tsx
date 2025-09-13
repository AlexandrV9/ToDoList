import { createListCollection, Portal, Select, Text } from "~/shared";

import { THEMES, useTheme, type Theme } from "~/shared/theme";
import { useCallback } from "react";

const themeListCollection = createListCollection({
  items: Object.keys(THEMES).map((item) => ({ label: item, value: item })),
});

export type ThemeSwitcherProps = {};

export const ThemeSwitcher = () => {
  const { theme, changeTheme } = useTheme();

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
      minWidth={100}
      width="fit-content"
    >
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger
          cursor="pointer"
          justifyContent="center"
          borderRadius={12}
          shadow="0 2px 8px rgba(0, 0, 0, 0.25)"
          border="1px solid border.emphasized"
        >
          <Select.ValueText color="fg" fontWeight="semibold">
            {theme}
          </Select.ValueText>
        </Select.Trigger>
      </Select.Control>

      <Portal>
        <Select.Positioner>
          <Select.Content>
            {themeListCollection.items.map(({ label, value: ln }) => (
              <Select.Item
                item={label}
                key={ln}
                color="fg"
                _hover={{ cursor: "pointer" }}
              >
                <Text fontWeight="medium">{label}</Text>
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};
