export default function Section({ title, children, ...props }) {
  //This "...props" is a JavaScript feature called "Rest property".
  //This syntax groups all remainig object properties into a new object (named "props" in this case)
  return (
    //{...props} is to spread or forward all other remaining props
    // This is a COMMON PATTERN for CUSTOM WRAPPING COMPONENTS
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
