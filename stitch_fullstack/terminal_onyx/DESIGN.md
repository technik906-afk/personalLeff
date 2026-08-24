---
name: Terminal Onyx
colors:
  surface: '#101419'
  surface-dim: '#101419'
  surface-bright: '#36393f'
  surface-container-lowest: '#0a0e13'
  surface-container-low: '#181c21'
  surface-container: '#1c2025'
  surface-container-high: '#262a30'
  surface-container-highest: '#31353b'
  on-surface: '#e0e2ea'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#e0e2ea'
  inverse-on-surface: '#2d3136'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#bdc7d9'
  on-secondary: '#27313f'
  secondary-container: '#404a59'
  on-secondary-container: '#afb9cb'
  tertiary: '#4edea3'
  on-tertiary: '#003824'
  tertiary-container: '#00a572'
  on-tertiary-container: '#00311f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#d9e3f6'
  secondary-fixed-dim: '#bdc7d9'
  on-secondary-fixed: '#121c2a'
  on-secondary-fixed-variant: '#3d4756'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#101419'
  on-background: '#e0e2ea'
  surface-variant: '#31353b'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  code-label:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.02em
  button-text:
    fontFamily: Hanken Grotesk
    fontSize: 15px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.01em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1120px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  stack-sm: 8px
  stack-md: 24px
  stack-lg: 64px
---

## Brand & Style

This design system is engineered for a high-performance technical portfolio, blending the utility of a code editor with the refined minimalism of modern deployment platforms. The aesthetic is "Technical Sophistication"—prioritizing clarity, speed, and information density without visual noise.

The target audience consists of technical recruiters and fellow engineers who value efficiency and architectural precision. The UI evokes a sense of being "close to the metal," utilizing deep graphite surfaces and high-contrast typography to ensure long-form readability and a focused user experience. The style is strictly Minimalist, leveraging whitespace and structural alignment rather than decorative flourishes to communicate competence.

## Colors

The palette is optimized for low-light environments and high-contrast technical reading.

- **Primary (#3B82F6):** Electric Blue is reserved exclusively for interactive elements, primary calls to action, and focus states. It acts as the "active" signal within the interface.
- **Background (#0B0F14):** A deep graphite that provides more depth than pure black, reducing eye strain while maintaining high contrast.
- **Surface (#1F2937):** A lighter gray used for cards, code blocks, and section layering to create subtle depth.
- **Text:** Primary content uses Light Gray (#E5E7EB) for maximum legibility, while metadata and descriptions use a muted slate (#9CA3AF) to establish hierarchy.
- **Accent (#10B981):** Emerald green is used sparingly for "Success" states, git-style additions, or "Online" status indicators.

## Typography

The system utilizes a dual-font approach to distinguish between narrative content and technical data.

- **Hanken Grotesk:** Chosen for its contemporary, sharp terminals and exceptional readability in Russian Cyrillic. It handles headings and body copy, providing a professional yet approachable tone.
- **JetBrains Mono:** Used for tech stack tags, terminal snippets, and UI labels. It signals "Developer" identity and ensures that technical characters (like brackets and slashes) are distinct.

**Language Note:** All typography must support the full Cyrillic character set. Headlines should use "Sentence case" to maintain a modern, conversational feel.

## Layout & Spacing

The layout follows a strict mobile-first fluid grid. 

- **Grid Model:** 12-column grid for desktop (up to 1120px), 4-column grid for mobile.
- **Rhythm:** An 8px base unit drives all padding and margins. 
- **Mobile Reflow:** Elements that span 6 columns on desktop must stack vertically (100% width) on mobile. 
- **Containers:** Content is centered with generous side margins to prevent "edge-bleeding" on wide monitors, mimicking the focused reading experience of a documentation site.

## Elevation & Depth

This system avoids traditional shadows in favor of **Tonal Layering** and **Ghost Outlines**.

1.  **Level 0 (Base):** The primary background (#0B0F14).
2.  **Level 1 (Cards/Sections):** A slightly lighter surface (#161B22) with a subtle 1px solid border (#30363D). 
3.  **Level 2 (Modals/Popovers):** The same surface as Level 1 but with a high-contrast border (#484F58) to denote focus.

Interactive elements use a "Flash" state rather than a shadow—on hover, the border color shifts to the Primary Electric Blue, creating a crisp, technical response without the softness of blurs.

## Shapes

The shape language is "Soft-Industrial." Corners are not sharp, but the radius is minimal to maintain a precise, engineered feel.

- **Standard Elements (Buttons, Inputs):** 0.25rem (4px) radius.
- **Large Elements (Cards, Images):** 0.5rem (8px) radius.
- **Interactive Feedback:** Hovering over items should trigger a sharp, instantaneous color change, reinforcing the "Terminal" metaphor where response time is critical.

## Components

- **Buttons:** 
    - *Primary:* Solid Electric Blue background with white or very light gray text. No gradients.
    - *Secondary:* Transparent background with a 1px Light Gray border. Shift to Blue border on hover.
- **Tech Tags (Chips):** Small, monospace text inside a subtle gray capsule. Example: `[ React ]` or `[ Node.js ]`. Use `#1F2937` for the background.
- **Input Fields:** Darker than the background or matching the background with a persistent border. Focus state is a 1px Blue ring.
- **Cards (Projects):** Feature a clean image at the top, followed by a Title (Headline-MD), a short description (Body-SM), and a row of Tech Tags.
- **Code Blocks:** Should mimic a simplified VS Code "Dark Modern" theme. Use JetBrains Mono and syntax highlighting that favors the Primary Blue and Tertiary Green.
- **Terminal Snippets:** A component meant for "About Me" sections. A dark header with three window control dots (red, yellow, green) and an interactive command-line prompt.