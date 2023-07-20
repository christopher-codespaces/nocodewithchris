import React from "react";
import Timeline from "./Timeline";

const timelineData1 = {
  title: "Morbi tempor",
  subtitle: "Vestibulum diam nunc",
  items: [
    {
      title: "Donec porta enim vel",
      date: "Dec 2020",
      description: "Pellentesque feugiat ante at nisl efficitur, in mollis orci scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    },
    {
      title: "Aliquam sit amet nunc ut",
      date: "Jul 2019",
      description: "Morbi vulputate aliquam libero non dictum. Aliquam sit amet nunc ut diam aliquet tincidunt nec nec dui. Donec mollis turpis eget egestas sodales.",
    },
    {
      title: "Pellentesque habitant morbi",
      date: "Jan 2016",
      description: "Suspendisse tincidunt, arcu nec faucibus efficitur, justo velit consectetur nisl, sit amet condimentum lacus orci nec purus. Mauris quis quam suscipit, vehicula felis id, vehicula enim.",
    },
  ],
};

const timelineData2 = {
  title: "Lorem Ipsum",
  subtitle: "Lorem Ipsum Dolor",
  items: [
    {
      title: "Lorem Ipsum 1",
      date: "Dec 2022",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.",
    },
    {
      title: "Lorem Ipsum 2",
      date: "Jun 2021",
      description: "Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo.",
    },
  ],
};

const App = () => {
  return (
    <div>
      <Timeline timelineData={timelineData1} />
      <Timeline timelineData={timelineData2} />
    </div>
  );
};

export default App;
