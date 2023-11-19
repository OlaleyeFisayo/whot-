import Button from "../../components/button";
import CardDisplay from "../../components/cards/cardDisplay";

export default function DesktopIndex() {
  return (
    <section className="max-w-[1440px] m-auto w-full min-h-[100dvh] h-full p-8 relative">
      <h1 className="text-3xl mb-8 w-full text-center">
        A Whot game inspired by Kahoot!
      </h1>
      <section className="flex items-center justify-center p-5 py-10 h-full gap-[200px]">
        <div className="flex relative w-full max-w-[550px] h-[430px] items-center p-10">
          <CardDisplay />
        </div>
        <Button className="bg-green-700 py-4 px-6 rounded-md hover:bg-green-800 transition-all ease-in-out">
          Create a Room
        </Button>
      </section>
      <footer className="absolute bottom-8">
        <h1>
          Created by{" "}
          <a href="#" target="_blank" className="font-bold">
            Festus-Olaleye Fisayo
          </a>
        </h1>
      </footer>
    </section>
  );
}
