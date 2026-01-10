TrelloPowerUp.initialize({
  'card-buttons': function (t) {
    return [{
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
  },

  'card-detail-badges': function (t) {
    return t.get('card', 'shared').then(data => {
      const estimate = Number(data.estimate) || 0;
      const spent = Number(data.spent) || 0;
      const remaining = Math.max(estimate - spent, 0);

      if (!estimate && !spent) return [];

      return [{
        title: 'Time tracking',
        text: `Estimate: ${estimate}h\nSpent: ${spent}h\nLeft: ${remaining}h`,
        color: spent > estimate ? 'red' : 'green'
      }];
    });
  }
});



