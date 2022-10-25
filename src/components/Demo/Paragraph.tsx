interface ParagraphProps {
  children: React.ReactNode;
}

function Paragraph({children}: ParagraphProps) {
  console.log('Paragraph running');
  return (
  <p>{children}</p>
  )
}

export default Paragraph;