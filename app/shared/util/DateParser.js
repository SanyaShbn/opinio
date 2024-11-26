import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { format } from 'date-fns';

const formatTimestampToDate = (timestamp) => {
  const date = new Date(timestamp); // Преобразуем TIMESTAMP в объект Date
  return format(date, 'dd.MM.yyyy'); // Форматируем дату в "dd.mm.YYYY"
};

const DateParser = () => {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    // Пример TIMESTAMP из базы данных
    const timestampFromDb = '2024-11-25 18:13:34.730379';
    
    // Преобразование TIMESTAMP в формат "dd.mm.YYYY"
    const date = formatTimestampToDate(timestampFromDb);
    setFormattedDate(date);
  }, []);

  return (
    <View>
      <Text>Форматированная дата: {formattedDate}</Text>
    </View>
  );
};

export default DateParser;