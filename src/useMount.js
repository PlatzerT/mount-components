const useMount = () => {
  const on = (event, callback) => {
    document.addEventListener(event, (e) => callback(e.detail));
  };
  const open = (component, props = {}) => {
    document.dispatchEvent(
      new CustomEvent("open", { detail: { component, props } })
    );
  };
  return { on, open };
};

export default useMount;
