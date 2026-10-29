const myModule = (() => {
  const privateFoo = () => console.log("hey");
  const privateBar = () => console.log("hey");
  const publicFoo = () => privateFoo();
  const publicBar = () => privateBar();
  const exports = {
    bar: publicBar,
    foo: publicFoo,
  };
  return exports;
})();

console.log(myModule)