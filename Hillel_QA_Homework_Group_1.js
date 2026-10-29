/*Browsers can detect when a user switches tabs, minimizes the window, or switches to another application 
using events such as visibilitychange, blur, and focus.
As a QA engineer, you can observe these events in Chrome DevTools and check Network requests to understand how the application reacts.
The consequences, such as exam termination, are determined by the developer’s business logic 
and may involve frontend actions, API requests, and backend validation.

1. Open any regular webpage.

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

- Switch to another application

5. Reaction on the visibility change event: */

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    finishExam();
  }
});

function finishExam() {
  console.log("The exam has been terminated");
}
