// ============================================================
// EINSATZREPORT.RBKRsk – EINSTELLUNGEN
// ============================================================
// HIER kannst du die beiden Redakteur-Zugänge ändern.
// Du musst dafür NICHT in Vercel Environment Variables gehen.
//
// WICHTIG: Diese Datei liegt im GitHub-Repository.
// Verwende deshalb keine Passwörter, die du auch woanders benutzt.
// ============================================================

export const ADMIN_USERS = [
  {
    name: "Redakteur 1",
    email: "redaktion1@einsatzreport.rbkrsk.de",
    password: "BITTE-HIER-PASSWORT-EINTRAGEN"
  },
  {
    name: "Redakteur 2",
    email: "redaktion2@einsatzreport.rbkrsk.de",
    password: "BITTE-HIER-PASSWORT-EINTRAGEN"
  }
];

// Diese Zeichenfolge für die Anmeldung ebenfalls ändern.
export const SESSION_SECRET =
  "BITTE-HIER-EINE-LANGE-ZUFÄLLIGE-ZEICHENFOLGE-EINTRAGEN";
