import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@app/credicar",
  app: () =>
    System.import("http://localhost:3001/microfrontend.js"),
  activeWhen: ["/credicar"], 
});

// registerApplication({
//   name: "@app/microfrontend2",
//   app: () =>
//     System.import("http://localhost:3002/microfrontend2/main.js"),
//   activeWhen: ["/microfrontend2"],
// });

start();
