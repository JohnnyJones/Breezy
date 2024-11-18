import React from "react";
import { JobStatus } from "./types";
import CheckCircle from "./icons/CheckCircle";
import Clock from "./icons/Clock";
import Circle from "./icons/Circle";

enum ProgressColors {
  NotStarted = "gray",
  InProgress = "rgb(234 179 8)",
  Completed = "green",
}

type Props = {
  status: JobStatus;
  size?: number;
  color?: string;
};

const ProgressIcon: React.FC<Props> = ({
  status,
  size = 24,
  color = undefined,
}) => {
  switch (status) {
    case JobStatus.NotStarted:
      return (
        <Circle size={size} color={color ? color : ProgressColors.NotStarted} />
      );
    case JobStatus.InProgress:
      return (
        <Clock size={size} color={color ? color : ProgressColors.InProgress} />
      );
    case JobStatus.Completed:
      return (
        <CheckCircle
          size={size}
          color={color ? color : ProgressColors.Completed}
        />
      );
  }
};

export default ProgressIcon;
