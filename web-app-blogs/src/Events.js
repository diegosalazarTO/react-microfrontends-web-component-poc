function Events() {
  const dispatchEvent = (event) => {
    const customEvent = new CustomEvent("onCustomEvent", {
      cancelable: true,
      detail: { foo: "bar" },
      bubbles: true,
      composed: true,
    });

    event.target.dispatchEvent(customEvent);

    console.log("Child app dispatched custom event: ", customEvent);
  };

  return <button onClick={dispatchEvent}>Dispatch Custom Event</button>;
}

export default Events;
