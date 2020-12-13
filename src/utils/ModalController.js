import EventEmitter from "../lib/EventEmitter";

export const uiEvents = new EventEmitter();

const modalController = () => {
  let stack = [];
  let currentLevel = 0;

  return {
    open(name) {
      // If modal already open bring it to front
      if (stack.includes(name)) {
        stack = stack.filter((o) => o !== name);
      }
      stack.push(name);
      currentLevel += 1;
      uiEvents.emit(`${name}.open`, { level: currentLevel });
      uiEvents.emit("overlay$open", { level: currentLevel });
    },
    close() {
      if (stack.length > 0) {
        const name = stack.pop();
        uiEvents.emit(`${name}.close`);
        if (stack.length === 0) {
          uiEvents.emit("overlay$close");
          currentLevel = 0;
        } else {
          const activeModalName = stack[stack.length - 1];
          currentLevel -= 1;
          uiEvents.emit("overlay$level", { level: currentLevel });
          uiEvents.emit(`${activeModalName}.level`, {
            level: currentLevel,
          });
        }
      } else {
        console.warn("No modals are open");
      }
    },
  };
};

const controller = modalController();

export default controller;
