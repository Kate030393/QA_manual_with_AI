/*1. Open any regular webpage.

2. Press F12 or Ctrl + Shift + J.

3. Go to the Console tab and add this script:*/

document.addEventListener("visibilitychange", () => {
  console.log(
    new Date().toLocaleTimeString(),
    "visibilitychange:",
    document.visibilityState,
    "| hidden:",
    document.hidden
  );
});

window.addEventListener("blur", () => {
  console.log(new Date().toLocaleTimeString(), "WINDOW BLUR");
});

window.addEventListener("focus", () => {
  console.log(new Date().toLocaleTimeString(), "WINDOW FOCUS");
});

/*4. Experiment checklist

- Switch to another Chrome tab: Press Ctrl + L, then open a new tab or switch to an already open one.

- Return to the page: Go back to the original tab and check which events appeared.

- Minimize Chrome: Minimize the browser window using the minimize button in the title bar, then restore it.

- Switch to another application*/
