// Record<K, T>

interface User6 {
  name: string;
  age: number;
  id: number;
}

function valueCheck(data: User6) {
  const result: Record<keyof User6, boolean> = {
    name: data.name !== "",
    age: data.age > 0,
    id: data.id > 0,
  };
  return result;
}
