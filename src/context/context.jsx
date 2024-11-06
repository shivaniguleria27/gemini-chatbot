import { createContext, useState } from "react";
// import runChat from "../config/gemini";
export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResults(true);
    try {
      // const response = await runChat(prompt);
      const response = 'run chat';
      console.log("API Response:", response); // Add this to inspect response
      setResultData(response);
    } catch (error) {
      console.error("Error fetching chat data:", error);
    }
     setLoading(false);
     setInput("");
  };

  const ContextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResults,
    loading,
    resultData,
    input,
    setInput,
    
  };
  return (
    <Context.Provider value={ContextValue}>{props.children}</Context.Provider>
  );
};
export default ContextProvider;
