import Card from ".";

export default function CardDisplay() {
  return (
    <>
      <Card
        shape="Triangle"
        value={1}
        className="absolute rotate-[-30deg] translate-x-[-10%] translate-y-[-2%]"
      />
      <Card shape="Circle" value={2} className="absolute z-10 " />
      <Card
        shape="Cross"
        value={5}
        className="absolute rotate-[30deg] translate-x-[32%] translate-y-[-2%]"
      />
    </>
  );
}
