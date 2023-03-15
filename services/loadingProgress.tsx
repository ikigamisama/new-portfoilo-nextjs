import { LoaderWrapper } from "@/styles/Header";
import { Box, CircularProgress, Progress, VStack } from "@chakra-ui/react";
import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type Props = {
  children: ReactElement | ReactElement[];
};

type Progress = {
  value: number;
  start: () => void;
  done: () => void;
};

const LoadingProgressContext = createContext<Progress>({
  value: 0,
  start: () => {},
  done: () => {},
});

export const useLoadingProgress = (): Progress => {
  return useContext<Progress>(LoadingProgressContext);
};

const LoadingProgress = () => {
  const { value } = useLoadingProgress();

  return (
    <LoaderWrapper>
      <Progress value={value} size="xs" width="100%" />
      <CircularProgress size="24px" isIndeterminate pr={2} />
    </LoaderWrapper>
  );
};

export const LoadingProgressProvider = ({ children }: Props): ReactElement => {
  const step = useRef(5);
  const [value, setValue] = useState(0);
  const [isOn, setOn] = useState(false);

  useEffect(() => {
    if (isOn) {
      let timeout: any = 0;

      if (value < 20) {
        step.current = 5;
      } else if (value < 40) {
        step.current = 4;
      } else if (value < 60) {
        step.current = 3;
      } else if (value < 80) {
        step.current = 2;
      } else {
        step.current = 1;
      }

      if (value <= 98) {
        timeout = setTimeout(() => {
          setValue(value + step.current);
        }, 500);
      }

      return () => {
        if (timeout) {
          clearTimeout(timeout);
        }
      };
    }
  }, [value, isOn]);

  // 7. start
  const start = () => {
    setValue(0);
    setOn(true);
  };

  // 8. done
  const done = () => {
    setValue(100);
    setTimeout(() => {
      setOn(false);
    }, 200);
  };

  return (
    <LoadingProgressContext.Provider
      value={{
        value,
        start,
        done,
      }}
    >
      {isOn ? <LoadingProgress /> : <></>}
      {children}
    </LoadingProgressContext.Provider>
  );
};
