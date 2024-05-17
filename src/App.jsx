import { CORE_CONCEPTS } from "./data"; //using {} since CORE_CONCEPTS is a name-export constant
import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";
import { useState } from "react"; //userState is called React Hook

function App() {
  const [selectedTopic, setSelectedTopic] = useState("Please click a button"); //userState() returns a array[] that contains 2 elements: stateValue & setStateValue()
  let dynamicContent = selectedTopic;
  function handleSelect(selectedButton) {
    /*React set a schedule to execute the setStateValue function.
      So, it's strongly recommended to use setStateValue() with the help of a callback function like the arrow function */
    setSelectedTopic(() => selectedButton);
    dynamicContent = selectedTopic;
    console.log(selectedTopic); //the value of state always 1 step slower than the value rendered on web page since React yielded the execution of setStateValue()
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            {/* ALTERNATIVE:
              Since each elelement of the CORE_CONCEPTS array is an "object" tha has 
              sililar properties to props names of the <CoreConcept/> component, we
              can use the spread operator to spread object's properties for the props
              of the component.
          */}
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            {/*COMMON PATTERN: Passing Custom Arguments to Event Functions with the Help of Arrow Function*/}
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("Props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {dynamicContent}
        </section>
      </main>
    </div>
  );
}

export default App;
