TrelloPowerUp.initialize({
  'card-buttons': function (t) {
    return [{
      icon: 'https://sergeysirenko.github.io/trello-time-sizing-powerup/clock.svg',
      text: 'Card Size',
      callback: function (t) {
        return t.popup({
          title: 'Card Size',
          url: './popup.html',
          height: 141
        });
      }
    }];
  },

  'card-badges': async (t) => {
    const { size = null, spent = null } = await t.get('card', 'shared') || {};

    const badges = [];

    if (size !== null) {
      badges.push({
        text: `⏱ ${size}`,
        color: 'orange'
      });
    }

    if (spent !== null) {
      badges.push({
        text: `⏱ ${spent}`,
        color: 'green'
      });
    }

    return badges;
  },


  'card-detail-badges': async (t) => {
    const { size = null, spent = null } = await t.get('card', 'shared') || {};

    const badges = [];

    if (size !== null) {
      badges.push({
        title: 'Size',
        text: `${size}`,
        color: 'orange'
      });
    }

    if (spent !== null) {
      badges.push({
        title: 'Spent',
        text: `${spent}`,
        color: 'green'
      });
    }

    if (size !== null && spent !== null) {
      const remaining = Math.max(size - spent, 0);

      badges.push({
        title: 'Remaining',
        text: `${remaining}`,
        color: 'blue'
      });
    }

    return badges;
  }
});
