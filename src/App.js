import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<Structure />
	);	
}

function Structure () {
	return (
		<div className="container pt-3 notepad">
			<Header />
			<List />
			<br />
			<Text />
		</div>
	);
}

function Header () {
	return(
		<div>
			<header className="bg-success notes-title">
				<p className="pp"> Notes
					<span className="badge badge-light" id="badgeCount">0</span>
				</p>
			</header>
		</div>
	);
}

function List () {
	function addNew() {
		document.getElementById("textArea").value = "";
	}
	return(
			<div className="notes-list">
				<ul className="list-group" id="list"></ul>
				<button type="button" className="btn btn-success" id="add" onClick={addNew}>Add new note</button>
			</div>
	);
}

function Text () {
	let notesList = [];

	function saveNote() {
		let textArea = document.getElementById("textArea").value;
		if (textArea !== "") {
			let index = notesList.indexOf(textArea);
			if (index != -1) {
				alert("note already exists");
			} else {
				notesList.push(textArea);
				createList(notesList);
			}	
		} else { 
			alert("empty note cannot be saved");
		}
	}

	function createList(notesList) {
		let text = "";
		let notesListSize = notesList.length;
		for (let i = 0; i < notesListSize; i++) {
			let notesName1 = notesList[i];
			let notesName2 = notesName1.slice(0, 15);
			
			text += '<li class="list-group-item-success" id="note'+i+'" noteId="'+i+'">'+ notesName2 +' ....\
			<button type="button" className="btn btn-danger btn-sm btn-del" noteId="'+i+'">Delete</button>\
			</li>';
		}
		document.getElementById("list").innerHTML = text;
		document.getElementById("badgeCount").innerHTML = notesListSize;
	}

	return(
		<div>
			<div className="notes-text">
				<textarea name="textarea" placeholder="Write here..." id="textArea"></textarea>
				<button type="button" className="btn btn-success" id="done" onClick={saveNote}>Done</button>
			</div>
		</div>	
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