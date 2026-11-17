# Site d'Acker Électricité

Site de Fabrice Acker, électricien à Marseille. Fait avec [Astro](https://astro.build), mis en ligne par Cloudflare Pages.

## Où changer quoi

- Coordonnées, SIRET, assurance, services, photos : `src/data/entreprise.js` (un seul endroit pour tout le site).
- Pages : `src/pages/` (une page par fichier).
- Couleurs et mise en page : `src/styles/global.css`.
- Photos et logos : `public/`.

## Règles

- Aucun prix, aucun avis client, aucun chiffre inventé.
- Pas de nom de client sans son accord.
- Une info manquante s'affiche avec le composant `AConfirmer` (cadre jaune pointillé) en attendant la réponse de Fabrice.
- Modifications sur une branche, puis pull request : Cloudflare donne un lien d'aperçu, Fabrice dit "go", on fusionne.

## Cloudflare Pages

- Framework : Astro
- Commande de build : `npm run build`
- Dossier de sortie : `dist`

## Sur l'ordinateur (facultatif)

```
npm install
npm run dev
```
