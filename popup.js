const t = TrelloPowerUp.iframe();

const sizeInput = document.getElementById('size');
const spentInput = document.getElementById('spent');
const remainingEl = document.getElementById('remaining');

function updateRemaining() {
  const size = parseFloat(sizeInput.value) || 0;
  const spent = parseFloat(spentInput.value) || 0;
  const remaining = Math.max(size - spent, 0);
  remainingEl.textContent = `Remaining: ${remaining}`;
}

sizeInput.oninput = updateRemaining;
spentInput.oninput = updateRemaining;

async function init() {
  const data = await t.get('card', 'shared') || {};
  sizeInput.value = data.size ?? '';
  spentInput.value = data.spent ?? '';
  updateRemaining();
}

document.getElementById('save').onclick = async () => {
  await t.set('card', 'shared', 'size', parseFloat(sizeInput.value) || 0);
  await t.set('card', 'shared', 'spent', parseFloat(spentInput.value) || 0);
  t.closePopup();
};

document.getElementById('remove').onclick = async () => {
  await t.remove('card', 'shared', 'size');
  await t.remove('card', 'shared', 'spent');
  t.closePopup();
};

init();
