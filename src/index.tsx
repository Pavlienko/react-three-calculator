import {createRoot} from "react-dom/client";

import './index.css';
import App from './components/app';

const main = document.getElementById('root')!;

createRoot(main).render(
	<App />
)
