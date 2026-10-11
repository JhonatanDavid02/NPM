# NPM Hardened Registry — Web UI Replica 🛡️📦

> Cloned interface of **[npmjs.com](https://www.npmjs.com/)**, modernizado con **React 19**, **TypeScript**, **pnpm** y una arquitectura de seguridad robusta de cadena de suministro (Supply Chain Hardening).

Desarrollado por **Jhonatan David Ruiz Bernal** como parte de su portafolio profesional de desarrollo web y arquitectura de software seguro.

---

## 🎯 Justificación Técnica: Migración y Hardening Post-Incidentes

Históricamente, el ecosistema de paquetes de JavaScript ha sufrido múltiples ataques de cadena de suministro de alto impacto:
1. **Secuestro de credenciales de mantenedores (Compromised Maintainer Tokens):**
   - Incidentes como los de `ua-parser-js`, `coa` y `rc`, donde atacantes obtuvieron tokens de publicación para distribuir mineros de criptomonedas y ladrones de contraseñas embebidos en versiones legítimas.
2. **Ataques de Confusión de Dependencias y Typosquatting:**
   - Publicación masiva de paquetes con nombres casi idénticos a librerías populares para engañar pipelines de CI/CD automatizados.
3. **Inyección en Dependencias Anidadas (ej. incidente `event-stream`):**
   - Transferencia social de proyectos inactivos para introducir código malicioso que afectó billeteras de criptomonedas.

### 🛡️ Pilares de Hardening implementados en esta réplica:
- **SLSA Level 3 Provenance Attestation:** Todo artefacto empaquetado debe originarse en entornos herméticos y auditables de CI/CD (GitHub Actions / Cloud Build) con firma criptográfica commit-to-tarball.
- **Sigstore Cosign Keyless Signatures:** Eliminación de tokens estáticos de larga duración; autenticación mediante OIDC efímero vinculado a identidades de desarrolladores verificadas.
- **Zero-Trust Postinstall Sandbox:** Cuarentena y análisis AST estático de scripts `preinstall`/`postinstall` antes de su distribución.
- **Integración con Registry Real:** Búsqueda en vivo contra la API oficial `https://registry.npmjs.org/-/v1/search` con fallback transparente y evaluación de score de seguridad en tiempo real.

---

## 🚀 Tecnologías Utilizadas

- **Framework:** React 19 (React Hooks, Transitions, Concurrent Mode)
- **Lenguaje:** TypeScript 5.7+ (Tipado estricto para artefactos de registro, scores y paquetes)
- **Gestor de paquetes:** `pnpm` (Eficiencia con Content-Addressable Store y enlaces simbólicos)
- **Bundler:** Vite 6 (HMR instantáneo y build optimizado)
- **Diseño & UI:** CSS Puro con la paleta oficial y componentes pixel-perfect de NPM (`#cb3837`, Rainbow bar, Search prompt, Inspector modal, Cards, Pricing tiers)
- **Iconografía:** Lucide React & SVGs oficiales de NPM

---

## 💻 Instalación y Ejecución

Clona o navega a esta carpeta:
```bash
cd "c:\Users\FAMILIA\Desktop\NPM-Clone"
```

Instala las dependencias con `pnpm`:
```bash
pnpm install
```

Ejecuta el servidor de desarrollo:
```bash
pnpm run dev
```

Por defecto, Vite levantará el servidor en:
👉 `http://127.0.0.1:3001/`

Para compilar para producción:
```bash
pnpm run build
```

---

## 👨‍💻 Autor

**Jhonatan David Ruiz Bernal**
- **GitHub:** [@JhonatanDavid02](https://github.com/JhonatanDavid02)
- **LinkedIn:** [Perfil Profesional](https://www.linkedin.com/in/jhonathan-david-ruiz-bernal-499395202/)
- **Email:** jhonatandavidruiz02@gmail.com
- **Ubicación:** Ibagué, Tolima, Colombia
