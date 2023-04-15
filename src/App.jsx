import data from "./data.js";
import Questions from "./components/Questions.jsx";

import { useState } from "react";

const App = () => {
  // set useState
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <Questions questions={questions} />
    </main>
  );
};
export default App;
