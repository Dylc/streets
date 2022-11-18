// import { Outlet } from "react-router-dom";

import Map from "components/Map";
import { useLoaderData } from "react-router-dom";
import SplitPanel from "react-split-pane";
import Pane from "react-split-pane/lib/Pane";

export function StreetPage() {
  const street = useLoaderData();

  return (
    <SplitPanel split="vertical">
      <Pane initialSize="50%" minSize="20%" maxSize="50%">
        <Map street={street} />
      </Pane>
      <Pane initialSize="50%" minSize="20%">
        Text with Images
      </Pane>
    </SplitPanel>
  );
}
