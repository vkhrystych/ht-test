import React from "react";
import { Task, Autocomplete } from "./components";

export const App = () => {
  const [isTDVisible, setIsTDVisible] = React.useState(false);
  const [loadLocal, setLoadLocal] = React.useState(false);

  return (
    <div className="container">
      <h1>First Deel</h1>

      <section>
        <button
          className="btn btn-primary"
          onClick={() => setIsTDVisible(!isTDVisible)}
        >
          Toggle Task Description &rarr;
        </button>
      </section>
      {isTDVisible ? <Task /> : null}

      <section>
        <h3>Local data</h3>
        <p>
          Since the API i've used is quite wonky i've also implemented an
          alternative with local data. To enable it:
        </p>
        <button className="btn" onClick={() => setLoadLocal(!loadLocal)}>
          Load local data [{loadLocal ? "On" : "Off"}]
        </button>
      </section>

      <section>
        <h3>API info</h3>
        <p>
          The API i'm using returns a list of products. You can try searching
          something like: Samsung, iPhone, laptop, microsoft etc.
        </p>
      </section>

      <section>
        <h3>Solution:</h3>
        <Autocomplete loadLocalData={loadLocal} />
      </section>
    </div>
  );
};

export default App;
