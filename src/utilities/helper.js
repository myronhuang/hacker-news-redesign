//calculates time elapsed from creation to current.
export const calcElapsedTime = (seconds) => {
  let time;
  let date = Date.now();
  let epoch = Math.floor(date / 1000);

  let elapsed = epoch - seconds;

  if (elapsed < 60) {
    if (elapsed > 1) {
      time = `${elapsed} seconds`;
    } else {
      time = `${elapsed} second`;
    }
  } else {
    let minutes = Math.floor(elapsed / 60);
    if (minutes < 60) {
      if (minutes > 1) {
        time = `${minutes} minutes`;
      } else {
        time = `${minutes} minute`;
      }
    } else {
      let hours = Math.floor(minutes / 60);
      if (hours > 1) {
        time = `${hours} hours`;
      } else {
        time = `${hours} hour`;
      }
    }
  }

  return time;
};

//Extracts hotname portion of a url
export const extractHostname = (url) => {
  let element = new URL(url);
  return `(${element.hostname.replace("www.", "")})`;
};
