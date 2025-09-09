import {
  createListCollection,
  Portal,
  Select,
  Text,
  useTranslation,
} from "~/shared";

const LANGUAGES = {
  en: "en",
  ru: "ru",
} as const;

import styles from "./LanguageSwitcher.module.css";
import { useCallback } from "react";

const languageListCollection = createListCollection({
  items: Object.keys(LANGUAGES).map((item) => ({ label: item, value: item })),
});

export const LanguageSwitcher = () => {
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
      minWidth="120px"
      width="max-content"
    >
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger
          cursor="pointer"
          borderRadius="2xl"
          justifyContent="center"
        >
          <Select.ValueText>{t(`languages.${currentLn}`)}</Select.ValueText>
        </Select.Trigger>
      </Select.Control>

      <Portal>
        <Select.Positioner>
          <Select.Content className={styles.content}>
            {languageListCollection.items.map(({ label, value: ln }) => (
              <Select.Item item={label} key={ln} className={styles.item}>
                <Text fontWeight="medium">{t(`languages.${ln}`)}</Text>
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};
