import { zodResolver } from "@hookform/resolvers/zod";

import styles from "./SignUpPage.module.css";
import { Box, Button, Field, Input, Link, Stack, Text } from "~/shared";
import { useForm } from "react-hook-form";
import z from "zod";

const formSchema = z.object({
  name: z.string(),
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

  return (
    <div className={styles.container}>
      <Box className={styles.formWrapper}>
        <form onSubmit={submitHandler} className={styles.form}>
          <Text textStyle="4xl" fontWeight="semibold" className={styles.title}>
            Registration
          </Text>

          <Field.Root invalid={!!errors.login}>
            <Field.Label className={styles.label}>Login</Field.Label>
            <Input
              className={styles.textInput}
              placeholder="Please enter your name"
              {...register("name")}
            />
            <Field.ErrorText>{errors.login?.message}</Field.ErrorText>
          </Field.Root>

          <Field.Root invalid={!!errors.login}>
            <Field.Label className={styles.label}>Login</Field.Label>
            <Input
              className={styles.textInput}
              placeholder="Please enter your login"
              {...register("login")}
            />
            <Field.ErrorText>{errors.login?.message}</Field.ErrorText>
          </Field.Root>

          <Field.Root invalid={!!errors.password}>
            <Field.Label className={styles.label}>Password</Field.Label>
            <Input.Password
              className={styles.textInput}
              placeholder="Please enter your password"
              {...register("password")}
            />
            <Field.ErrorText className={styles.errorText}>
              {errors.password?.message}
            </Field.ErrorText>
          </Field.Root>

          <Field.Root invalid={!!errors.password}>
            <Field.Label className={styles.label}>Repeat Password</Field.Label>
            <Input.Password
              className={styles.textInput}
              placeholder="Please repeat your password"
              {...register("password")}
            />
            <Field.ErrorText className={styles.errorText}>
              {errors.password?.message}
            </Field.ErrorText>
          </Field.Root>

          <Button type="submit">Enter</Button>

          <Stack.HStack justify="center">
            <Text fontWeight="medium" className={styles.text}>
              Don't you have an account?
            </Text>
            <Link to="/sign-up" className={styles.link}>
              Create
            </Link>
          </Stack.HStack>
        </form>
      </Box>
    </div>
  );
}
