import { useEffect, useState } from 'react';

export default function Weather() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    console.log("ENV:", process.env.NEXT_PUBLIC_API_URL, process.env.API_URL);
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";
    fetch(`${apiUrl}/weather`)
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Weather Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
