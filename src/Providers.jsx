import { element } from "prop-types";
import { Fragment } from "react";
import { Provider } from "react-redux";
import store from "./Redux";
const Providers = ({ children }) => (
	<Fragment>
		<Provider store={store}>{children}</Provider>
	</Fragment>
);
Providers.defaultProps = {
	children: <div>No Content</div>,
};
Providers.propTypes = {
	children: element,
};
export default Providers;
