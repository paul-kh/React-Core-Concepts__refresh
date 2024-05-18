import { CORE_CONCEPTS } from "../data"; //using {} since CORE_CONCEPTS is a name-export constantr
import CoreConcept from "../components/CoreConcept";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {/*COMMON PATTERN: Using array.map() to transform array to JSX code or Renderable Elements */}
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </section>
  );
}
