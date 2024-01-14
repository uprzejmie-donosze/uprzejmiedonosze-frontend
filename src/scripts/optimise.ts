export function debounce(callback: () => void, wait = 600, context = this) {
  let timeout: NodeJS.Timeout = null;
  let callbackArgs: any = null;

  const later = () => callback.apply(context, callbackArgs);

  return function () {
    callbackArgs = arguments; // eslint-disable-line prefer-rest-params
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export function throttle(callback: () => void, wait = 600, context = this) {
  let shouldFire = true;
  let callbackArgs: any = null;

  const fn = () => callback.apply(context, callbackArgs);

  return function () {
    if (!shouldFire) return;
    callbackArgs = arguments; // eslint-disable-line prefer-rest-params
    fn();
    shouldFire = false;
    setTimeout(() => (shouldFire = true), wait);
  };
}
