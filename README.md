# 🦷 Cobros Odontológicos

PWA (Progressive Web App) para registro de cobros odontológicos por obra social.  
Instalable en iPhone y Android. Datos sincronizados en la nube via JSONBin.

## Instalación en el teléfono

### iPhone (Safari)
1. Abrí la app en Safari: `https://TU-USUARIO.github.io/cobros-odonto`
2. Tocá el botón compartir (cuadrado con flecha ↑)
3. Seleccioná **"Agregar a pantalla de inicio"**
4. Tocá **Agregar** — aparece el ícono en tu pantalla

### Android (Chrome)
1. Abrí la app en Chrome: `https://TU-USUARIO.github.io/cobros-odonto`
2. Aparece un banner automático "Instalar app" — tocá **Instalar**
3. O bien: menú (⋮) → **"Agregar a pantalla de inicio"**

---

## Deploy en GitHub Pages

1. Crear repositorio en GitHub llamado `cobros-odonto`
2. Subir todos los archivos:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/TU-USUARIO/cobros-odonto.git
   git push -u origin main
   ```
3. En el repo → **Settings** → **Pages** → Source: `main` / `/ (root)` → **Save**
4. En ~2 minutos la app estará en: `https://TU-USUARIO.github.io/cobros-odonto`

---

## Estructura de archivos

```
cobros-odonto/
├── index.html       # App completa
├── manifest.json    # Config PWA
├── sw.js            # Service Worker (offline)
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
└── README.md
```

## Funcionalidades

- **Registrar cobro**: paciente, fecha, obra social, prácticas con monto y cantidad
- **Historial**: agrupado por mes con resumen por obra social
- **Aranceles**: base de datos editable de prácticas y precios
- **Offline**: funciona sin internet (solo lectura/edición local)
- **Sync**: guarda en JSONBin al registrar
