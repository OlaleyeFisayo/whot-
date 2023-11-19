import Button from "../../components/button";
import Card from "../../components/cards";

export default function DesktopIndex() {
  return (
    <section className="max-w-[1440px] m-auto w-full min-h-[100dvh] h-full p-8 relative">
      <h1 className="text-3xl mb-8 w-full text-center">
        A Whot game inspired by Kahoot!
      </h1>
      <section className="flex items-center justify-between gap-10 w-full p-5 h-full">
        <div className="flex relative w-full max-w-[550px] h-[430px] items-center p-10">
          <Card
            id="trianle1"
            shape="Triangle"
            value={1}
            className="absolute rotate-[-10deg]"
          />
          <Card
            id="circle2"
            shape="Circle"
            value={2}
            className="absolute left-[80px] top-[60px] rotate-[-5deg]"
          />
          <Card
            id="cross5"
            shape="Cross"
            value={5}
            className="absolute left-[120px] top-[70px] rotate-[0deg]"
          />
        </div>
        <Button className="bg-green-700 py-4 px-6 rounded-md hover:bg-green-800 transition-all ease-in-out">
          Create a Room
        </Button>
      </section>
      <footer className="absolute bottom-8">
        <h1>Created by <a href="#" target="_blank" className="font-bold">Festus-Olaleye Fisayo</a></h1>
      </footer>
    </section>
  );
}
