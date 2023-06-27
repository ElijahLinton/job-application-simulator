import { useState } from "react";
import { json } from "react-router-dom";
import { Link } from "react-router-dom";

function Homepage() {
  const [indexPage, setIndexPage] = useState(1);
  function handleAnswer(e) {
    e.preventDefault();
    const answers = [
      ...document.querySelectorAll("input[type=radio]:checked"),
    ].reduce((a, { name, value }) => ((a[name] = value), a), {});
    localStorage.setItem("answers: ", JSON.stringify(answers));
  }

  return (
    <div className="body">
      <header className="app-header">
        <h1>Job application simulator</h1>
      </header>
      <section className="current">
        <p>
          welcome to the job application simulator this is a simulater SO DO NOT
          PUT REAL PERSONAL INFO and most importantly enjoy
        </p>
      </section>

      <section className="inactive">
        <h1>What position are you interested in?</h1>
        <form onSubmit={handleAnswer}>
          <label className="container">
            web developer
            <input type="radio" name="web developer" />
            <span className="checkmark"></span>
          </label>

          <label className="container">
            {" "}
            Data analyst
            <input type="radio" name="Data analyst" />
            <span className="checkmark"></span>
          </label>

          <label className="container">
            {" "}
            sales repesenative
            <input type="radio" name="sales repesenative" />
            <span className="checkmark"></span>
          </label>
          <button className="submitBtn">submit </button>
        </form>
      </section>

      <Link to="/quest">
        <button>next</button>
      </Link>
      
      <footer>
        <p>socials</p>
      </footer>
    </div>
  );
}

export default Homepage;
