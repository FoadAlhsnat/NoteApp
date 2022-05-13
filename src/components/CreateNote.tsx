import React, { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { Note } from "../types";
type CreateNoteProps = {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
};

const CreateNote: React.FC<CreateNoteProps> = ({ notes, setNotes }) => {
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [color, setColor] = useState<string>("#dfdfdf");
  const [error, serError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title || !text) {
      serError("All Fields are mandatory");
      return;
    }
    serError("");
    const newNote: Note = {
      id: new Date().toString(),
      title,
      text,
      color,
      date: new Date().toString(),
    };
    setNotes([...notes, newNote]);
    setText("");
    setTitle("");
  };
  return (
    <>
      <h2>Create Notes</h2>
      <Form className="my-3" onSubmit={handleSubmit}>
        {error && <Alert variant={"danger"}>{error}</Alert>}
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={title}
            type="text"
            placeholder="Enter Title for the Note"
            onChange={(e) => setTitle(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Text</Form.Label>
          <Form.Control
            value={text}
            as={"textarea"}
            rows={3}
            placeholder="Enter Text for the Note"
            onChange={(e) => setText(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="colorInput">Notes Color</Form.Label>
          <Form.Control
            type="color"
            id="colorInput"
            defaultValue="#dfdfdf"
            title="Choose your color"
            onChange={(e) => setColor(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" className="my-3" variant="primary">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default CreateNote;
