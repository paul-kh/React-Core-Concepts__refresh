export default function Tabs({ tabButtons, children, buttonContainer }) {
  const ButtonContainer = buttonContainer;
  return (
    <>
      <ButtonContainer>{tabButtons}</ButtonContainer>
      {children}
    </>
  );
}
