let t = 0;
const continuousCounter = () => {
  t += 1;
  postMessage(t);
  setTimeout(continuousCounter, 1000);
};

continuousCounter();
