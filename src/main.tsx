import React from "react";
import ReactDOM from "react-dom/client";

import { Auth0Provider } from "@auth0/auth0-react";

import { App } from "./App.js";
import { environment } from "@config/environment.js";

const redirect_uri = window.location.origin;
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={environment.AUTH0_DOMAIN}
      clientId={environment.CLIENT_ID}
      authorizationParams={{
        redirect_uri,
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
