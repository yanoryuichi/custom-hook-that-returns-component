const useFoo = () => {
  const FooComponent = (props) => {
    console.log(props);
    return (
      <div>
        Foo x:{props.x} a:{props.a}
      </div>
    );
  };

  return {
    Foo: (props) => <FooComponent {...props} a={100} />
  };
};
export default useFoo;
