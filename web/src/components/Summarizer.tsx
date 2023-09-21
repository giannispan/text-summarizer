import styles from './styles.module.css';
import React, { useState } from 'react';
import axios from 'axios';

const Summarizer: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [summary, setSummary] = useState<string>('');

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const summarizeText = async () => {
    try {
      let response;
      response = await axios.post('http://localhost:5000/summarize', { inputText: inputValue });
      setSummary(response.data.summary);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Text Summarizer App</h1>
      <div>
        <textarea
          className={styles.inputStyle}
          name="postText"
          cols={40}
          rows={5}
          value={inputValue}
          onChange={handleTextChange}
        />
        <button className={styles.inputStyle} onClick={summarizeText}>
          Summarize
        </button>
      </div>
      {summary && (
        <div className={styles.summaryContainer}>
          <h2>Summary:</h2>
          <p className={styles.summaryContent}>{summary}</p>
        </div>
      )}
    </div>
  );
};

export default Summarizer;
