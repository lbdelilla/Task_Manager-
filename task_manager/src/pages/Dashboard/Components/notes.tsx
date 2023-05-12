import { useState } from 'react';
import "../notes.css";

interface INote {
    noteTitle: string;
    noteDescription: string;
    noteDate: string;
}
const Notes = () => {
    // const [newNote, setNewNote] = useState<string>("");
    const [notes, setNotes] = useState<INote[]>([]);
    const [noteTitle, setNoteTitle] = useState('');
    const [noteDescription, setNoteDescription] = useState('');
    const [starColor, setStarColor] = useState("black")


    const addNote = (noteTitle: string, noteDescription: string): void => {
        const now = new Date();
        const noteDate = `${now.getDate()} ${now.toLocaleString('default', { month: 'long' })} ${now.getFullYear()}`;
        const newNotes: INote[] = [...notes, { noteTitle, noteDescription, noteDate }];
        setNotes(newNotes);
        console.log(notes)
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

    const toggleStarColor = (): void => {
        setStarColor("#ffc107")
    };



    return (
        <div className="page-content container note-has-grid">
            <ul className="nav nav-pills p-2 bg-white my-5 rounded-pill align-items-center">
                <li className="nav-item">
                    <a href='' className="nav-link rounded-pill note-link d-flex align-items-center px-2 px-md-3 mr-0 mr-md-2 active" id="all-category">
                        <i className="icon-layers mr-1"></i><span className="d-none d-md-block">All Notes</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href='' className="nav-link rounded-pill note-link d-flex align-items-center px-2 px-md-3 mr-0 mr-md-2" id="note-business"> <i className="icon-briefcase mr-1"></i><span className="d-none d-md-block">Business</span></a>
                </li>
                <li className="nav-item">
                    <a href='' className="nav-link rounded-pill note-link d-flex align-items-center px-2 px-md-3 mr-0 mr-md-2" id="note-social"> <i className="icon-share-alt mr-1"></i><span className="d-none d-md-block">Social</span></a>
                </li>
                <li className="nav-item">
                    <a href='' className="nav-link rounded-pill note-link d-flex align-items-center px-2 px-md-3 mr-0 mr-md-2" id="note-important"> <i className="icon-tag mr-1"></i><span className="d-none d-md-block">Important</span></a>
                </li>
                <li className="nav-item">
                    <button className="btn btn-outline-primary rounded px-3 py-1" id="add-notes" data-bs-toggle="modal" data-bs-target="#addnotesmodal">Add Notes</button>
                </li>
            </ul>
            <div className="tab-content bg-transparent">
                <div id="note-full-container" className="note-has-grid row">
                    {notes.map((note: INote, i: number) => (
                        <div className="col-md-6 single-note-item all-category" key={i}>
                            <div className="notes-card card card-body">
                                <span className="side-stick"></span>
                                <h5 className="note-title mb-0" >{note.noteTitle}</h5>
                                <p className="note-date text-muted" style={{ fontSize: parseInt("12px") }}>{note.noteDate}</p>
                                <div className="note-content">
                                    <p className="note-inner-content text-muted">{note.noteDescription}</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="card-icons">
                                        <button className="star-btn btn p-0" onClick={() => toggleStarColor()}><i className="fa fa-star" style={{color: starColor}}></i></button>
                                    <button className="btn"><i className="fa fa-trash remove-note" onClick={() => removeNote(i)}></i></button>
                                </div>
                                <div className="dropdown">
                                    <button className="btn btn-outline-primary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    </button>
                                    <ul className="dropdown-menu category-menu">
                                        <li>
                                            <a className="dropdown-item note-business badge category-business bg-success">
                                                <i className="bi bi-circle-fill me-1"></i>Business
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item note-social badge category-social bg-info" >
                                                <i className="bi bi-circle-fill me-1"></i>Social
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item note-important badge category-important bg-danger" >
                                                <i className="bi bi-circle-fill me-1"></i>Important
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        </div>
                    ))}
                {/* <div className="col-md-6 single-note-item all-category note-important" >
                        <div className="notes-card card card-body">
                            <span className="side-stick"></span>
                            <h5 className="note-title text-truncate w-75 mb-0" data-noteheading="Go for lunch">Go for lunch <i className="point fa fa-circle ml-1 font-10"></i></h5>
                            <p className="note-date font-12 text-muted">01 April 2002</p>
                            <div className="note-content">
                                <p className="note-inner-content text-muted" data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.">Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="card-icons">
                                    <span className="mx-1"><i className="fa fa-star favourite-note"></i></span>
                                    <span className="mx-1"><i className="fa fa-trash remove-note"></i></span>
                                </div>
                                <div className="dropdown">
                                    <button className="btn btn-outline-primary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    </button>
                                    <ul className="dropdown-menu category-menu">
                                        <li>
                                            <a className="dropdown-item note-business badge category-business bg-success" >
                                                <i className="bi bi-circle-fill me-1"></i>Business
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item note-social badge category-social bg-info" >
                                                <i className="bi bi-circle-fill me-1"></i>Social
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item note-important badge category-important bg-danger" >
                                                <i className="bi bi-circle-fill me-1"></i>Important
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 single-note-item all-category note-business" >
                        <div className="notes-card card card-body">
                            <span className="side-stick"></span>
                            <h5 className="note-title text-truncate w-75 mb-0" data-noteheading="Give Review for design">Give Review for design <i className="point fa fa-circle ml-1 font-10"></i></h5>
                            <p className="note-date font-12 text-muted">02 January 2000</p>
                            <div className="note-content">
                                <p className="note-inner-content text-muted" data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.">Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="card-icons">
                                    <span className="mx-1"><i className="fa fa-star favourite-note"></i></span>
                                    <span className="mx-1"><i className="fa fa-trash remove-note"></i></span>
                                </div>
                                <div className="dropdown">
                                    <button className="btn btn-outline-primary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    </button>
                                    <ul className="dropdown-menu category-menu">
                                        <li>
                                            <a className="dropdown-item note-business badge category-business bg-success" >
                                                <i className="bi bi-circle-fill me-1"></i>Business
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item note-social badge category-social bg-info" >
                                                <i className="bi bi-circle-fill me-1"></i>Social
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item note-important badge category-important bg-danger" >
                                                <i className="bi bi-circle-fill me-1"></i>Important
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 single-note-item all-category note-social" >
                        <div className="notes-card card card-body">
                            <span className="side-stick"></span>
                            <h5 className="note-title text-truncate w-75 mb-0" data-noteheading="Nightout with friends">Nightout with friends <i className="point fa fa-circle ml-1 font-10"></i></h5>
                            <p className="note-date font-12 text-muted">01 August 1999</p>
                            <div className="note-content">
                                <p className="note-inner-content text-muted" data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.">Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="card-icons">
                                    <span className="mx-1"><i className="fa fa-star favourite-note"></i></span>
                                    <span className="mx-1"><i className="fa fa-trash remove-note"></i></span>
                                </div>
                                <div>
                                    <div className="dropdown">
                                        <button className="btn btn-outline-primary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        </button>
                                        <ul className="dropdown-menu category-menu">
                                            <li>
                                                <a className="dropdown-item note-business badge category-business bg-success" >
                                                    <i className="bi bi-circle-fill me-1"></i>Business
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item note-social badge category-social bg-info" >
                                                    <i className="bi bi-circle-fill me-1"></i>Social
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item note-important badge category-important bg-danger" >
                                                    <i className="bi bi-circle-fill me-1"></i>Important
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
            </div>
        </div>

            {/* Add Notes Modal */ }

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