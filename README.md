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

## Forma RSVP (Formspree — falas)

1. Regjistrohuni falas në https://formspree.io (50 përgjigje/muaj falas).
2. Krijoni një formë të re — do të merrni një ID, p.sh. `xabcdefg`.
3. Te `index.html`, zëvendësoni `YOUR_FORM_ID` në rreshtin:
   `action="https://formspree.io/f/YOUR_FORM_ID"`
4. Çdo përgjigje ju vjen me email dhe ruhet në panelin e Formspree.

Alternativa pa regjistrim: https://formsubmit.co — vendosni si action
`https://formsubmit.co/emaili-juaj@shembull.com`.

## Ftesa të personalizuara

Shtoni `?guest=Emri` në link dhe i ftuari sheh emrin e vet në krye:
`https://faqja-juaj.com/?guest=Maria`

## Publikimi falas

- **Vercel**: `npm i -g vercel`, pastaj `vercel` në këtë dosje.
- **Netlify / GitHub Pages / Cloudflare Pages**: ngarkoni dosjen ashtu siç është.
