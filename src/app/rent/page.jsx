import PlaceButton from "../components/placeButton";
import { DATA } from "../data/placeData";

export default function Page() {
  return (
    <>
      {DATA.map((data) => {
        return <PlaceButton key={data} place={data[0]} nextPath={data[1]} />;
      })}
    </>
  );
}
