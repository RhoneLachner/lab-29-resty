

export const RequestFunc = (url) => {
  return fetch({ url })
    .then(res => res.json())
    .then(json => json.textArea);
};
