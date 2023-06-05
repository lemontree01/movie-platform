import { generateArray } from 'shared/lib/generateArray/generateArray';

const Main = () => {
  return (
    <div>
      {generateArray(5, (n: number) => <div key={n}>today is {n}</div>)}
    </div>
  );
};

export default Main;
