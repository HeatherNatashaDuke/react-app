import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Hey Peeps!</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>Click Me!</Button>
    </div>
  );
  // let cities = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // const handleSelectCity = (city: string) => {
  //   console.log(city);
  // };
  // return (
  //   <div>
  //     <ListGroup
  //       cities={cities}
  //       heading={"Cities"}
  //       onSelectCity={handleSelectCity}
  //     />
  //   </div>
  // );
}

export default App;
