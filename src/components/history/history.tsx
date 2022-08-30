import axios from "axios";
import { useEffect, useState } from "react";
import "./history.css";

const History: React.FC = () => {
  const [history, setHistory] = useState("");

  useEffect(() => {
    axios.get("http://62.113.105.69:3000/threecalchistory").then((response) => {
      setHistory(response.data[0].datetime + " " + response.data[0].operation);
      //   setHistory(response.data[]);
    });
  }, []);

  return (
    <div className="calc-history">
      <div>Operations history:</div>
      {history}
    </div>
  );
};

export default History;
