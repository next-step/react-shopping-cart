import { createContext, Dispatch, useContext, useReducer } from 'react';
import { ActionType } from './ShoppingActionType';
import ShoppingReducer, {
  defaultValue,
  DefaultValueState,
} from './ShoppingReducer';

export const ShoppingStateContext = createContext<DefaultValueState | null>(
  null
);

type DispatchContext = Dispatch<ActionType>;
export const ShoppingDispatchContext = createContext<DispatchContext>(
  () => null
);

export const ShoppingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(ShoppingReducer, defaultValue);

  return (
    <ShoppingStateContext.Provider value={state}>
      <ShoppingDispatchContext.Provider value={dispatch}>
        {children}
      </ShoppingDispatchContext.Provider>
    </ShoppingStateContext.Provider>
  );
};

export const useShoppingState = () => {
  const context = useContext(ShoppingStateContext);
  if (!context) {
    throw new Error(
      'useShoppingState는 ShoppingProvider 안에서만 사용 가능합니다.'
    );
  }
  return context;
};
export const useShoppingDispatch = () => {
  const context = useContext(ShoppingDispatchContext);
  if (!context) {
    throw new Error(
      'useShoppingDispatch는 ShoppingProvider 안에서만 사용 가능합니다.'
    );
  }
  return context;
};
