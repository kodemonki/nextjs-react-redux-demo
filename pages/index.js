// index.js
 
import Link from 'next/link'

const isClientOrServer = () => {
  let renderer = '';
  if(typeof window !== 'undefined' && window.document){
      renderer = 'Client';
  }else{
      renderer = 'Server';
  }
  return renderer;
};

const Index = ({ title = 'Hello from Next.js' }) => (
  <div>
    <h1>{title}</h1>
    <p className="App-intro">
      Is my application rendered by server or client?
    </p>
    <h2><code>{isClientOrServer()}</code></h2>
  </div>
);

export default Index;
