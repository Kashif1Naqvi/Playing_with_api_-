import React from "react";
import LanguageList from "./LanguageList";

const Languages = ({ languages }) => {
  const languageMapped = languages.map(language => (
    <LanguageList language={language} key={language.id} />
  ));
  return <div>{languageMapped}</div>;
};

export default Languages;
