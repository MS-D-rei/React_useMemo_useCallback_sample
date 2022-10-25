interface DemoOutputProps {
  isShow: boolean;
}

function DemoOutput({ isShow }: DemoOutputProps) {
  console.log('DemoOutput running');
  return <p>{isShow ? 'This is new' : ''}</p>;
}

export default DemoOutput;
