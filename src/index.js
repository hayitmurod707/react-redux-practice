import { Fragment, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Providers from "./Providers";
import "./style.css";
const root = createRoot(document.getElementById("root"));
root.render(
	<StrictMode>
		<Fragment>
			<Providers>
				<App />
			</Providers>
		</Fragment>
	</StrictMode>
);
