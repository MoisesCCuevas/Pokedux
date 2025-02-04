export const logger = (store) => (next) => (action) => {
  console.log('dispatching', action);
  return next(action);
};

export const modifyAction = (store) => (next) => (action) => {
  const modify = [{}, ...action.action.payload];
  const updatedAction = { ...action, action: { ...action.action, payload: modify } };
  return next(updatedAction);
}
