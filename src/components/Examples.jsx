import { useState } from "react";

import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import { TAB_MENU } from "../data";
import Section from "./Section";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(); //userState() returns a array[] that contains 2 elements: stateValue & setStateValue()

  function handleSelect(selectedTopicButton) {
    /*React set a schedule to execute the setStateValue function.
    So, it's strongly recommended to use setStateValue() with the help of a callback function like the arrow function */
    setSelectedTopic(() => selectedTopicButton.toLowerCase());
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
    <Section title="Examples" id="examples">
      {/* The <id="examples"> PROPERTY of the Custom Component <Section> can't auto be forwarded to the built-in component in the Component Function.
        Therfore, the Component Function must use the Rest Props ({...props}) to auto forward any REMAINING PROPERTIES*/}
      <menu>
        {/*COMMON PATTERN: Passing Custom Arguments to Event Functions with the Help of Arrow Function*/}
        {TAB_MENU.map((tab) => (
          <TabButton
            isActive={selectedTopic === tab}
            onSelect={() => handleSelect(tab)}
          >
            {tab}
          </TabButton>
        ))}
      </menu>
      {tabContent}
    </Section>
  );
}
