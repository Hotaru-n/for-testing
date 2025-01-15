import { useEffect, useState } from "react";

import { LocalStoragePreset } from "lowdb/browser";

type Data = {
  messages: string[];
};

const defaultData: Data = { messages: [] };
const db = LocalStoragePreset<Data>("db", defaultData);

db.update(({ messages }) => messages.push("foo"));

export default function LowdbTest() {
  const [messages, setMessages] = useState<string[]>([]);

  // Чтение данных из хранилища и обновление состояния
  useEffect(() => {
    db.read(); // Загружаем данные из хранилища
    setMessages(db.data.messages); // Устанавливаем сообщения в состояние
  }, []);

  return (
    <div>
      <h1>LowdbTest</h1>
      <h2>{messages}</h2>
    </div>
  );
}
