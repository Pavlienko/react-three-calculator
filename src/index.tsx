import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";

import "./index.css";
import App from "./components/app";

const main = document.getElementById("root")!;

createRoot(main).render(
  <Provider store={store}>
    <App />
  </Provider>
);
