import { useCallback, useMemo } from "react";

export const useAuth = () => {
  const signInByLogin = useCallback(() => {
    console.log("signInByLogin");
  }, []);

  const signUp = useCallback(() => {
    console.log("signUp");
  }, []);

  const signOut = useCallback(() => {
    console.log("signOut");
  }, []);

  const value = useMemo(
    () => ({
      signInByLogin,
      signUp,
      signOut,
    }),
    [signInByLogin, signUp, signOut]
  );

  return value;
};
