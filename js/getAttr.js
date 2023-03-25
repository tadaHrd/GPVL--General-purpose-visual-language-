function getAttr() {
  const arr = window.location.search.slice(1).split('&').map(pair => pair.split('='));

  let out = {};

  try {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length == 2) {
        let atI = arr[i];
        out[atI[0]] = atI[1];
      } else {
        throw new Error(`Attribute at ${i} ( ${JSON.stringify(arr[i])} ) is too ${arr[i].length < 2? "short" : "long"} (size should be 2 but is ${arr[i].length}).`);
      }
    }
  } catch (e) {
    return e;
  }

  return out;
}
