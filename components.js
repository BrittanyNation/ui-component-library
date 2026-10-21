// Modal: open/close, Escape support, focus moves into the dialog
const backdrop = document.querySelector('.modal-backdrop');
const modal = document.querySelector('.modal');
document.querySelector('[data-open-modal]').addEventListener('click', () => {
  backdrop.hidden = false;
  modal.querySelector('button').focus();
});
function closeModal() { backdrop.hidden = true; }
document.querySelectorAll('[data-close-modal]').forEach(b => b.addEventListener('click', closeModal));
backdrop.addEventListener('click', e => { if (e.target === backdrop) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !backdrop.hidden) closeModal(); });

// Tabs: click + arrow-key navigation (WAI-ARIA tabs pattern)
const tabs = [...document.querySelectorAll('[role=tab]')];
const panels = [...document.querySelectorAll('[role=tabpanel]')];
function selectTab(i) {
  tabs.forEach((t, j) => t.setAttribute('aria-selected', j === i));
  panels.forEach((p, j) => { p.hidden = j !== i; });
}
tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => selectTab(i));
  tab.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') { const n = (i + 1) % tabs.length; tabs[n].focus(); selectTab(n); }
    if (e.key === 'ArrowLeft') { const n = (i - 1 + tabs.length) % tabs.length; tabs[n].focus(); selectTab(n); }
  });
});

// Accordion: one panel open at a time, state via aria-expanded
document.querySelectorAll('.accordion-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const panel = btn.nextElementSibling;
    const open = btn.getAttribute('aria-expanded') === 'true';
    document.querySelectorAll('.accordion-btn').forEach(b => {
      b.setAttribute('aria-expanded', 'false'); b.nextElementSibling.hidden = true;
    });
    btn.setAttribute('aria-expanded', String(!open));
    panel.hidden = open;
  });
});
