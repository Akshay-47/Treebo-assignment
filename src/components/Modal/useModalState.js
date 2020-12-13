import { useEffect, useState } from "react";
import { uiEvents } from "../../utils/ModalController";

function useModalState(name, separator = ".") {
  const [open, setOpen] = useState(false);
  const [level, setLevel] = useState(0);

  useEffect(() => {
    function handleClose() {
      setOpen(false);
    }

    function handleOpen({ level }) {
      setOpen(true);
      setLevel(level);
    }

    function handleLevel({ level }) {
      setLevel(level);
    }

    const prefix = `${name}${separator}`;
    uiEvents.on(`${prefix}open`, handleOpen);
    uiEvents.on(`${prefix}close`, handleClose);
    uiEvents.on(`${prefix}level`, handleLevel);

    return () => {
      uiEvents.off(`${prefix}open`, handleOpen);
      uiEvents.off(`${prefix}close`, handleClose);
      uiEvents.off(`${prefix}level`, handleLevel);
    };
  }, [name]);

  return { open, level };
}

export default useModalState;
