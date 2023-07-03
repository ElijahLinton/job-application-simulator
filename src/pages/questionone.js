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
      <header className="app-header">
        <h1>Job application simulator</h1>
      </header>
      <section className="questions">
        <form className="active">
        <h3>First Name?</h3>
        <input
          type="text"
          placeholder="Firstname"
          className="userInput"
          onChange={(e) => setResponse(e.target.value)}
        />
        <button type="submit" className='submitBtn' onClick={saveData}>
          submit
        </button>
        </form>

        <form className="inactive">
        <h3>Last Name?</h3>
        <input
          type="text"
          placeholder="explain why would you be a good fit for this position?"
          className="userInput"
          onChange={(e) => setResponse(e.target.value)}
        />
        <button type="submit" className='submitBtn' onClick={saveData}>
          submit
        </button>
        </form>
        
        
        <form className="inactive">
        <h3>Mobile/Phone</h3>
        <input
          type="text"
          placeholder="Dont put a real number!"
          className="userInput"
          onChange={(e) => setResponse(e.target.value)}
        />
        <button type="submit" className='submitBtn' onClick={saveData}>
          submit
        </button>
        </form>

        <form className="inactive">
        <h3>would you be a good fit for this position?</h3>
        <input
          type="text"
          placeholder="why would you be a good fit for this position?"
          className="userInput"
          onChange={(e) => setResponse(e.target.value)}
        />
        <button type="submit" className='submitBtn' onClick={saveData}>
          submit
        </button>
        </form>
      </section>

      <footer>
        <p>socials</p>
      </footer>

    </div>
  );
}

export default Questionone;