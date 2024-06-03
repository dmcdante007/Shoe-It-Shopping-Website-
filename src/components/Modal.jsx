import React, { useContext, useRef, useState, useEffect } from "react";
import ContextApi from "./Context";
import { Modal, Button, Col, Row, ListGroup } from "react-bootstrap";

const ModalIs = () => {
  const ctx = useContext(ContextApi);
  const title = useRef();
  const desc = useRef();
  const [notes, setNotes] = useState([]);
  const [noteCount, setNoteCount] = useState(0);

    

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await fetch('https://react-http-a9f15-default-rtdb.asia-southeast1.firebasedatabase.app/notes.json');
      const data = await response.json();
      const loadedNotes = [];
      for (const key in data) {
        loadedNotes.push({
          id: key,
          title: data[key].title,
          desc: data[key].desc
        });
      }
      setNotes(loadedNotes);
    } catch (error) {
      console.error('Failed to fetch notes:', error);
    }
  };

  const submitButtonHandler = async (e) => {
    e.preventDefault();
    const obj = {
      title: title.current.value,
      desc: desc.current.value,
    };

    console.log(obj);
    ctx.values.appendArr(obj);
    
    try {
      const response = await fetch('https://react-http-a9f15-default-rtdb.asia-southeast1.firebasedatabase.app/notes.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: title.current.value,
          desc: desc.current.value
        })
      });
      const data = await response.json();
      setNotes(prevNotes => [...prevNotes, { id: data.name, ...obj }]);
      ctx.values.TotalNotes(prevCount => prevCount + 1);

    } catch (error) {
      console.error('Failed to post title:', error);
    }

    ctx.values.handleOpen();
  };

  const deleteNoteHandler = async (id) => {
    try {
      await fetch(`https://react-http-a9f15-default-rtdb.asia-southeast1.firebasedatabase.app/notes/${id}.json`, {
        method: 'DELETE'
      });
      setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
      ctx.values.TotalNotes(prevCount => prevCount - 1);
    } catch (error) {
      console.error('Failed to delete note:', error);
    }
  };

  return (
    <div>
      <Modal show={ctx.values.open} onHide={ctx.values.handleOpen}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={submitButtonHandler}>
            <label htmlFor="title">Note Title:</label>
            <input type="text" id="title" ref={title} required /> <br />
            <label htmlFor="desc"> Note Desc:</label>
            <textarea id="desc" rows={2} ref={desc} required></textarea>
            <br />
            <button type="submit"> Add To Book</button>
            <button type="button" onClick={ctx.values.handleOpen}> Close</button>
          </form>
        </Modal.Body>
      </Modal>
      <ListGroup>
        {notes.map(note => (
          <ListGroup.Item key={note.id}>
            <Row>
              <Col xs={10}>
                <h5>{note.title}</h5>
                <p>{note.desc}</p>
              </Col>
              <Col xs={2} className="text-right">
                <Button variant="danger" onClick={() => deleteNoteHandler(note.id)}>Delete</Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default ModalIs;