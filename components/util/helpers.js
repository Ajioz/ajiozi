export const extractIds = (arrayObj) => {
  return arrayObj.map(({ id }) => id);
};

export const showItem = (arrayObj, currentId, locate) => {
  const ids = extractIds(arrayObj);
  const pageItemPosition = ids.indexOf(currentId);
  let nextItemID;

  if (locate === "prev") {
    nextItemID = ids[pageItemPosition - 1];
  } else if (locate === "next") {
    nextItemID = ids[pageItemPosition + 1];
  }

  return arrayObj.find((obj) => obj.id === nextItemID);
};
