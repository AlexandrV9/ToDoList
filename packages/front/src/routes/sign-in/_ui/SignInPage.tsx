import { Box, Flex } from "~/shared";
import { LangSwitcher, ThemeSwitcher } from "~/features";
import { FormAuthByLogin } from "~/widgets";

import styles from "./SignInPage.module.css";

export function SignInPage() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <Flex justifyContent="end">
          <ThemeSwitcher />
        </Flex>
        <Box className={styles.formWrapper}>
          <FormAuthByLogin />
        </Box>
        <Flex justify="center">
          <LangSwitcher />
        </Flex>
      </div>
    </div>
  );
}
