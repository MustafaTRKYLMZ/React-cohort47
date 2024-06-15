
import { useWindowSize } from './hooks/useWindowSize';

function App() {
  const size1 = useWindowSize();
  const size2 = useWindowSize();
  const size3 = useWindowSize();

  return (
    <div>
      <h1>Window Size 1: {size1.width} x {size1.height}</h1>
      <h1>Window Size 2: {size2.width} x {size2.height}</h1>
      <h1>Window Size 3: {size3.width} x {size3.height}</h1>
    </div>
  );
}

export default App;
