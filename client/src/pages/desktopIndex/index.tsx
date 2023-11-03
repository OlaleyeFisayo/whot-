import Button from "../../components/button";
import Card from "../../components/card";

export default function DesktopIndex() {
  return (
    <section className="w-full min-h-[100dvh] flex items-center p-6 justify-between">
      <div>
        <h1 className="text-2xl mb-6">A Whot game inspired by Kahoot!</h1>
        <Card />
      </div>
      <div>
        <Button />
      </div>
    </section>
  );
}
