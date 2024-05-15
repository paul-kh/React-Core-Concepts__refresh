/* Creating an array to store 3 items that will be displayed randomly
/  under the "React Essentials" section upon page load
*/
const randomDescriptions = ['Fundamental', 'Core', 'Crucial'];

function genRandomInt(arrLength){
  return Math.floor(Math.random() * (arrLength + 1));
}


//Creating custom component "Header"
function Header() {
  const description = randomDescriptions[genRandomInt(2)];
  
  return (
    <header>
    <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {/* Displaying dynamic value in the curly braces */}
      {description} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>
  )
}


function App() {
  return (
    <div>
     <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
