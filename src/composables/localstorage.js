const save = (key, arrayOrObj) => {
  const text = JSON.stringify(arrayOrObj);

  localStorage.setItem(key, text);
};

const load = (key) => {
  const saved = localStorage.getItem(key);

  if (saved) {
    return JSON.parse(saved);
  }
  return [];
};

export { save, load };
