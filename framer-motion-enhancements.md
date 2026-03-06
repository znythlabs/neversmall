# Task: Framer Motion Enhancements (Neversmall Studios)

## 🎯 Goal
Implement high-impact, premium animations across the Neversmall Studios website to enhance the Brutalist/Neo-Retro aesthetic using `framer-motion`.

## 🏗️ Architecture & Stack
- **Framework:** Next.js 16 (App Router)
- **Animation:** Framer Motion 12+
- **Styling:** Vanilla CSS / Tailwind (as defined in project)
- **Physics:** Spring-based interactions for high-frequency elements.

## 📋 Task Breakdown

### Phase 1: Magnetic Service Interactions
- [ ] Refactor `ServiceItem.tsx` to use `framer-motion`.
- [ ] Implement `useSpring` for the cursor-following image effect.
- [ ] Add smooth entry/exit animations for the hover state.

### Phase 2: Orchestrated Menu Overlay
- [ ] Refactor `Navbar.tsx` to use `AnimatePresence`.
- [ ] Implement staggered panel reveals for the menu background.
- [ ] Animate the menu links and social footer with a "pop" effect.

### Phase 3: Global Text & Interaction Polish
- [ ] Update `AnimatedLink.tsx` with unified motion variants.
- [ ] Add page transition support (if applicable).

## 🛡️ Verification Criteria
- [ ] Smooth image following in `ServiceItem` (no lag/jitter).
- [ ] Staggered link reveal in Menu Overlay.
- [ ] No layout shifts during entrance/exit animations.
- [ ] Verify accessibility (Reduced Motion support).
