import useFoo from "./useFoo";

export default function App() {
  const { Foo } = useFoo();
  return (
    <div>
      <Foo x={1} />
    </div>
  );
}
