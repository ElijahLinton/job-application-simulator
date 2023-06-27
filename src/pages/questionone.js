import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase";

function Questionone() {
  const [response, setResponse] = useState("");
  const saveData = async (e) => {
    e.preventDefault();

    try {
      const saveQuestion = await addDoc(collection(db, "questions"), {
        response: response,
      });
      console.log("Document ID: ", saveQuestion.id);
    } catch (e) {
      console.error("something is wrong with the way the data is collected ", e);
    }
  };

  return (
    <div className="body">
            <header className="app-header">
        <h1>Job application simulator</h1>
      </header>
      <section className="questions">
        <h3>explain why would you be a good fit for this position?</h3>
        <form onSubmit={saveData}>
        <input
          type="text"
          placeholder="explain why would you be a good fit for this position?"
          onChange={(e) => setResponse(e.target.value)}
        />
        <button type="submit" >
          submit
        </button>
        </form>
      </section>
    </div>
  );
}

export default Questionone;