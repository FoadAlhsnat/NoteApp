import React, { ReactElement } from "react";
import { nodeModuleNameResolver, setSyntheticLeadingComments } from "typescript";
import { Note } from "../types";
import Notes from "./Notes";
type NoteListProps = {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
};



const NoteList: React.FC<NoteListProps> = ({ notes ,setNotes}) => {

    const deleteHandler = (id:string) => {
        setNotes(notes.filter(note=>note.id!==id))
        
    };
  const renderNotes = (): JSX.Element[] => {
    return notes.map((note) => {
      return <Notes key={note.id} note={note} callBack={deleteHandler} />;
    });
  };

  return (
    <>
      <h2 className="mt-3">Notes</h2>
      <div>{renderNotes()}</div>
    </>
  );
};

export default NoteList;
