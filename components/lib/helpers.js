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
    nextItemID = ids[pageItemPosition];
  }
  const locatedItem = arrayObj.find((obj) => obj.id === nextItemID);
  return { pageItemPosition, length: ids.length, locatedItem };
};


export const countProps = (arrayObj, target) => {
  return arrayObj.filter((item) => item.isRead === target).length;
};
