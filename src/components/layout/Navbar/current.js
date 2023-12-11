export function handleSelectedLink({ isCurrent }) {
  return {
    style: {
      color: isCurrent ? "red" : "blue"
    }
  };
}
