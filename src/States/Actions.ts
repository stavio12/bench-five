interface Action<T> {
  type: T;
}

export interface StateType {}

export const initialState: StateType = {};

export interface StateAction extends Action<""> {
  payload: {};
}

export const reducer = (
  state: StateType,
  action: any | StateAction
): StateType => {
  // eslint-disable-next-line
  switch (action.type) {
    default:
      return state;
  }
};
