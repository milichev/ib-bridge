const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8887');

ws.on('open', () => {
    console.log('Connected to Java Bridge');

    // 1. Connect to IBKR (Gateway Paper by default: 7497)
    ws.send(JSON.stringify({
        type: 'connect',
        host: '127.0.0.1',
        port: 7497,
        clientId: 1
    }));

    // 2. Wait a bit then request AAPL Market Data
    setTimeout(() => {
        console.log('Requesting Market Data for AAPL...');
        ws.send(JSON.stringify({
            type: 'reqMktData',
            id: 1001,
            symbol: 'AAPL',
            secType: 'STK',
            currency: 'USD',
            exchange: 'SMART'
        }));
    }, 2000);
});

ws.on('message', (data) => {
    const msg = JSON.parse(data);
    console.log('Received:', msg);
});

ws.on('error', (err) => {
    console.error('Socket error:', err);
});

ws.on('close', () => {
    console.log('Disconnected');
});
