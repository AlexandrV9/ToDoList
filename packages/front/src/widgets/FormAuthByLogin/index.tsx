import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

import {
  Button,
  Field,
  Input,
  Stack,
  Text,
  useForm,
  useTranslation,
  Link,
} from "~/shared";

import styles from "./FormAuthByLogin.module.css";

const formSchema = z.object({
  login: z.string(),
  password: z
    .string()
    .min(6, "The password is short, the minimum length of 8 symbols"),
});

type FormSchema = z.infer<typeof formSchema>;

export const FormAuthByLogin = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({ resolver: zodResolver(formSchema) });

  const submitHandler = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <Text
        as="h1"
        textStyle="4xl"
        fontWeight="semibold"
        bg="linear-gradient(135deg, #7ea670ff 20%, #8307fe 40%, #07fe66ff 70%)"
        bgClip="text"
      >
        {t("pages.signIn.form.title")}
      </Text>

      <Stack.HStack backgroundColor="accentTest">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, deserunt
        sunt. Numquam dolor mollitia eaque harum, expedita sint voluptatum nisi
        ipsam, asperiores ipsa dicta alias eum a consequatur? Beatae, eaque!
      </Stack.HStack>

      <Field.Root invalid={!!errors.login}>
        <Field.Label className={styles.label}>
          {t("pages.signIn.form.loginInput.label")}
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
          {t("pages.signIn.form.passwordInput.label")}
        </Field.Label>
        <Input.Password
          className={styles.textInput}
          placeholder={t("pages.signIn.form.passwordInput.placeholder")}
          {...register("password")}
        />
        <Field.ErrorText className={styles.errorText}>
          {errors.password?.message}
        </Field.ErrorText>
      </Field.Root>

      <Button type="submit">{t("pages.signIn.form.submitButton")}</Button>

      <Stack.HStack justify="center">
        <Text fontWeight="medium" className={styles.text}>
          <span>{t("pages.signIn.form.subtitleText")}</span>{" "}
          <Link to="/sign-up" className={styles.link}>
            {t("pages.signIn.form.linkText")}
          </Link>
        </Text>
      </Stack.HStack>
    </form>
  );
};
