import { AuthService } from "@/stores/auth.service";

export const checkAuth = (v: { location: { href: string } }) => {
  if (AuthService.auth.state === "authenticated") {
    return;
  }

  // throw redirect({
  //   to: "/login",
  //   search: {
  //     redirect: v.location.href,
  //   },
  // });
};
