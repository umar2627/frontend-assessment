import React from "react";
import Switch from "@mui/material/Switch";
import { useGlobalState } from "../context/GlobalState";

const SwitchDemo = () => {
  const [state, dispatch] = useGlobalState();

  const toggleMode = (e) => {
    console.log(e);
    const newMode = state.mode === "light" ? "dark" : "light";
    document.body.className =
      state.mode === "dark" ? "dark-theme" : "light-theme";
    dispatch({ type: "SET_MODE", payload: newMode });
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Switch
        className={`SwitchRoot ${
          state.mode === "dark" ? "dark-mode" : "light-mode"
        }`}
        id="theme-mode"
        checked={state.mode === "dark"}
        onChange={toggleMode}
      >
        <Switch.Thumb className="SwitchThumb" />
      </Switch>
      <label
        className="Label"
        htmlFor="theme-mode"
        style={{ paddingRight: 15 }}
      >
        {state.mode === "dark" ? "Dark Mode" : "Light Mode"}
      </label>
    </div>
  );
};

export default SwitchDemo;
