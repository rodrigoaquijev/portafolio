# AGENTS.md — Design System & Engineering Rules

## 1. IDENTITY & PROJECT CONTEXT
- **Owner**: Rodrigo Aquije V.
- **Positioning**: Senior Product Designer & Design Engineer (Economics Background, FinTech, Behavioral UX, Conversion & State Architecture).
- **Core Philosophy**: High-craft aesthetic, business metrics over decoration, scalable systems, and viable code implementation.
- **Tone & Mood**: Indie Editorial, Contemporary European/Nordic Software Design, Apple Liquid Glass UI, Calm High-End Ambient.

---

## 2. STRICT DESIGN SYSTEM & VISUAL TOKENS

### Typography
- **Headings & Editorial Titles**: `'Instrument Serif', Georgia, serif` (condensed, elegant, italic accents with `<em>`).
- **Body & UI Elements**: `'Satoshi', 'Plus Jakarta Sans', sans-serif` (clean, contemporary, high legibility).
- **Metadata, Counters & Badges**: `'JetBrains Mono', monospace` (technical, crisp).

### Dual-Theme Palettes (No Pure Black / No Pure White)
- **Dark Mode (`data-theme="dark"`)**:
  - Base: `#090B10` (Obsidian Titanium)
  - Surface: `#10141E`
  - Elevated Glass: `#161C2A` / `rgba(16, 20, 30, 0.75)`
  - Text: `#F8FAFC` (Pure), `#94A3B8` (Muted), `#4D596E` (Subtle)
- **Light Mode (`data-theme="light"`)**:
  - Base: `#F1F4F9` (Crisp Pearl Slate)
  - Surface: `#FFFFFF`
  - Elevated Glass: `#F8FAFD` / `rgba(255, 255, 255, 0.85)`
  - Text: `#0B111D` (Pure), `#4B5A6F` (Muted), `#8A99AC` (Subtle)
- **Accents**:
  - Cyan: `#00E5FF` / `#0284C7`
  - Iris: `#818CF8` / `#6366F1`
  - Emerald: `#10B981` / `#059669`

### Key UI Signatures
1. **Apple Liquid Glass Floating Dock**:
   - Fixed at bottom with safe-area padding (`bottom: 28px`).
   - Blur filter: `backdrop-filter: blur(32px) saturate(180%)`.
   - Specular top reflection border: `inset 0 1px 1.5px rgba(255, 255, 255, 0.4)`.
   - Physics: Spring bounce on hover (`cubic-bezier(0.175, 0.885, 0.32, 1.275)`).
2. **Ambient Layer**:
   - Ultra-subtle SVG noise grain (`opacity: 0.035`).
   - Smooth mouse-following silk glow (`filter: blur(140px)`).

---

## 3. ANTI-AI SLOP RULES (NEVER DO THIS)
Agents and assistants MUST NEVER inject:
- ❌ Generic pulsing green dots with labels like "Available for work" or "System Ready".
- ❌ Hard separated Bento grids with heavy generic cards.
- ❌ Artificial robotic/futuristic jargon (no "96x36 HD", no "Cyberpunk Engine", no coordinates).
- ❌ Meaningless percentage charts without actual project business context.
- ❌ Generic purple/pink AI gradients. Stick to the curated editorial palette.

---

## 4. ARCHITECTURE & CODE CONVENTIONS

### Tech Stack
- **Framework**: React 18+ (Vite)
- **Styling**: Pure CSS Custom Properties (Design Tokens) in `styles.css` — avoid massive Tailwind overrides unless explicitly instructed.
- **Icons**: `lucide-react`
- **Routing**: `react-router-dom` for deep case studies.
- **Language**: Native Bilingual Support (`es` / `en`) driven by unified dictionary constants.

### Component Structure
When refactoring or expanding, always follow this modular scheme under `src/`:
```text
src/
├── components/
│   ├── HeaderStatus.jsx       # Clock, Language & Theme toggles
│   ├── Hero.jsx               # Editorial title, bio, avatar & CTAs
│   ├── TrustStrip.jsx         # Client logos (BBVA, Fahrenheit DDB, CENTRUM PUCP, etc.)
│   ├── Capabilities.jsx       # UX/UI Craft & AI-Augmented workflows
│   ├── CaseStudyStream.jsx    # Editorial 3-case showcase with live UI windows
│   ├── CaseStudyCard.jsx      # Individual case presentation with chips & chroma stage
│   ├── ContactPlayground.jsx  # Interactive bento tiles (Inbox, LinkedIn, Dual CV)
│   └── FloatingDock.jsx       # Persistent Apple Liquid Glass navigation
├── pages/
│   ├── Home.jsx
│   ├── CaseBBVA.jsx
│   ├── CaseYape.jsx
│   └── CaseAllpa.jsx
├── content/
│   └── translations.js        # ES / EN content dictionaries
├── App.jsx
├── main.jsx
└── styles.css