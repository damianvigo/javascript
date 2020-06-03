const d = document;

export function shortcuts(e) {
  console.log(e.type);
  console.log(e.key);
  console.log(e.keyCode);
  console.log(`ctrl: ${e.ctrlKey}`);
  console.log(`alt: ${e.altKey}`);
  console.log(`shift: ${e.shiftKey}`);
  console.log(e);

  if (e.key === 'a' && e.altKey) {
    alert('Alert a + alt');
  }
  if (e.key === 'c' && e.altKey) {
    confirm('Confirm a + alt');
  }
  if (e.key === 'p' && e.altKey) {
    prompt('Prompt + alt');
  }
}
