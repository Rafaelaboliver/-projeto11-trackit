import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { TodaysProgress } from './menucss';
import "react-circular-progressbar/dist/styles.css";
import React from "react";

export default function ProgressBar() {

    const percentage = 50;
    return (
        <TodaysProgress>
            <CircularProgressbar
                className="myCircularProgressBar"
                value={percentage}
                text={"Hoje"}
                background
                backgroundPadding={6}
                styles={{
                  path: {
                    stroke: `#fff`,
                    strokeLinecap: "round",
                    transition: "stroke-dashoffset 0.5s ease 0s",
                    transformOrigin: "center center",
                  },
                  trail: {
                    stroke: "transparent",
                    strokeLinecap: "butt",
                    transform: "rotate(0.25turn)",
                    transformOrigin: "center center",
                  },
                  text: {
                    fill: "#fff",
                    fontSize: "18px",
                    dominantBaseline: "middle",
                    textAnchor: "middle",
                  },
                  background: {
                    fill: "#52B6FF",
                  },
                }}
            />
        </TodaysProgress>
    )
}