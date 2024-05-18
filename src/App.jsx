import { CORE_CONCEPTS } from "./data"; //using {} since CORE_CONCEPTS is a name-export constant
import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";
import { useState } from "react"; //userState is called React Hook
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState(); //userState() returns a array[] that contains 2 elements: stateValue & setStateValue()

  function handleSelect(selectedTopicButton) {
    /*React set a schedule to execute the setStateValue function.
      So, it's strongly recommended to use setStateValue() with the help of a callback function like the arrow function */
    setSelectedTopic(() => selectedTopicButton);
    console.log(selectedTopic); //the value of state always 1 step slower than the value rendered on web page since React yielded the execution of setStateValue()
  }

  //Rendering content conditionally
  let tabContent = "";

  !selectedTopic //Using ternary expression if selectedTop === undefined
    ? (tabContent = <p>Please select a topic.</p>)
    : (tabContent = (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      ));

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
            {/*COMMON PATTERN: Passing Custom Arguments to Event Functions with the Help of Arrow Function*/}
            <TabButton
              isActive={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isActive={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isActive={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isActive={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
