# Einsatzreport.rbkrsk – Vercel-Version

## Redakteur-E-Mails und Passwörter

Die beiden Logins kannst du jetzt direkt in dieser Datei ändern:

`lib/config.js`

Dort stehen:

- `ADMIN_USERS[0]` = erster Redakteur
- `ADMIN_USERS[1]` = zweiter Redakteur
- `SESSION_SECRET` = geheimer Sitzungsschlüssel

Beispiel:

```js
{
  name: "Max",
  email: "max@einsatzreport.rbkrsk.de",
  password: "MeinPasswort123!"
}
```

Nach einer Änderung an `lib/config.js` einfach die Änderung zu GitHub pushen. Vercel baut das Projekt danach automatisch neu.

## Vercel Blob

Für Bilder und Website-Inhalte wird Vercel Blob verwendet. Im Vercel-Projekt muss ein Blob Store verbunden sein. Der notwendige `BLOB_READ_WRITE_TOKEN` wird von Vercel bereitgestellt.

## Anmeldung

Die Redaktion erreichst du unter:

`/login`

Die Website startet ohne Beispielberichte.
