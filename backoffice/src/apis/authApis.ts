import { AuthenticatedUser } from "@/models/AuthenticatedUser";

const getInfo = async (): Promise<AuthenticatedUser> => {
  const response = await fetch("/authentication/user", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status === 200) {
    return await response.json();
  }
  return Promise.reject();
};

export { getInfo };
