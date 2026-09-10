import crypto from "node:crypto";
import { cookies } from "next/headers";
import { ADMIN_USERS, SESSION_SECRET } from "./config";

const COOKIE = "einsatzreport_session";

function signature(value) {
  return crypto.createHmac("sha256", SESSION_SECRET).update(value).digest("hex");
}

export async function authenticate(username, password) {
  const user = ADMIN_USERS.find(
    (item) => item.username === username && item.password === password
  );

  if (!user) return false;

  const payload = Buffer.from(
    JSON.stringify({
      username: user.username,
      name: user.name,
      exp: Date.now() + 7 * 24 * 60 * 60 * 1000
    })
  ).toString("base64url");

  (await cookies()).set(
    COOKIE,
    `${payload}.${signature(payload)}`,
    {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 7 * 24 * 60 * 60
    }
  );

  return true;
}

export async function isAdmin() {
  const value = (await cookies()).get(COOKIE)?.value;
  if (!value) return false;

  const [payload, sig] = value.split(".");
  if (!payload || !sig) return false;

  const expected = signature(payload);
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);

  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) {
    return false;
  }

  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString());
    return data.exp > Date.now();
  } catch {
    return false;
  }
}

export async function signOut() {
  (await cookies()).delete(COOKIE);
}
