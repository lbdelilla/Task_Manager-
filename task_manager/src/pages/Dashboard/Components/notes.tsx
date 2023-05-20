import { useState } from 'react';
import "../Components/notes.css";

interface INote {
    noteTitle: string;
    noteDescription: string;
    noteDate: string;
    noteTag: string;
}
const Notes = () => {
    // const [newNote, setNewNote] = useState<string>("");
    const [notes, setNotes] = useState<INote[]>([]);
    const [noteTitle, setNoteTitle] = useState('');
    const [noteDescription, setNoteDescription] = useState('');
    const [noteTag, setNoteTag] = useState('');
    const [currentCategory, setCurrentCategory] = useState("all-category");

    const addNote = (noteTitle: string, noteDescription: string): void => {
        const now = new Date();
        const noteDate = `${now.getDate()} ${now.toLocaleString('default', { month: 'long' })} ${now.getFullYear()}`;
        const newNotes: INote[] = [...notes, { noteTitle, noteDescription, noteDate, noteTag }];
        setNotes(newNotes);
    };

    

    const removeNote = (i: number): void => {
        const newNotes: INote[] = [...notes];
        newNotes.splice(i, 1);
        setNotes(newNotes);
    };

    const handleClick = (): void => {
        addNote(noteTitle, noteDescription);
        setNoteTitle("");
        setNoteDescription("");

    };

    const handleTagChange = (tag: string): void => {
        setCurrentCategory(tag === currentCategory ? "all-category" : tag);
        tag ? setNoteTag(tag) : setNoteTag('secondary');

    };

    const filteredNotes = currentCategory === "all-category"
        ? notes
        : notes.filter((note) => note.noteTag === currentCategory);

    return (
        <div className="page-content container note-has-grid">
            <ul className="nav nav-pills p-2 bg-white my-5 rounded-pill align-items-center">
                <li className="nav-item">
                    <a href='' className="nav-link rounded-pill note-link d-flex align-items-center px-2 px-md-3 mr-0 mr-md-2 active" id="all-category">
                        <i className="icon-layers mr-1"></i><span className="d-none d-md-block">All Notes</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href='' className={`nav-link rounded-pill note-link d-flex align-items-center px-2 px-md-3 mr-0 mr-md-2 ${currentCategory === "business" ? "active" : ""
                        }`}
                        onClick={() => handleTagChange("business")} id="note-business" > <i className="icon-briefcase mr-1"></i><span className="d-none d-md-block">Business</span></a>
                </li>
                <li className="nav-item">
                    <a href='' className={`nav-link rounded-pill note-link d-flex align-items-center px-2 px-md-3 mr-0 mr-md-2 ${currentCategory === "social" ? "active" : ""
                        }`}
                        onClick={() => handleTagChange("social")} id="note-social"> <i className="icon-share-alt mr-1"></i><span className="d-none d-md-block">Social</span></a>
                </li>
                <li className="nav-item">
                    <a href='' className={`nav-link rounded-pill note-link d-flex align-items-center px-2 px-md-3 mr-0 mr-md-2 ${currentCategory === "important" ? "active" : ""
                        }`}
                        onClick={() => handleTagChange("important")} id="note-important" > <i className="icon-tag mr-1"></i><span className="d-none d-md-block">Important</span></a>
                </li>
                <li className="nav-item">
                    <button className="btn btn-outline-primary rounded px-3 py-1" id="add-notes" data-bs-toggle="modal" data-bs-target="#addnotesmodal">Add Note</button>
                </li>
            </ul>
            <div className="tab-content bg-transparent">
                <div id="note-full-container" className="note-has-grid row">
                    {filteredNotes.map((note: INote, i: number) => (
                        <div className={`col-md-6 single-note-item all-category note-${note.noteTag}`} key={i}>
                            <div className="notes-card card card-body">
                                <span className="side-stick"></span>
                                <h5 className="note-title mb-0" >{note.noteTitle}</h5>
                                <p className="note-date text-muted" style={{ fontSize: parseInt("12px") }}>{note.noteDate}</p>
                                <div className="note-content">
                                    <p className="note-inner-content text-muted">{note.noteDescription}</p>
                                </div>
                                <div className="card-icons">
                                    <button className="btn p-0"><i className="fa fa-trash" onClick={() => removeNote(i)}></i></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Add Notes Modal */}

            <div className="modal fade" id="addnotesmodal" tabIndex={-1} aria-labelledby="addnotesmodalTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content border-0">
                        <div className="modal-header">
                            <h4 className="modal-title">Add a note here</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="notes-box">
                                <div className="notes-content">
                                    <form>
                                        <div className="row">
                                            <div className="col-md-12 mb-3">
                                                <div className="note-title">
                                                    <label htmlFor="note-has-title" className="form-label">Note Title</label>
                                                    <input type="text" id="note-has-title" className="form-control" minLength={25} placeholder="Title" value={noteTitle} onChange={e => setNoteTitle(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="note-description">
                                                    <label htmlFor="note-has-description" className="form-label">Note Description</label>
                                                    <textarea id="note-has-description" className="form-control" minLength={60} rows={3} placeholder="Description" value={noteDescription} onChange={e => setNoteDescription(e.target.value)}></textarea>
                                                </div>
                                            </div>
                                            <div className="col-md-4 mt-3 ms-1">
                                                <select className="form-select" aria-label="categorySelection" value={noteTag}
                                                    onChange={(e) => { e.preventDefault();  handleTagChange(e.target.value); }}>
                                                    <option className="note-business" value={"business"}>
                                                        Business
                                                    </option>
                                                    <option className="note-social" value={"social"} >
                                                        Social
                                                    </option>
                                                    <option className="note-important" value={"important"}  >
                                                        Important
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success" style={{ display: "none" }}>Save</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Discard</button>
                            <button type="button" className="btn btn-info" disabled={!noteTitle || !noteDescription} onClick={() => handleClick()}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}


export default Notes