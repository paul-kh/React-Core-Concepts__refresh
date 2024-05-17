import reactImage from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data"; //using {} since CORE_CONCEPTS is a name-export constant

/* Creating an array to store 3 items that will be displayed randomly
/  under the "React Essentials" section upon page load
*/
const randomDescriptions = ['Core', 'Fundamental', 'Crucial'];

function genRandomInt(arrLength){
  return Math.floor(Math.random() * (arrLength + 1));
}


//Creating custom component "Header"
function Header() {
  const description = randomDescriptions[genRandomInt(2)];

  return (
    <header>
    {/*To avoid potential loss of the image during deployment process,
       we should point image source to an image object that we import
       rather than the full path*/}
    <img src={reactImage} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {/* Displaying dynamic value in the curly braces */}
      {description} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>
  )
}

function CoreConcept(props){

  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.tile}</h3>
      <p>{props.description}</p>
    </li>
  )
}

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
