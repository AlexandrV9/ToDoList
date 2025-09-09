import { zodResolver } from "@hookform/resolvers/zod";

import styles from "./SignUpPage.module.css";
import {
  Box,
  Button,
  Field,
  Input,
  Link,
  Stack,
  Text,
  useTranslation,
} from "~/shared";
import { useForm } from "react-hook-form";
import z from "zod";
import { LanguageSwitcher } from "~/features";

const formSchema = z.object({
  firstName: z.string(),
  login: z.string(),
  password: z
    .string()
    .min(6, "The password is short, the minimum length of 8 symbols"),
});

type FormSchema = z.infer<typeof formSchema>;

export function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({ resolver: zodResolver(formSchema) });

  const submitHandler = handleSubmit((data) => console.log(data));

  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Box className={styles.formWrapper}>
        <form onSubmit={submitHandler} className={styles.form}>
          <Text
            as="h1"
            textStyle="4xl"
            fontWeight="semibold"
            bg="linear-gradient(135deg, #7ea670ff 20%, #8307fe 40%, #07fe66ff 70%)"
            bgClip="text"
          >
            {t("pages.signUp.form.title")}
          </Text>

          <Field.Root invalid={!!errors.login}>
            <Field.Label className={styles.label}>
              {t("pages.signUp.form.firstName.label")}
            </Field.Label>
            <Input
              className={styles.textInput}
              placeholder={t("pages.signIn.form.firstName.placeholder")}
              {...register("firstName")}
            />
            <Field.ErrorText>{errors.login?.message}</Field.ErrorText>
          </Field.Root>

          <Field.Root invalid={!!errors.login}>
            <Field.Label className={styles.label}>
              {t("pages.signUp.form.loginInput.label")}
            </Field.Label>
            <Input
              className={styles.textInput}
              placeholder={t("pages.signIn.form.loginInput.placeholder")}
              {...register("login")}
            />
            <Field.ErrorText>{errors.login?.message}</Field.ErrorText>
          </Field.Root>

          <Field.Root invalid={!!errors.password}>
            <Field.Label className={styles.label}>
              {t("pages.signUp.form.passwordInput.label")}
            </Field.Label>
            <Input.Password
              className={styles.textInput}
              placeholder={t("pages.signUp.form.passwordInput.placeholder")}
              {...register("password")}
            />
            <Field.ErrorText className={styles.errorText}>
              {errors.password?.message}
            </Field.ErrorText>
          </Field.Root>

          <Field.Root invalid={!!errors.password}>
            <Field.Label className={styles.label}>
              {t("pages.signUp.form.repeatPasswordInput.label")}
            </Field.Label>
            <Input.Password
              className={styles.textInput}
              placeholder={t(
                "pages.signUp.form.repeatPasswordInput.placeholder"
              )}
              {...register("password")}
            />
            <Field.ErrorText className={styles.errorText}>
              {errors.password?.message}
            </Field.ErrorText>
          </Field.Root>

          <Button type="submit">{t("pages.signUp.form.submitButton")}</Button>

          <Stack.HStack justify="center">
            <Text fontWeight="medium" className={styles.text}>
              <span>{t("pages.signUp.form.subtitleText")}</span>{" "}
              <Link to="/sign-in" className={styles.link}>
                {t("pages.signUp.form.linkText")}
              </Link>
            </Text>
          </Stack.HStack>
        </form>
      </Box>
      <LanguageSwitcher />
    </div>
  );
}
