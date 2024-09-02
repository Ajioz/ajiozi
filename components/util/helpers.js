export const extractIds = (arrayObj) => {
  return arrayObj.map(({ id }) => id);
};

export const showItem = (arrayObj, currentId, locate) => {
  const ids = extractIds(arrayObj);
  const pageItemPosition = ids.indexOf(currentId);
  let nextItemID;

  if (locate === "prev") {
    let prevNum = pageItemPosition - 1;
    if (prevNum < 0) prevNum = 0;
    nextItemID = ids[prevNum];
  } else if (locate === "next") {
    let nextNum = pageItemPosition + 1;
    if (nextNum >= ids.length) nextNum = ids.length - 1;
    nextItemID = ids[nextNum];
  } else {
    throw new Error('Invalid locate value. Use "prev" or "next".');
  }

  return arrayObj.find((obj) => obj.id === nextItemID);
};
