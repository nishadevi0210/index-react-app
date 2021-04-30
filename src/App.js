import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<Structure />
	);	
}

const Structure = () => {
	return (
		<div className="container pt-3 notepad">
			<Header />
			<List />
			<br />
		</div>
	);
}

const Header = () => {
	return(
		<div>
			<header className="bg-success notes-title">
				<p className="pp"> Notes
					<span className="badge badge-light" id="badgeCount">{}</span>
				</p>
			</header>
		</div>
	);
}

const List = () => {
	//const [state, setstate] = useState({data:""})
	const [notesList, setList] = React.useState([]);
	const [textArea, setTextArea] = React.useState("");
	const addNew = () => {
		setTextArea("");
	}

	const changeTextArea = (event) => {
		setTextArea(event.target.value);
	}

	const saveNote = () => {
		if (textArea !== "") {
			let index = notesList.indexOf(textArea);
			if (index !== -1) {
				alert("note already exists");
			} else {
				setList(notesList.concat(textArea));
				addNew();
			}
		} else { 
			alert("empty note cannot be saved");
		}
	}

	return(
	<div>
		<div className="notes-list">
			<ul className="list-group" id="list">
			{
				notesList.map((item) => (
					<ListItem key={item} val={item} />
				))
			}
			</ul>
			<button type="button" className="btn btn-success" id="add" onClick={addNew}>Add new note</button>
		</div>
		<div>
			<div className="notes-text">
				<textarea name="textarea" value={textArea} onChange={changeTextArea} placeholder="Write here..." id="textArea"></textarea>
				<button type="button" className="btn btn-success" id="done" onClick={saveNote}>Done</button>
			</div>
		</div>
	</div>
	);
}

const ListItem = (props) => {
	console.log("here", props);
	return(
		<li className="list-group-item-success" id="note'+i+'" noteid="'+i+'"> {props.val} ....
			<button type="button" className="btn btn-danger btn-sm btn-del" noteid="'+i+'">Delete</button>
		</li>
	);
}

export default App;

	/*function deleteNote() {
		console.log("chal pda");
		var num = $(this).attr("noteId");
				notesList.splice(num, 1);
				createList(notesList);
	} 

	function addHover() {
		console.log("hover is on");
		document.getElementById("list").style.color = "#ff00ff";
	}

	function removeHover() {
		console.log("hover is off");
		document.getElementById("list").style.color = "#155724";
	}*/

/*function myFunction() {
	function handleClick(e) {    
		e.preventDefault();
		console.log('button is clicked');
	}
	return (
		<button onClick={handleClick}>
			Click me
		</button>
	);
}*/