import { useCallback } from "react";

import {
  createListCollection,
  Portal,
  Select,
  Text,
  useTranslation,
} from "~/shared";

export const LANGUAGES = {
  en: "en",
  ru: "ru",
} as const;

const languageListCollection = createListCollection({
  items: Object.keys(LANGUAGES).map((item) => ({ label: item, value: item })),
});

export const LangSwitcher = () => {
  const { i18n, t } = useTranslation();

  const currentLn = i18n.language;

  const handleChangeLanguage = useCallback(
    (lng: string) => {
      i18n.changeLanguage(lng);
    },
    [i18n]
  );

  return (
    <Select.Root
      value={[currentLn]}
      collection={languageListCollection}
      onValueChange={(e) => handleChangeLanguage(e.value[0])}
      minWidth={120}
      width="fit-content"
    >
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger
          cursor="pointer"
          justifyContent="center"
          borderRadius={12}
          shadow="0 2px 8px rgba(0, 0, 0, 0.25)"
        >
          <Select.ValueText color="fg" fontWeight="semibold">
            {t(`languages.${currentLn}`)}
          </Select.ValueText>
        </Select.Trigger>
      </Select.Control>

      <Portal>
        <Select.Positioner>
          <Select.Content>
            {languageListCollection.items.map(({ label, value: ln }) => (
              <Select.Item
                item={label}
                key={ln}
                color="fg"
                _hover={{ cursor: "pointer" }}
              >
                <Text fontWeight="medium">{t(`languages.${ln}`)}</Text>
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};
