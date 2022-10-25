import Paragraph from "@/components/Demo/Paragraph";

interface DemoOutputProps {
  isShow: boolean;
}

function DemoOutput({ isShow }: DemoOutputProps) {
  console.log('DemoOutput running');
  return <Paragraph>{isShow ? 'This is new' : ''}</Paragraph>;
}

export default DemoOutput;
