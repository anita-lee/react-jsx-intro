"use strict"

function App() {
  return (
    <div>
      <Person name="Ana" age={5} hobbies={["golf", "baseball"]} />
      <Person name="Belle" age={52} hobbies={["golf", "baseball"]} />
      <Person name="12345678910" age={1} hobbies={["golf", "baseball"]} />
      <AlertBtn />
    </div>
  );
}