import { CORE_CONCEPTS } from "./data"; //using {} since CORE_CONCEPTS is a name-export constant
import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header/Header";

function App() {
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
      </main>
    </div>
  );
}

export default App;
