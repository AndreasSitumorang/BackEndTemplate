import React, { useState, useEffect } from "react";
import "../ui/styles/MainPage.css";

interface Data {
  id: number;
  name: string;
  sellerId: number;
}

const Dashboard: React.FC = () => {
  const [data, setData] = useState<Data[]>([]); // Always handle data as an array

  useEffect(() => {
    fetch("https://localhost:44374/getItemsByName")
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

  return (
    <div className="white-background">
      <table>
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
  );
};

export default Dashboard;
