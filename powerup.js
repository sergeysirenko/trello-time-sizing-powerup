TrelloPowerUp.initialize({
  'card-buttons': function (t) {
    return [{
      text: 'Card Size',
      callback: function (t) {
        return t.popup({
          icon: 'https://sergeysirenko.github.io/trello-time-sizing-powerup/clock.svg',
          title: 'Card Size',
          url: './popup.html',
          height: 141
        });
      }
    }];
  },

  'card-badges': async function (t) {
    const data = await t.get('card', 'shared', {
      size: null,
      spent: null
    });

    const badges = [];

    if (data.size != null) {
      badges.push({
        text: `Size: ${data.size}`,
        color: 'blue'
      });
    }

    if (data.spent != null) {
      badges.push({
        text: `Spent: ${data.spent}`,
        color: 'green'
      });
    }

    return badges;
  },

  'card-detail-badges': async function (t) {
    const data = await t.get('card', 'shared', {
      size: null,
      spent: null
    });

    function calcRemaining(size, spent) {
      if (size == null || spent == null) return null;
      return Math.max(size - spent, 0);
    }

    const remaining = calcRemaining(data.size, data.spent);

    const badges = [];

    if (data.size != null) {
      badges.push({
        title: 'Size',
        text: `${data.size}`,
        color: 'blue'
      });
    }

    if (data.spent != null) {
      badges.push({
        title: 'Spent',
        text: `${data.spent}`,
        color: 'green'
      });
    }

    if (remaining != null) {
      badges.push({
        title: 'Remaining',
        text: `${remaining}`,
        color: 'red'
      });
    }

    return badges;
  }
});
