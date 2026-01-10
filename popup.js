// popup.js
const t = TrelloPowerUp.iframe();

const estimateInput = document.getElementById('estimate');
const spentInput = document.getElementById('spent');
const remainingEl = document.getElementById('remaining');

function updateRemaining() {
  const estimate = parseFloat(estimateInput.value) || 0;
  const spent = parseFloat(spentInput.value) || 0;
  const remaining = Math.max(estimate - spent, 0);
  remainingEl.textContent = `Remaining: ${remaining}`;
}

estimateInput.oninput = updateRemaining;
spentInput.oninput = updateRemaining;

async function init() {
  const data = await t.get('card', 'shared');
  estimateInput.value = data.estimate ?? '';
  spentInput.value = data.spent ?? '';
  updateRemaining();
}

document.getElementById('save').onclick = async () => {
  await t.set('card', 'shared', 'estimate', parseFloat(estimateInput.value) || 0);
  await t.set('card', 'shared', 'spent', parseFloat(spentInput.value) || 0);
  t.closePopup();
};

document.getElementById('remove').onclick = async () => {
  await t.remove('card', 'shared', 'estimate');
  await t.remove('card', 'shared', 'spent');
  t.closePopup();
};

init();
