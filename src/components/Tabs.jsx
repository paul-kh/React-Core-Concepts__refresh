export default function Tabs({ tabButtons, children }) {
  return (
    <>
      <menu>{tabButtons}</menu>
      {children}
    </>
  );
}
