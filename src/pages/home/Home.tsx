import { useCounterStore } from "@/store";

export default function Home() {
  return (
    <div className="grid h-screen place-items-center">
      <div>
        <Counter />
        <Controls />
      </div>
    </div>
  );
}

function Counter() {
  const count = useCounterStore((state) => state.count);
  return <h1 className="text-center">{count}</h1>;
}

function Controls() {
  const increasePopulation = useCounterStore((state) => state.increaseCount);
  return <button onClick={increasePopulation}>Click me</button>;
}
