import React, { useState, useEffect } from "react";
import axios from "axios";

const CurrencyPage = () => {
  const [currencies, setCurrencies] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get(
          "https://www.cbr-xml-daily.ru/daily_json.js"
        );
        setCurrencies(response.data.Valute);
      } catch (err) {
        setError("Не удалось получить данные о валютах");
      }
    };

    fetchCurrencies();
  }, []);

  return (
    <div>
      <h1>Курсы валют ЦБ РФ</h1>
      {error ? (
        <p>{error}</p>
      ) : currencies ? (
        <div>
          <p>USD: {currencies.USD.Value} руб.</p>
          <p>EUR: {currencies.EUR.Value} руб.</p>
        </div>
      ) : (
        <p>Загрузка...</p>
      )}
    </div>
  );
};

export default CurrencyPage;
