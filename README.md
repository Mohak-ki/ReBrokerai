# BrokerAI web app

Dependency-free responsive browser client for the BrokerAI backend. It uses the real authentication and leads APIs—there is no static demo inventory or hard-coded CRM data.

1. Set `apiBaseUrl` in `config.js` for the deployed API. The local BrokerAI backend uses port `8081` so it can run alongside other projects.
2. Serve this directory with `node serve.js`.
3. Open `http://localhost:5173`, register an owner, then add and manage leads.

The browser client is intentionally kept as a standalone delivery during the initial workflow build. It can later be moved behind a production web server and connected to the Properties, Matching, Visits and Deals API modules as they are delivered.
