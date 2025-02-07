import React, { useState, useEffect } from "react";
import "../ui/styles/GridTable.css";
import Title from "../Assets/Title";
import CheckToken from "../Context/CheckToken";

interface Data {
  id: number;
  name: string;
  sellerId: number;  
}
interface DataProps {
  namePage: string;
}

const DataGrid: React.FC<DataProps> = ({ namePage })   => {
  const [data, setData] = useState<Data[]>([]); // Always handle data as an array

  useEffect(() => {
    const token = localStorage.getItem("token");

    console.log(token);
    const headers = { Authorization: "Bearer " + token };
    fetch("http://localhost:5000/getAllItems", { headers })
      .then((res) => res.json())
      .then((responseData) => {
        // Check if the response is an array or a single object
        const dataArray = Array.isArray(responseData)
          ? responseData
          : [responseData];
        setData(dataArray); // Set data to an array (single item wrapped in array)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const isTokenActive = CheckToken();

  const handlerefresh = () => {
    console.log("Status Token", isTokenActive);

    if (!isTokenActive) {
      window.location.reload();
    }
  };

  return (
    <div onClick={handlerefresh} >
      <div className="wrapper wrapper--w790">
        <div >
          <Title modulename={namePage} />
          <div
            style={{
              padding: "5px",
              margin: "10px",
              borderRadius: "10px",
            }}
          >
            <table style={{
              padding: "5px",
              borderRadius: "10px",
            }}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Seller ID</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.name}</td>
                    <td>{row.sellerId}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataGrid;
