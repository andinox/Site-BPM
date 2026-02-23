## Site Web BPM - React + TypeScript

Site statique BPM construit avec React, TypeScript et Vite.

## Pré-requis

- Node.js `24.x`
- npm `>=10`

## Installation

```bash
npm install
```

## Commandes

```bash
npm run dev
npm run build
npm run preview
npm run typecheck
npm run lint
npm run test
```

## Docker

Construire l'image:

```bash
docker build -t site-bpm .
```

Lancer en local:

```bash
docker run --rm -p 8080:80 site-bpm
```

## Structure

```text
src/
  app/
  features/
    events/
    home/
    team/
  shared/
  styles/
```
