TrelloPowerUp.initialize({
  'card-buttons': function (t) {
    return [{
      text: 'Set time',
      callback: function (t) {
        return t.popup({
          title: 'Estimate / Spent',
          url: './popup.html',
          height: 220
        });
      }
    }];
  },

  'card-badges': function (t) {
    return t.get('card', 'shared').then(data => {
      const estimate = Number(data.estimate) || 0;
      const spent = Number(data.spent) || 0;
      const remaining = Math.max(estimate - spent, 0);

      if (!estimate && !spent) return [];

      return [{
        text: `⏱ ${estimate} / ${spent} / ${remaining}`,
        color: spent > estimate ? 'red' : 'green'
      }];
    });
  }
});
