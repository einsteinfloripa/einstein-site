import { useEffect, useState } from "react";

type CountUpProps = {
  start?: number;
  end?: number;
  prefix?: string;
  suffix?: string;
};
const CountUp = ({
  start = 0,
  end = 100,
  prefix = "",
  suffix = "",
}: CountUpProps) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= end) {
          clearInterval(interval);
          return end;
        }
        return prev + 1;
      });
    }, 10 / 60);

    return () => clearInterval(interval);
  }, [end]);

  return <span>{`${prefix}${count}${suffix}`}</span>;
};

export default CountUp;
