import Map from "components/Map";
import { useLoaderData } from "react-router-dom";
import SplitPanel from "react-split-pane";
import Pane from "react-split-pane/lib/Pane";
import Iframe from "react-iframe";

export function StreetPage() {
  const street = useLoaderData();

  return (
    <SplitPanel split="vertical">
      <Pane initialSize="45%" minSize="20%" maxSize="45%">
        <Map street={street} />
      </Pane>
      <Iframe
        url={street.wiki}
        width="100%"
        height="100%"
        id={`iframe-${street.id}`}
        display="block"
        position="relative"
      />
    </SplitPanel>
  );
}
