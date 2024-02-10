# pigParty

### Workflow

1. Use LEOCad => Save as `.mpd`
2. Move file into `ldraw/models`
3. Run `node packLDrawModel.mjs models/<x>.mpd`
4. Move `models/<x>mpd_Packed.mpd` into public and import

### Run locally
```
npx vite
```
> http://localhost:5173

### Build for Github (production)
```
npm run build
npm run preview
```

> http://localhost:4173
