import axios from "axios";
import { useEffect, useState } from "react";
import "./history.css";

type HistoryProps = {
  signs: string;
};

const History: React.FC<HistoryProps> = (props: HistoryProps) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios.get("http://62.113.105.69:3000/threecalchistory").then((response) => {
      setHistory(
        response.data.map((e: any) => {
          return  (
            <section>
              <span>{e.datetime}</span>
              <span style={{color:"#aa707050"}}> | </span>
              <span style={{color:"pink"}}>{e.operation}</span>
            </section>
          )
        })
      );
    });
  }, [props.signs]);

  return (
    <div className="calc-history">
      <div style={{marginTop:"30px"}}>Operations history:</div>
      <div style={{width:"fit-content",margin:"30px auto"}}>
        {history.map((e: string) => {
          return <div style={{ textAlign: "left" }}>{e}</div>;
        })}
      </div>
    </div>
  );
};

export default History;
