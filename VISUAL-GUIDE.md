# 🎨 Visual Design Guide

## Color Palette

### Primary Colors
```
████████ #0f172a - Deep Dark Blue (Main Background)
████████ #1e293b - Dark Slate (Cards)
████████ #3b82f6 - Primary Blue (Accents)
████████ #06b6d4 - Cyan (Secondary Accents)
████████ #8b5cf6 - Purple (Tertiary Accents)
```

### Text Colors
```
████████ #f1f5f9 - Off-white (Primary Text)
████████ #cbd5e1 - Light Gray (Secondary Text)
```

### Category Badge Colors
```
████████ #f59e0b - Orange (Control & Automation)
████████ #10b981 - Green (Embedded & Programming)
████████ #ef4444 - Red (Power & Control)
████████ #a855f7 - Purple (Simulation & Design)
████████ #06b6d4 - Cyan (Software & Development)
████████ #ec4899 - Pink (Deployment & Tools)
```

---

## Component Showcase

### About Page Layout
```
┌─────────────────────────────────────┐
│  Hero Section (Dark Gradient)       │
│  "About Me"                         │
└─────────────────────────────────────┘

┌──────────────────┬──────────────────┐
│  Profile Photo   │  Contact Info    │
│  (with hover)    │  Professional    │
│                  │  Summary         │
│                  │  Portfolio Btn   │
└──────────────────┴──────────────────┘
```

### Skills Grid Layout
```
┌──────────┐  ┌──────────┐  ┌──────────┐
│ Control  │  │ Embedded │  │  Power   │
│  & Auto  │  │  & Prog  │  │ Control  │
│ 🔧 Cogs  │  │ 🔌 Chip  │  │ ⚡ Bolt  │
└──────────┘  └──────────┘  └──────────┘

┌──────────┐  ┌──────────┐  ┌──────────┐
│Simulation│  │ Software │  │Deployment│
│ & Design │  │   & Dev  │  │  & Tools │
│📊 Diagram│  │💻 Code   │  │🚀 Rocket │
└──────────┘  └──────────┘  └──────────┘
```

### Skill Badges Example
```
Control & Automation:
[PLC] [Mechatronics] [Industrial Automation] [HMI]
Orange badges with hover lift effect

Embedded & Programming:
[C++] [ESP32] [Arduino] [Python]
Green badges with hover lift effect
```

### Card Hover Animation
```
Normal State:              Hover State:
┌──────────────┐          ┌──────────────┐
│              │   →      │              │ ↑
│   Card       │          │   Card       │ (Lift 8px)
│              │          │              │ ✨ Glow
└──────────────┘          └──────────────┘
```

---

## Typography

### Font Stack
```
Font Family: 'Poppins', 'Segoe UI', Arial, sans-serif
```

### Font Sizes
```
Hero Title:          3.5rem (60px)
Section Title:       2.5rem (40px)
Card Title:          1.3rem (20px)
Body Text:           1rem (16px)
Small Text:          0.9rem (14px)
```

### Font Weights
```
Regular:   400
Semibold:  600
Bold:      700
```

---

## Spacing Guide

### Container Widths
```
Max Widths:
- Small:  900px
- Medium: 1000px
- Large:  1200px

Padding:
- Section:  2rem
- Mobile:   1rem
```

### Card Spacing
```
Padding:        1.5rem - 2rem
Gap Between:    1.5rem - 2rem
Border Radius:  1rem (cards), 50px (buttons)
```

---

## Shadow System

### Subtle Shadow
```css
box-shadow: 0 3px 12px rgba(59, 130, 246, 0.15);
```
Used for: Normal card state

### Medium Shadow
```css
box-shadow: 0 8px 30px rgba(59, 130, 246, 0.25);
```
Used for: Hover card state

### Strong Shadow
```css
box-shadow: 0 15px 50px rgba(59, 130, 246, 0.3);
```
Used for: Elevated states

---

## Animation Timing

### Easing Function
```
cubic-bezier(0.34, 1.56, 0.64, 1)
Creates a bouncy, natural feel
```

### Duration
```
Quick:    0.3s (hover effects)
Normal:   0.4s (transitions)
Slow:     0.8s (page load)
```

### Stagger Delay (Skills)
```
Card 1:  0.1s ─┐
Card 2:  0.2s  ├─ Cascading effect
Card 3:  0.3s  │
Card 4:  0.4s  │
Card 5:  0.5s  │
Card 6:  0.6s ─┘
```

---

## Responsive Breakpoints

### Screen Sizes
```
Desktop:  1200px+   (6-column grid)
Tablet:   768-1199px (1-2 columns)
Mobile:   <768px    (1 column)
```

### Grid Behavior
```
Skills Grid:
Desktop:   grid-template-columns: repeat(3, 1fr)
Tablet:    grid-template-columns: repeat(2, 1fr)
Mobile:    grid-template-columns: 1fr
```

---

## Accessibility

### Color Contrast
```
✅ Primary Text (#f1f5f9) on Dark (#0f172a):  20:1 (AAA)
✅ Secondary Text (#cbd5e1) on Dark (#0f172a): 10:1 (AA)
✅ Blue (#3b82f6) on Dark (#0f172a):          6:1 (AA)
```

### Focus States
```
All interactive elements have:
- Color transition
- Scale transformation
- Shadow enhancement
- Smooth animations
```

---

## Button Styles

### Primary Button (Resume)
```
State:     Normal
Color:     Gradient (Blue → Cyan)
Size:      1rem × 2.2rem padding
Animation: Lift on hover (4px up)

State:     Hover
Shadow:    Enhanced glow
Scale:     Slight increase
Duration:  0.3s smooth transition
```

### Badge Button
```
State:     Normal
Color:     Light background with border
Size:      0.6rem × 1.2rem padding
Animation: Float on hover (3px up)

State:     Hover
Scale:     1.05x
Shadow:    Category-specific glow
```

---

## Hover Effects Matrix

| Element | Lift | Scale | Glow | Color |
|---------|------|-------|------|-------|
| Card    | 8px  | 1.02x | Yes  | Border brightens |
| Button  | 4px  | 1.00x | Yes  | Intensity +25% |
| Badge   | 3px  | 1.05x | Yes  | Category color |
| Link    | 0px  | 1.00x | No   | Primary blue |

---

## Animation Examples

### Page Load Sequence
```
0ms:    Start
300ms:  Hero title visible
600ms:  Hero subtitle visible
900ms:  Profile photo appears
1200ms: Contact info appears
1500ms: Content fully loaded
```

### Skill Cards Cascade
```
100ms:  Card 1 visible
200ms:  Card 2 visible
300ms:  Card 3 visible
400ms:  Card 4 visible
500ms:  Card 5 visible
600ms:  Card 6 visible
```

---

## States & Interactions

### Normal State
```
✓ Visible
✓ Interactive cursor
✓ Default shadow
✓ Neutral colors
```

### Hover State
```
✓ Lifted effect
✓ Enhanced shadow
✓ Glow effect
✓ Border brightened
✓ Color intensified
```

### Active State
```
✓ Navigation links highlight
✓ Color matches primary blue
✓ Underline indicator
✓ No additional lift
```

### Focus State (Keyboard)
```
✓ Outline visible
✓ Same as hover
✓ Accessible navigation
✓ Clear visual feedback
```

---

## Design Tokens (CSS Variables)

### Available for Customization
```css
--bg-color: #0f172a          /* Main background */
--card-bg: #1e293b           /* Card background */
--text-color: #f1f5f9        /* Primary text */
--text-light: #cbd5e1        /* Secondary text */
--primary-color: #3b82f6     /* Main accent */
--secondary-color: #06b6d4   /* Secondary accent */
--accent-color: #8b5cf6      /* Tertiary accent */
```

---

## Best Practices

### DO ✅
- Use dark backgrounds for main content
- Use light text for readability
- Add hover effects to interactive elements
- Maintain consistent spacing
- Use gradients for visual interest
- Add animations for engagement

### DON'T ❌
- Mix light and dark themes
- Use low contrast text
- Add too many animations
- Forget responsive design
- Break existing color system
- Forget accessibility

---

## Quick Customization

### Change Primary Color
Replace all instances of `#3b82f6` with your color

### Change Text Color
Replace `#f1f5f9` with lighter color for bright text

### Change Background
Replace `#0f172a` with darker color

### Adjust Animations
Modify `0.3s` → `0.5s` for slower animations
Modify `0.8s` → `0.5s` for faster animations

---

*Design System v1.0 - January 30, 2026*
