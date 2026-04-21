# Implementation Plan: Navbar Scroll Transition

Transition the navbar branding from the text "AIZEN" to the logo asset based on the user's scroll position.

## User Review Required

> [!IMPORTANT]
> - **Threshold**: The transition will occur after 50px of scroll.
> - **Animation Type**: A smooth cross-fade + slight vertical slide using Framer Motion.
> - **Font Styling**: I will use the `text-cinematic` style for the "AIZEN" text to match the previous design language.

## Proposed Changes

### Components

#### [MODIFY] [Navbar.tsx](file:///c:/Users/david/Downloads/Aizen%20TM/src/components/Navbar.tsx)
- Convert to a client component.
- Add `useState` and `useEffect` to track the `scrolled` state.
- Wrap the branding section in Framer Motion's `motion.div` and `AnimatePresence`.
- Implement conditional rendering between `AIZEN` text and `<Logo />`.

## Open Questions

- Should the navbar background color or blur change as well during this transition to "sticky" mode?

## Verification Plan

### Manual Verification
1.  Start at the top of the page: verify the text "AIZEN" is visible.
2.  Scroll down: verify the text fades out and the logo fades in smoothly.
3.  Scroll back to top: verify the transition reverses correctly.
4.  Test in both Dark and Light modes to ensure the text and logo colors remain correct.
