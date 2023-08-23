import styles from './Terms.module.scss';
import React, {useState} from 'react';
import {package_terms, treatments_terms, cancellation_terms} from './data';

const Terms = () => {

  const bigdata = [...package_terms.slice(0, -1), ...treatments_terms.slice(0, -1), ...cancellation_terms.slice(0, -1)];

  const [results, setResults] = useState<typeof bigdata | null>(null);
  const [search, setSearch] = useState("");

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setResults(bigdata.filter(el => el.des.includes(value)));
    if(!value){
      setResults(null)
      setSearch(value);
    } else {
      setSearch(value);
    }
  };

  return (
    <div className={styles.container}>

      <form>
        <input placeholder='Find terms and conditions' value={search} onChange={onSearch} />
      </form>

      {!results ? "" :<div className={styles.box}>
        <h3>Results {results.length}</h3>
        {results.map((el, index, array) =>
          <div className={styles.element} key={index}>
            <span>{index+1}.</span>
            <p>{el.des}</p>
          </div> 
        )}
      </div>}

      <h2>Package Terms and Conditions</h2>
      <div className={styles.box}>
        {package_terms.map((el, index, array) =>
          <div className={styles.element} key={index}>
            {array.length !== index+1 && <span>{index+1}.</span>}
            <p>{el.des}</p>
          </div> 
        )}
      </div>

      <h2>Treatment-Specific Terms and Conditions</h2>
      <div className={styles.box}>
        {treatments_terms.map((el, index, array) =>
          <div className={styles.element} key={index}>
            {array.length !== index+1 && <span>{index+1}.</span>}
            <p>{el.des}</p>
          </div> 
        )}
      </div>

      <h2>Cancellation Policy</h2>
      <div className={styles.box}>
        {cancellation_terms.map((el, index, array) =>
          <div className={styles.element} key={index}>
            {array.length !== index+1 && <span>{index+1}.</span>}
            <p>{el.des}</p>
          </div> 
        )}
      </div>
    </div>
  )
}

export default Terms