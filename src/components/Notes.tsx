import React from "react";
import { Button, Card } from "react-bootstrap";
import { Note } from "../types";

type NotesProps = {
  note: Note;
  callBack:(id: string) => void
};
const Notes: React.FC<NotesProps> = ({ note,callBack }) => {
  return (
    <div className="my-3">
      <Card style={{backgroundColor:note.color}}>
        <Card.Body>
          <Card.Title>{note.title}</Card.Title>
          <Card.Text>{note.text}</Card.Text>
          <Card.Subtitle className="text-muted">
            {note.date.slice(0, 21)}
          </Card.Subtitle>
          <Button className="my-3" variant="danger" onClick={()=>callBack(note.id)}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Notes;
