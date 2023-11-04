import Button from "../../components/button";
import Card from "../../components/cards";

export default function DesktopIndex() {
  return (
    <section className="w-full min-h-[100dvh] flex items-center p-6 justify-between">
      <div>
        <h1 className="text-2xl mb-6">A Whot game inspired by Kahoot!</h1>
        <div className="flex">
          <Card shape="Triangle" value={1} />
          <Card shape="Circle" value={2} />
          <Card shape="Cross" value={5} />
          <Card shape="Star" value={8} />
          <Card shape="Square" value={14} />
        </div>
      </div>
      <div>
        <Button className="bg-green-700 p-4 rounded-md hover:bg-green-800 transition-all ease-in-out">
          Create a Room
        </Button>
      </div>
    </section>
  );
}
