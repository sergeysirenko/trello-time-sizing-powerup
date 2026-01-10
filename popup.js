const t = TrelloPowerUp.iframe();

async function init() {
  const data = await t.get('card', 'shared');
  document.getElementById('estimate').value = data.estimate || '';
  document.getElementById('spent').value = data.spent || '';
}

document.getElementById('save').onclick = async () => {
  const estimate = parseFloat(document.getElementById('estimate').value) || 0;
  const spent = parseFloat(document.getElementById('spent').value) || 0;

  await t.set('card', 'shared', 'estimate', estimate);
  await t.set('card', 'shared', 'spent', spent);

  t.closePopup();
};

init();
