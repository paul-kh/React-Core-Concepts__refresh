export default function Tabs({
  tabButtons,
  children,
  ButtonsContainer = "menu",
}) {
  // if buttonContainer start with LOWER CASE letter, we MUST remap it to an UPPER CASE to remap
  // const Buttonsontainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{tabButtons}</ButtonsContainer>
      {children}
    </>
  );
}
