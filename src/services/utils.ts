export const debounce = (func: Function, delay: number) => {
  let debounceTimer: ReturnType<typeof setTimeout>;

  return function () {
    const context = this;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, arguments), delay);
  };
};
