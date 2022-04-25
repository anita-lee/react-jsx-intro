"use strict"

function Person({ name, age, hobbies }){
  return (
    <div>
      <p>
        Learn some information about this person.
        <h3>
          { name.length > 8 ? name.slice(0,6) : name}, { age > 18 ? "please go vote!" :"you must be 18."}
        </h3>
        <ol>
          Hobbies: {hobbies.map(h => <li>{h}</li> )}
        </ol>
      </p>
    </div>
  );
}