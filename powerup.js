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

  'card-badges': async (t) => {
    const { size = null, spent = null } = await t.get('card', 'shared', {});

    const badges = [];

    if (size !== null) {
      badges.push({
        text: `Size: ${size}`,
        color: 'blue'
      });
    }

    if (spent !== null) {
      badges.push({
        text: `Spent: ${spent}`,
        color: 'green'
      });
    }

    return badges;
  },


  'card-detail-badges': async (t) => {
    const { size = null, spent = null } = await t.get('card', 'shared', {});

    const badges = [];

    if (size !== null) {
      badges.push({
        title: 'Size',
        text: `${size}h`,
        color: 'blue'
      });
    }

    if (spent !== null) {
      badges.push({
        title: 'Spent',
        text: `${spent}h`,
        color: 'green'
      });
    }

    if (size !== null && spent !== null) {
      const remaining = Math.max(size - spent, 0);

      badges.push({
        title: 'Remaining',
        text: `${remaining}h`,
        color: 'red'
      });
    }

    return badges;
  }
});
