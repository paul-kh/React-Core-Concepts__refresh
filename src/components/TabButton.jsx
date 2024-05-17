export default function TabButton({ children }) {
  function handleClick() {
    console.log("Clicked");
  }

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
