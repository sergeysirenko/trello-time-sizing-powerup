function callback(t) {
  return t.popup({
    title: 'Card Size',
    url: './popup.html',
    height: 141
  });
}

TrelloPowerUp.initialize({
  'card-buttons': function (t) {
    return [{
      icon: 'https://frontend-serhii-s.github.io/trello-card-size/clock.svg',
      text: 'Card Size',
      callback: callback,
    }];
  },

  'card-badges': async (t) => {
    const { size = null, spent = null } = await t.get('card', 'shared') || {};

    const badges = [];

    if (size !== null) {
      badges.push({
        icon: 'https://frontend-serhii-s.github.io/trello-card-size/clock.svg',
        text: `${size}`,
        color: 'orange'
      });
    }

    if (spent !== null) {
      badges.push({
        icon: 'https://frontend-serhii-s.github.io/trello-card-size/clock.svg',
        text: `${spent}`,
        color: 'green'
      });
    }

    return badges;
  },


  'card-detail-badges': async (t) => {
    const { size = null, spent = null } = await t.get('card', 'shared') || {};

    const badges = [];

    if (!size && !spent) {
      badges.push({
        title: 'Size',
        text: 'Set card size',
        color: 'green',
        callback: callback,
      });
    }

    if (size !== null) {
      badges.push({
        title: 'Size',
        text: `${size}`,
        color: 'orange',
        callback: callback,
      });
    }

    if (spent !== null) {
      badges.push({
        title: 'Spent',
        text: `${spent}`,
        color: 'green',
        callback: callback,
      });
    }

    if (size !== null && spent !== null) {
      const remaining = Math.max(size - spent, 0);

      badges.push({
        title: 'Remaining',
        text: `${remaining}`,
        color: 'blue',
        callback: callback,
      });
    }

    return badges;
  }
});
