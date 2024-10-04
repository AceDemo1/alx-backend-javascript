export default function createIteratorObject(report) {
  let list = [];
  for (const i of Object.values(report.allEmployees)) {
    list.push(...i);
    }
  }
  return list;
}
