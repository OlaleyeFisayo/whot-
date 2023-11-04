import Button from "../../components/button";
import Card from "../../components/cards";

export default function DesktopIndex() {
  return (
    <section className="w-full min-h-[100dvh] p-8">
      <h1 className="text-3xl mb-8 w-full text-center">
        A Whot game inspired by Kahoot!
      </h1>
      <section className="flex items-center justify-between gap-3 w-full">
        <div className="flex relative max-w-[650px] w-full h-[350px] border-solid border">
          <Card shape="Triangle" value={1} className="absolute left-10 " />
          <Card shape="Circle" value={2} className="absolute" />
          <Card shape="Cross" value={5} className="absolute" />
          <Card shape="Star" value={8} className="absolute" />
          <Card shape="Square" value={14} className="absolute" />
        </div>
        <Button className="bg-green-700 p-4 rounded-md hover:bg-green-800 transition-all ease-in-out">
          Create a Room
        </Button>
      </section>
    </section>
  );
}
