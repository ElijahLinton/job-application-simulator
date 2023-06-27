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
      console.error("something is wrong with the way the data is collected ");
    }
  };

  return (
    <div>
      <section className="questions">
        <h3>explain why would you be a good fit for this position?</h3>
        <input
          type="text"
          placeholder="explain why would you be a good fit for this position?"
          onChange={(e) => setResponse(e.target.value)}
        />
        <button type="submit" onClick={saveData}>
          submit
        </button>
      </section>
    </div>
  );
}

export default Questionone;