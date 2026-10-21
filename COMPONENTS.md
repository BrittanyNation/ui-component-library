# Component Documentation

## Button
- **Markup:** `<button class="btn">` or `<button class="btn btn-primary">`
- **Behavior:** Native button semantics; `:focus-visible` ring is never removed.
- **Accessibility:** Real `<button>` elements only — never a clickable `<div>`.

## Modal
- **Markup:** A trigger with `data-open-modal`, a `.modal` container with `role="dialog"` and `aria-modal="true"`.
- **Behavior:** Opens on trigger click; closes on Escape, backdrop click, or the close button. Focus moves into the dialog on open.
- **Accessibility:** Labelled by its heading via `aria-labelledby`.

## Tabs
- **Markup:** `role="tablist"`, buttons with `role="tab"` and `aria-selected`, panels with `role="tabpanel"`.
- **Behavior:** Click or arrow keys switch tabs; only the selected panel is shown.
- **Accessibility:** Arrow-key navigation follows the WAI-ARIA tabs pattern.

## Accordion
- **Markup:** Buttons with `aria-expanded` controlling sibling regions.
- **Behavior:** One panel open at a time; state announced via `aria-expanded`.
