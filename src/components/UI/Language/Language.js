import React from 'react';
import classes from './Language.module.css';
import {useTranslation} from 'react-i18next';

const Language = () => {
    const { i18n } = useTranslation();

    return (
      <div className={classes.Language}>
        <button onClick={() => i18n.changeLanguage('en')}>ENG</button>
        <button onClick={() => i18n.changeLanguage('ge')}>ქარ</button>
      </div>
    );
  };
  
  export default Language;
  