"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function submit(e) {
    e.preventDefault();
    setError("");

    const r = await fetch("/api/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    if (r.ok) {
      router.push("/admin");
    } else {
      setError("Benutzername oder Passwort ist falsch.");
    }
  }

  return (
    <form className="form" onSubmit={submit}>
      {error && <div className="notice">{error}</div>}

      <label>Benutzername</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <label>Passwort</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button className="btn">Anmelden</button>
    </form>
  );
}
