import React from "react";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

function Count(){
	return(
		<div className="count">
		    <Provider store={store}>
		      <App />
		    </Provider>
		</div>
	)
}

export default Count;

