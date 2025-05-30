import React from "react";
import NumberFlow from "@number-flow/react";
import useScrollTriggeredCountUp from "@/hooks/useScrollCount";

const AchievementStat = ({
  target,
  suffix,
  label,
}: {
  target: number;
  suffix: string;
  label: string;
}) => {
  const { ref, value } = useScrollTriggeredCountUp(target);

  return (
    <div ref={ref} className="text-center">
      <NumberFlow
        value={value}
        suffix={suffix}
        className="text-2xl text-primary font-inter font-bold"
      />
      <p className="text-sm text-neutral-500">{label}</p>
    </div>
  );
};

export default AchievementStat;
