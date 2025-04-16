import { useState } from "react";
import {collection, addDoc} from "firebase/firestore"
import { db } from "../Firebase";
import { Link } from "react-router-dom";



function Questiontwo() {

  
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

    const [response, setResponse] = useState("");
    
    return (
        <div>
            <header classeName="app-header">
            <h1>Job application simulator</h1>
            </header>
            <section className="questions">
        <form className="active">
        <h3>list your refrence information here.</h3>
        <input
          type="text"
          placeholder="Reference first name"
          className="userInput"
          onChange={(e) => setResponse(e.target.value)}
        />
        
        <input
          type="text"
          placeholder="Reference last  name"
          className="userInput"
          onChange={(e) => setResponse(e.target.value)}
        />

<input
          type="text"
          placeholder="Reference phone number"
          className="userInput"
          onChange={(e) => setResponse(e.target.value)}
        />

        <button type="submit" className='submitBtn' onClick={saveData}>
          submit
        </button>
        </form>

        <form className="inactive">
        <h3> Please send your resume with experiance, and previous jobs</h3>
        <input
          type="file"
          className="userInput"
        />
        <button type="submit" className='submitBtn' onClick={saveData}>
          submit
        </button>
        </form>
        
        
        <form className="inactive">
        <h3>Are you willing to learn new skills as required?</h3>
        <input
          type="radio"
          id = "Yes"
          className="userInput"
          value="Yes"
          onChange={(e) => setResponse(e.target.value)}
        />

        <input
          type="radio"
          id = "Yes"
          className="userInput"
          value="Yes"
          onChange={(e) => setResponse(e.target.value)}
        />

        <label for="Yes">Yes</label>
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
};

export default Questiontwo;