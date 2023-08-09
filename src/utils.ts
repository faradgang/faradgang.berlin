export function addScrollingHook(hook: () => void) {
  hook();
  window.addEventListener("scroll", hook);
}
