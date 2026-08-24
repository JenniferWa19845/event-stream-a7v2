const project = { name: "event-stream-a7v2", owner: "JenniferWa19845", profile: "0032" };

export function summarize(items = []) {
  return items.reduce((total, item) => total + String(item).length, 0);
}

export function describe() {
  return project.name + " ready for " + project.owner;
}

console.log(describe(), summarize([project.name, project.owner]));
