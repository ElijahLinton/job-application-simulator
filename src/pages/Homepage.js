import { useState } from "react";


function Homepage() {
  const [indexPage, setIndexPage] = useState(1);
  function handleAnswer(){
    
    var answer = new FormData(document.querySelector("form"));
        console.log("form data: ");
        for(var pair of answer.entries()){
          console.log(pair[0]+':' +pair[1]);
        }
        return false;
  }



  return (
    <div>
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
              
            <label className="container">web developer
                <input type='radio' name="radio"/>
                    <span className='checkmark'></span>
             </label>

             <label className="container"> Data analyst
                <input type='radio' name="radio"/>
                    <span className='checkmark'></span>
             </label>

             <label className="container"> sales repesenative
                <input type='radio' name="radio"/>
                    <span className='checkmark'></span>
             </label>
             <input type="submit" name="submit" value='submit'/>
           </form>
        </section>

      <footer>
        <p>socials</p>
      </footer>
    </div>
  );
}

export default Homepage;
