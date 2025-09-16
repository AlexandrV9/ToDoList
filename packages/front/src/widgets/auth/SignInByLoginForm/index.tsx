import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useTranslation } from "~/shared/hooks";

import {
  Button,
  Field,
  Input,
  Stack,
  Text,
  Link,
  Box,
  useForm,
} from "~/shared/ui";

const formSchema = z.object({
  login: z.string(),
  password: z
    .string()
    .min(6, "The password is short,  the minimum length of 8 symbols"),
});

type FormSchema = z.infer<typeof formSchema>;

export const SignInByLoginForm = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({ resolver: zodResolver(formSchema) });

  const submitHandler = handleSubmit((data) => console.log(data));

  return (
    <Box
      as="form"
      display="flex"
      flexDirection="column"
      gap="1rem"
      onSubmit={submitHandler}
    >
      <Text
        as="h1"
        textStyle="4xl"
        fontWeight="semibold"
        bg="linear-gradient(135deg, #7ea670ff 20%, #8307fe 40%, #07fe66ff 70%)"
        bgClip="text"
      >
        {t("pages.signIn.form.title")}
      </Text>

      <Field.Root invalid={!!errors.login}>
        <Field.Label color="fg">
          {t("pages.signIn.form.loginInput.label")}
        </Field.Label>
        <Input
          color="fg"
          truncate
          placeholder={t("pages.signIn.form.loginInput.placeholder")}
          {...register("login")}
        />
        <Field.ErrorText color="fg.error">
          {errors.login?.message}
        </Field.ErrorText>
      </Field.Root>

      <Field.Root invalid={!!errors.password}>
        <Field.Label color="fg">
          {t("pages.signIn.form.passwordInput.label")}
        </Field.Label>
        <Input.Password
          color="fg"
          truncate
          placeholder={t("pages.signIn.form.passwordInput.placeholder")}
          paddingRight="52px !important" // TODO: убрать это и сделать иначе
          {...register("password")}
        />
        <Field.ErrorText color="fg.error">
          {errors.password?.message}
        </Field.ErrorText>
      </Field.Root>

      <Button type="submit">{t("pages.signIn.form.submitButton")}</Button>

      <Stack.HStack justify="center">
        <Text fontWeight="medium" color="fg">
          <span>{t("pages.signIn.form.subtitleText")}</span>{" "}
          <Text asChild color="purple.500" fontWeight="600">
            <Link to="/signup">{t("pages.signIn.form.linkText")}</Link>
          </Text>
        </Text>
      </Stack.HStack>
    </Box>
  );
};
