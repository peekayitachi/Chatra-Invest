
import { supabase } from "./supabaseClient";

export const signInOrSignUp = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    console.log("User not found, trying to sign up...");
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({ email, password });

    if (signUpError) {
      console.error("Signup failed:", signUpError);
      return null;
    }

    return signUpData; // ✅ Return user data after signup
  }

  return data; // ✅ Return user data after login
};
;
