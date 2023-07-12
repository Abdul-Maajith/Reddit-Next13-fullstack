import type { Session, User } from "next-auth";
import type { JWT } from "next-auth/jwt";

type UserId = string;

// Declare Module - Giving / Extending type declaration and defination for third-party modules.
declare module "next-auth/jwt" {
  interface JWT {
    id: UserId;
    username?: string | null;
  }
}

declare module "next-auth" {
  interface Session {
    user: User & {
      id: UserId;
      username?: string | null;
    };
  }
}
