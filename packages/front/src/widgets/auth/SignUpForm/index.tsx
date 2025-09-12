import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import {
  Box,
  Button,
  Field,
  Input,
  Link,
  Stack,
  Text,
  useForm,
  useTranslation,
} from "~/shared";

const formSchema = z.object({
  firstName: z.string(),
  login: z.string(),
  password: z
    .string()
    .min(6, "The password is short, the minimum length of 8 symbols"),
});

type FormSchema = z.infer<typeof formSchema>;

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({ resolver: zodResolver(formSchema) });

  const submitHandler = handleSubmit((data) => console.log(data));

  const { t } = useTranslation();

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
        {t("pages.signUp.form.title")}
      </Text>

      <Field.Root invalid={!!errors.login}>
        <Field.Label color="fg">
          {t("pages.signUp.form.firstName.label")}
        </Field.Label>
        <Input
          truncate
          color="fg"
          placeholder={t("pages.signIn.form.firstName.placeholder")}
          {...register("firstName")}
        />
        <Field.ErrorText color="fg.error">
          {errors.login?.message}
        </Field.ErrorText>
      </Field.Root>

      <Field.Root invalid={!!errors.login}>
        <Field.Label color="fg">
          {t("pages.signUp.form.loginInput.label")}
        </Field.Label>
        <Input
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
          {t("pages.signUp.form.passwordInput.label")}
        </Field.Label>
        <Input.Password
          color="fg"
          truncate
          paddingRight="52px !important" // TODO: убрать это и сделать иначе
          placeholder={t("pages.signUp.form.passwordInput.placeholder")}
          {...register("password")}
        />
        <Field.ErrorText color="fg.error">
          {errors.password?.message}
        </Field.ErrorText>
      </Field.Root>

      <Field.Root invalid={!!errors.password}>
        <Field.Label color="fg">
          {t("pages.signUp.form.repeatPasswordInput.label")}
        </Field.Label>
        <Input.Password
          color="fg"
          truncate
          paddingRight="52px !important" // TODO: убрать это и сделать иначе
          placeholder={t("pages.signUp.form.repeatPasswordInput.placeholder")}
          {...register("password")}
        />
        <Field.ErrorText color="fg.error">
          {errors.password?.message}
        </Field.ErrorText>
      </Field.Root>

      <Button type="submit">{t("pages.signUp.form.submitButton")}</Button>

      <Stack.HStack justify="center">
        <Text fontWeight="medium" color="fg">
          <span>{t("pages.signUp.form.subtitleText")}</span>{" "}
          <Text asChild color="purple.500" fontWeight="600">
            <Link to="/sign-in">{t("pages.signUp.form.linkText")}</Link>
          </Text>
        </Text>
      </Stack.HStack>
    </Box>
  );
};
