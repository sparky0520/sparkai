/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";

const TrendWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://ssl.gstatic.com/trends_nrtr/3975_RC01/embed_loader.js";
    script.async = true;
    script.onload = () => {
      window.trends.embed.renderExploreWidget(
        "RELATED_TOPICS",
        {
          comparisonItem: [{ geo: "IN", time: "now 7-d" }],
          category: 0,
          property: "",
        },
        {
          exploreQuery: "date=now%207-d&geo=IN&hl=en-GB",
          guestPath: "https://trends.google.com:443/trends/embed/",
        }
      );
    };
    document.body.appendChild(script);

    // Cleanup the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="trend-widget h-[400px] z-0"></div>;
};

export default TrendWidget;
