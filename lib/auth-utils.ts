import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "./auth";

export const authSession = async () => {
  return auth.api.getSession({ headers: await headers() });
};

export const authIsRequired = async () => {
  const session = await authSession();

  if (!session) {
    redirect("/sign-in");
  }

  return session;
};

export const authIsNotRequired = async () => {
  const session = await authSession();

  if (session) {
    redirect("/");
  }
};
