import { useState } from 'react';
import generator from "./generator"

const App = () => {
  const [question, setQuestion] = useState();
  const generateQuestion = () => setQuestion(generator());
  return (
    <div style={{display:"flex", flexDirection: "column", alignItems: "center"}}>
      <p style={{fontSize: "2rem", fontWeight: "400"}}>MCQ Quiz Generator - Bubble Sort</p>
      <div onClick={()=>generateQuestion()} style={{padding: "10px 30px", background: "#e76f51", color: "#ffffff", cursor: "pointer"}}>Generate Question</div>
      <div style={{margin: "30px 0", background: "#E9C46A", width: "80vw", padding: "50px", borderRadius: "10px"}}>
      {question ? <>
        <div>
          Question: {question.question}
        </div>
        <div>
          {question.options.map((opt, ind) => 
            <div key={ind} style={{background: "#E76F51", margin:"10px 0", color: "#ffffff", padding: "8px", borderRadius:"5px"}}>{String.fromCharCode(65+ind)})&nbsp;&nbsp;&nbsp; {JSON.stringify(opt)}</div>
          )}
        </div>
        <div style={{background: "#2A9D8F", color: "#ffffff", width:"max-content", padding: "8px", borderRadius:"5px"}}>
          Answer: {String.fromCharCode(65+question.answer)}
        </div>
      </> : <>Press button to generate a question</> }
      </div>
    </div>
  );
}

export default App;
