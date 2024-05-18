import { CORE_CONCEPTS } from "../data"; //using {} since CORE_CONCEPTS is a name-export constantr
import CoreConcept from "../components/CoreConcept";
import Section from "./Section";

export default function CoreConcepts() {
  return (
    <Section title="Core Concepts" id="core-concepts">
      <ul>
        {/*COMMON PATTERN: Using array.map() to transform array to JSX code or Renderable Elements */}
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </Section>
  );
}
