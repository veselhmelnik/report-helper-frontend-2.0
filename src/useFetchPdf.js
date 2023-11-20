import { useState } from "react";

const URL = 'https://report-helper.onrender.com';

export default function useFetchPdf () {
  const [text, setText] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

    const fetchPdf = async (formData) => {
    try {
      setLoading(true);
      await fetch(URL, {
        method: "post",
        body: formData,
      })
        .then((res) => {
          return res.json();
        })
        .then((text) => {
          setText(text);
        });
    } catch (err) {
      setError(err);
    } finally {}
    setLoading(false);
  };

  return {text, error, loading, fetchPdf}

};
