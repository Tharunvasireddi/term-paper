import Notes from "../pages/Notes";

function NotesComponent() {
  const token = localStorage.getItem("token");

  return <Notes token={token} />;
}

export default NotesComponent;
