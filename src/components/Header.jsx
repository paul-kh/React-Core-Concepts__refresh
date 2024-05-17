import reactImage from "../assets/react-core-concepts.png";

/* Creating an array to store 3 items that will be displayed randomly
/  under the "React Essentials" section upon page load
*/
const randomDescriptions = ['Core', 'Fundamental', 'Crucial'];

function genRandomInt(arrLength){
  return Math.floor(Math.random() * (arrLength + 1));
}

export default function Header() {
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