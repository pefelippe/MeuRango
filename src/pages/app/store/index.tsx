import Foods from "./foods";
import Info from "./info";

function Store() {
  return (
    <div className="min-h-screen w-full flex max-md:flex-col mx-auto pb-10">
      {/* <Header /> */}
      <Info />
      <Foods />
    </div>
  );
}

export default Store;
