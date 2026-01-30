# Quick Reference - Design System

## 🎨 Color Variables

### Backgrounds
```css
--bg-color: #0f172a;           /* Main background */
--card-bg: #1e293b;            /* Card backgrounds */
```

### Text Colors
```css
--text-color: #f1f5f9;         /* Primary text */
--text-light: #cbd5e1;         /* Secondary text */
```

### Brand Colors
```css
--primary-color: #3b82f6;      /* Main blue */
--primary-light: #60a5fa;      /* Light blue */
--secondary-color: #06b6d4;    /* Cyan */
--accent-color: #8b5cf6;       /* Purple */
```

### Category Colors
```css
--color-blue: #3b82f6;         /* Blue */
--color-green: #10b981;        /* Green */
--color-orange: #f59e0b;       /* Orange */
--color-red: #ef4444;          /* Red */
--color-purple: #a855f7;       /* Purple */
--color-teal: #06b6d4;         /* Teal */
--color-pink: #ec4899;         /* Pink */
--color-yellow: #fbbf24;       /* Yellow */
```

### Shadows
```css
--shadow: 0 3px 12px rgba(59, 130, 246, 0.15);
--shadow-hover: 0 8px 30px rgba(59, 130, 246, 0.25);
--button-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
--button-shadow-hover: 0 6px 20px rgba(59, 130, 246, 0.4);
```

---

## 🎭 Animation Timing

### Standard Transitions
- **Normal**: 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)
- **Smooth**: 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)
- **Slow**: 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)

### Page Load
- Hero Title: `fadeInDown` (0.8s)
- Hero Subtitle: `fadeInUp` (0.8s, 0.2s delay)
- Profile Photo: `fadeInLeft` (0.8s)
- Contact Info: `fadeInRight` (0.8s)

### Skill Cards Stagger
- Card 1: 0.1s delay
- Card 2: 0.2s delay
- Card 3: 0.3s delay
- Card 4: 0.4s delay
- Card 5: 0.5s delay
- Card 6: 0.6s delay

---

## 📐 Spacing Guidelines

### Container Widths
- Small sections: max-width: 900px
- Medium sections: max-width: 1000px
- Large sections: max-width: 1200px

### Padding
- Section padding: 4rem 2rem
- Card padding: 1.5rem - 2rem
- Button padding: 0.8rem 1.3rem to 1rem 2.2rem

### Gaps
- Grid gap: 1.5rem - 2rem
- Flexbox gap: 0.5rem - 2rem

---

## 🎯 Component Classes

### Cards
- `.info-card` - Education/info cards
- `.skill-category` - Skill category cards
- `.feature-card` - Feature cards
- `.challenge-card` - Challenge cards
- `.project-card` - Project listing cards

### Buttons
- `.resume-button` - Primary button
- `.cta-button` - Call-to-action button

### Badges
- `.skill-badge` - General skill badge
- `.skill-badge.automation` - Orange badge
- `.skill-badge.embedded` - Green badge
- `.skill-badge.power` - Red badge
- `.skill-badge.simulation` - Purple badge
- `.skill-badge.software` - Cyan badge
- `.skill-badge.deployment` - Pink badge

### Interactive Elements
- `.contact-item` - Contact information item
- `.nav__link` - Navigation link
- `.footer__link` - Footer social link

---

## 🔍 Hover Effects

### Cards
```
Lift: translateY(-8px)
Scale: scale(1.02)
Shadow: Enhanced glow
Border: Color brightens
```

### Buttons
```
Lift: translateY(-4px)
Shadow: Expands
Background: More vibrant
```

### Badges
```
Lift: translateY(-3px)
Scale: scale(1.05)
Glow: Enhanced shadow
```

---

## 📱 Responsive Breakpoints

### Desktop
- Large screens: 1200px+ (full layout)
- Standard: 1024px+ (3-column grid)

### Tablet
- 768px - 1023px (responsive adjustments)
- Grid: 1-2 columns

### Mobile
- Below 768px (single column)
- Touch-friendly sizes
- Larger padding

---

## 🎨 Gradients Used

### Hero Section
```css
background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
```

### Animated Background
```css
radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
```

### Button Gradient
```css
linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
```

### Text Gradient
```css
background: linear-gradient(135deg, #3b82f6, #06b6d4);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

---

## ✨ Special Effects

### Glassmorphism
```css
background: rgba(15, 23, 42, 0.85);
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
```

### Shine Effect
```css
::before {
  background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent);
  transition: left 0.5s ease;
}
```

### Breathing Animation
```css
@keyframes gradientShift {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}
```

---

## 🔄 Common Patterns

### Card Hover Pattern
```css
.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 50px rgba(59, 130, 246, 0.3);
  border-color: rgba(59, 130, 246, 0.5);
}
```

### Smooth Transition Pattern
```css
transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
```

### Border Styling Pattern
```css
border: 2px solid rgba(59, 130, 246, 0.2);
```

---

## 📋 Checklist for Updates

When modifying pages:
- [ ] Use dark backgrounds (#0f172a, #1e293b)
- [ ] Use light text (#f1f5f9, #cbd5e1)
- [ ] Add blue borders with transparency
- [ ] Use smooth transitions (0.3s-0.8s)
- [ ] Add hover lift effects
- [ ] Include animated gradient backgrounds
- [ ] Add staggered animations for lists
- [ ] Test on mobile devices
- [ ] Verify color contrast
- [ ] Check animation performance

---

*Dark theme design system v1.0*
*Last updated: January 30, 2026*
