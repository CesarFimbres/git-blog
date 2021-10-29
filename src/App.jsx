// import "./App.css";

import Button from "./components/commons/Button";
import TextEditor from "./components/commons/TextEditor";



function App() {
	return (
		<div className="app">
			<h1 className='h1 text_pri'>Grupo intecsa editor de blog</h1>
			<Button text="Cesar" />

			<div className="card">
				<TextEditor />
			</div>
		</div>
	);
}

export default App;
