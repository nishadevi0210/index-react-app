import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div className="container pt-3 notepad">
			<header className="bg-success notes-title">
				<p className="pp"> Notes
					<span className="badge badge-light">0</span>
				</p>
			</header>
			<div className="notes-list">
				<ol className="list-group"></ol>
				<button type="button" click className="btn btn-success" id="add">Add new note</button>
			</div>
			<br />
			<div className="notes-text">
				<textarea name="textarea" placeholder="Write here..." id="textArea"></textarea>
				<button type="button" className="btn btn-success" id="done">Done</button>
			</div>
		</div>
	);
}


export default App;