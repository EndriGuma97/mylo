# Dasma e Endrit & Kristjanës — 3 gusht 2026

Faqe ftese për dasmë, ndërtuar me HTML, CSS dhe JavaScript të pastër — pa framework, pa kosto hostimi.

## Si ta hapni

Hapni `index.html` në shfletues, ose nisni një server lokal:

```
npx serve .
```

## Çfarë duhet të plotësoni (kërkoni `[` në index.html)

1. **Adresa e Sallës së Mbretërisë** — te seksioni "Ceremonia", dhe linku i hartës (`mapBtn`).
2. **Të dhënat e Zoom-it** — ID, kodi dhe linku i mbledhjes.

## Fotot

Fotoja kryesore ndodhet te `assets/foto-kryesore.jpeg` dhe shfaqet nën hero
me kornizë harku. Për ta ndërruar, thjesht zëvendësoni skedarin me një foto
tjetër (mundësisht portret, p.sh. 960 × 1280).

## Forma RSVP (FormSubmit — falas, pa llogari)

Forma është e lidhur me `andrewgouma@gmail.com` përmes https://formsubmit.co
(endpoint-i AJAX). Përgjigjet vijnë me email në formë tabele.

**Aktivizimi (vetëm herën e parë):** kur dikush dërgon formularin e parë nga
një domain i ri, FormSubmit ju dërgon një email aktivizimi — klikoni linkun
brenda tij dhe që aty e tutje çdo RSVP ju vjen direkt në inbox.

- Për të ndërruar email-in: te `index.html`, ndryshoni adresën në
  `action="https://formsubmit.co/ajax/..."`.
- Për të fshehur email-in nga kodi i faqes: pas aktivizimit, FormSubmit ju jep
  një alias të rastësishëm (te emaili i aktivizimit) — zëvendësoni adresën me
  atë alias në action.

## Ftesa të personalizuara

Shtoni `?guest=Emri` në link dhe i ftuari sheh emrin e vet në krye.
Parametri `g` cakton gjininë e përshëndetjes:

| Linku | Përshëndetja |
|---|---|
| `?guest=Bledi&g=m` | I dashur Bledi, |
| `?guest=Arta&g=f` | E dashur Arta, |
| `?guest=Familja Hoxha` (pa `g`) | Të dashur Familja Hoxha, |

Shembull i plotë: `https://faqja-juaj.com/?guest=Bledi&g=m`

## Publikimi falas

- **Vercel**: `npm i -g vercel`, pastaj `vercel` në këtë dosje.
- **Netlify / GitHub Pages / Cloudflare Pages**: ngarkoni dosjen ashtu siç është.
