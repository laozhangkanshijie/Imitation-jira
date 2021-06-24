import { ReactNode } from "react";
import { AuthProvider } from "./auth-constext";

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
