  var ws = new WebSocket('wss://47.93.198.160');
      ws.onmessage = function (event) {
        	updateStats(JSON.parse(event.data));
      };