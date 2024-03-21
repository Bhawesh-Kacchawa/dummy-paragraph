import { useState } from "react";
import data from "./data"

const App = () => {
  const [count, setCount] = useState(1)
  const [text, setText] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setText(data.slice(0, amount));
  }

  return <section className="section-center">
    <h4>Tired of boring lorem ipsum</h4>
    <form className="lorem-form" onSubmit={handleSubmit}>
      <label htmlFor="amount">Paragraphs :</label>
      <input type="number" name="amount" id="amount" min="1" max="8" value={count} onChange={(e) => setCount(e.target.value)} />
      <button className="btn" type="submit">Generate</button>
    </form>

    <article className="lorem-text"> 
      {text.map((item,index)=>{
        return <p key={index}>{item}</p>
      })}
    </article>
  </section>
};
export default App;










// import { useState} from "react"
// import Paragraphs from "./Paragraphs";
// import text from "./data"

// const App = () => {
//   const [inputValue, setInputValue] = useState(1)
//   const [data, setData] = useState(text)
//   const [paragraphs, setParagraphs] = useState([data[0]])


//   const showParagraph = (value) => {
//     const arr = [...text]
//     const filteredArr = arr.splice(0,value)
//     setParagraphs(filteredArr);
//   }


//   return <div className="container">
//     <h2 className="title">tired of boring lorem ipsum ?</h2>
//     <div className="header">
//       <form action="">
//         <label for="number">Paragraph:</label>
//         <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} min={1} max={9} type="number" />
//       </form>

//       <button type="button" className="btn" onClick={() => showParagraph(inputValue)}> Generaate</button>
//     </div>
//     <Paragraphs paragraphs={paragraphs} />
//   </div>
// };
// export default App;
