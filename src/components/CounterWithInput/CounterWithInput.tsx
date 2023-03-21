/* eslint-disable */
import React, {
  ChangeEvent,
  Dispatch,
  ForwardedRef,
  forwardRef,
  memo,
  SetStateAction,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react';
import { MdOutlineArrowDropUp, MdOutlineArrowDropDown } from 'react-icons/md'

import { StyledCounterWithInput, StyledCounterController, StyledInput } from './CounterWithInput.styled';

type TSetStateCallback = (prev: number) => number;

interface CounterWithInputProps {
  stateBundle?: [number, Dispatch<SetStateAction<number>> | ((callback: number | TSetStateCallback) => void)];
  onlyNaturalNumber?: boolean;
  operand?: number;
  className?: string;
}

export const CounterWithInput = memo(
  forwardRef(function CounterWithInput(
    { stateBundle, operand = 1, className, onlyNaturalNumber }: CounterWithInputProps,
    ref: ForwardedRef<number>
  ) {
    const localStateBundle = useState<number>(0);
    const [num, setNum] = stateBundle || localStateBundle;

    useImperativeHandle(ref, () => num);

    const handleInputChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.currentTarget);
        if (onlyNaturalNumber && value < 0) {
          setNum(0);
          return;
        }

        setNum(value);
      },
      [setNum]
    );

    const upperButtonClick = useCallback(() => {
      setNum((prev) => (prev += operand));
    }, [operand, setNum]);

    const downButtonClick = useCallback(() => {
      setNum((prev) => {
        if (onlyNaturalNumber && prev <= 0) return prev;
        return (prev -= operand);
      });
    }, [operand, onlyNaturalNumber, setNum]);

    return (
      <StyledCounterWithInput className={className}>
        <StyledInput type="number" onChange={handleInputChange} value={num} />
        <StyledCounterController>
          <MdOutlineArrowDropUp className="w-full h-full" onClick={upperButtonClick} />
          <MdOutlineArrowDropDown className="w-full h-full" onClick={downButtonClick} />
        </StyledCounterController>
      </StyledCounterWithInput>
    );
  })
);
