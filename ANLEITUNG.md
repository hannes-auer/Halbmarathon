# Halbmarathon-App einrichten

Einmal ca. 15 Minuten, danach läuft alles von selbst.

## 1. Supabase (Online-Speicher für den Sync)

1. Auf https://supabase.com anmelden (geht mit deinem GitHub-Account) und **New project** anlegen.
   Name z. B. `halbmarathon`, Region **Frankfurt**, ein Datenbank-Passwort vergeben (brauchst du später nicht).
2. Links **SQL Editor** öffnen, **New query**, den Inhalt von `supabase.sql` einfügen und **Run** klicken.
3. Links **Authentication → Sign In / Providers → Email**: **Confirm email** ausschalten und speichern.
   (Sonst musst du nach dem Registrieren erst einen Link in der E-Mail bestätigen.)
4. **Project Settings → API**: die **Project URL** und den **anon public**-Schlüssel kopieren.

## 2. GitHub Pages (die Adresse der App)

1. Auf GitHub ein neues Repository `halbmarathon` anlegen, **Public**.
2. Auf **uploading an existing file** klicken und alle Dateien aus diesem Ordner hineinziehen (es gibt keine Unterordner). **Commit changes**.
3. Im Repository die Datei `config.js` öffnen, auf den Stift klicken und URL und Schlüssel aus Schritt 1.4 eintragen. **Commit changes**.
4. **Settings → Pages**: bei *Source* „Deploy from a branch“, Branch **main** und **/(root)** wählen, **Save**.
   Nach 1–2 Minuten ist die App erreichbar unter `https://DEIN-NAME.github.io/halbmarathon/`.

## 3. Installieren

- **iPhone:** Adresse in **Safari** öffnen → Teilen → **Add to Home Screen** → **Add**. Das Icon ist schon dabei.
  App vom Homescreen öffnen, auf **Anmelden für Sync** tippen und **Konto erstellen**.
- **Windows:** Adresse in **Chrome oder Edge** öffnen → in der Adressleiste auf **App installieren** klicken.
  Dann mit derselben E-Mail und demselben Passwort anmelden.

## Gut zu wissen

- Offline geht alles. Häkchen werden gespeichert und automatisch synchronisiert, sobald du wieder Netz hast.
- Kostenlose Supabase-Projekte pausieren nach etwa einer Woche ohne Nutzung. Dann im Supabase-Dashboard auf **Restore** klicken. Die App läuft in der Zwischenzeit offline weiter.
- Der Schlüssel in `config.js` darf öffentlich sein. Die Datenbank-Regeln sorgen dafür, dass nur du deine Daten lesen und ändern kannst.
- Update der App: geänderte Dateien auf GitHub ersetzen und in `sw.js` die `VERSION` hochzählen.
