export const extractIds = (arrayObj) => {
  if (!Array.isArray(arrayObj)) return []; // Ensure arrayObj is an array
  return arrayObj.map((obj) => obj._id || obj.id);
};

export const showItem = (arrayObj, currentId, locate) => {
  const ids = extractIds(arrayObj);
  const pageItemPosition = ids?.indexOf(currentId);
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
    if (pageItemPosition) nextItemID = ids[pageItemPosition];
  }
  const locatedItem = arrayObj?.find((obj) => obj._id === nextItemID);
  return { pageItemPosition, length: ids?.length, locatedItem };
};

export const countProps = (arrayObj, target) => {
  // Ensure arrayObj is an array
  if (!Array.isArray(arrayObj)) return 0;
  return arrayObj?.filter((item) => item.isRead === target).length;
};

export const currentArticle = (arrayObj, currentId) => {
  const ids = extractIds(arrayObj);

  const articlePosition = ids?.indexOf(currentId);

  let prevItemID = articlePosition - 1;
  let nextItemID = articlePosition + 1;

  if (articlePosition <= 0) prevItemID = null;
  if (articlePosition === ids.length - 1) nextItemID = null;

  console.log({prevItemID, articlePosition, nextItemID});
  return { nextItemID, prevItemID };
};

export const notify = (state, error) => {
  switch (state) {
    case "pending":
      return {
        status: "pending",
        title: "Sending message...",
        message: "Your message is on its way",
      };
    case "success":
      return {
        status: "success",
        title: "Success",
        message: "Successfully sent message",
      };
    case "error":
      return {
        status: "error",
        title: "Error",
        message: error,
      };
    case null:
      return 0;
    default:
      return {
        status: "error",
        title: "Error",
        message: `Invalid state: ${state}`,
      };
  }
};
