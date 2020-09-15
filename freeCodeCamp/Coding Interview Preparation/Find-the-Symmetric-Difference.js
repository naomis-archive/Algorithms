function sym(...args) {
  const diff = [];
  args[0].forEach((el) => {
    if (!args[1].includes(el)) diff.push(el);
  });
  args[1].forEach((el) => {
    if (!args[0].includes(el)) diff.push(el);
  });
  return args[2]
    ? sym(diff, ...args.slice(2))
    : diff.filter((el, i) => diff.indexOf(el) === i).sort((a, b) => a - b);
}
