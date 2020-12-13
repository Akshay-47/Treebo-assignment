import Events from "./Events";

const Popup = {
  open(name) {
    Events.emit(name);
  },
  close() {},
};
