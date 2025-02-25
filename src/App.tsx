import { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1>سلام تایپ‌اسکریپت!</h1>
      <p>مقدار شمارنده: {count}</p>
      <button onClick={() => setCount(count + 1)}>افزایش</button>
    </div>
  );
}

export default App;
