import { useState, createContext } from "react";
const counterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [showComponentB, setShowComponentB] = useState(false);
  const [randomString, setRandomString] = useState("");
  const [roomNames, setroomNames] = useState("");

  const hc = () => {
    setShowComponentB(true);
  };
  const fc = () => {
    setShowComponentB(false);
  };

  const generateRandomString = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const charactersLength = characters.length;
    const length = 10;

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setRandomString(result);
    alert(`your meeting code is ${result}`);
  };



  return (
    <counterContext.Provider
      value={{ showComponentB, hc, randomString, generateRandomString,roomNames, setroomNames,fc }}
    >
      {children}
    </counterContext.Provider>
  );
};

export default counterContext;
