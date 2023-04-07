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

import { FadeOut } from '@/components';
import { convertToNumberSafe } from '@/utils';

import { StyledCounterWithInput, StyledCounterController, StyledInput, CounterErrorMessageStyle } from './CounterWithInput.styled';

type TSetStateCallback = (prev: number) => number;

interface CounterWithInputProps {
  stateBundle?: [number, Dispatch<SetStateAction<number>> | ((callback: number | TSetStateCallback) => void)];
  operand?: number;
  max?: number;
  min?: number;
  className?: string;
}

export const CounterWithInput = memo(
  forwardRef(function CounterWithInput(
    { stateBundle, className, operand = 1, max = 100, min = 0 }: CounterWithInputProps,
    ref: ForwardedRef<number>
  ) {
    const localStateBundle = useState<number>(0);
    const [num, setNum] = stateBundle || localStateBundle;

    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    useImperativeHandle(ref, () => num);

    const checkIsAllowToChange = useCallback((value: number) => {
      const isBiggerThanMin = value >= min;
      const isLowerThanMax = value <= max;
      return isBiggerThanMin && isLowerThanMax;
    }, []);

    const handleInputChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const value = convertToNumberSafe(e.currentTarget.value);

        if (!value || !checkIsAllowToChange(value)) {
          setErrorMessage('1 ~ 20까지만 입력가능합니다.');
          setNum(0);
          return;
        }

        setNum(value);
      },
      [setNum, checkIsAllowToChange]
    );

    const upperButtonClick = useCallback(() => {
      setNum((prev) => {
        const newVal = prev + operand;
        if (checkIsAllowToChange(newVal)) return newVal;

        setErrorMessage('최대 수량은 20입니다.');
        return prev;
      });
    }, [operand, setNum]);

    const downButtonClick = useCallback(() => {
      setNum((prev) => {
        const newVal = prev - operand;
        if (checkIsAllowToChange(newVal)) return newVal;

        setErrorMessage('최소 수량은 1입니다.');
        return prev;
      });
    }, [operand, setNum]);

    return (
      <StyledCounterWithInput className={className}>
        {errorMessage && <FadeOut className={CounterErrorMessageStyle()} onDisappear={() => setErrorMessage(null)}>{errorMessage}</FadeOut>}
        <StyledInput type="number" onChange={handleInputChange} value={String(num)} />
        <StyledCounterController>
          <MdOutlineArrowDropUp className="w-full h-full" onClick={upperButtonClick} />
          <MdOutlineArrowDropDown className="w-full h-full" onClick={downButtonClick} />
        </StyledCounterController>
      </StyledCounterWithInput>
    );
  })
);
