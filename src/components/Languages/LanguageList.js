import React from "react";

const LanguageList = ({ language }) => (
  <div>
    <p className="form-control">LanguageID:{language.id}</p>
    <p className="form-control">LanguageName:{language.name}</p>
    <p className="form-control">Experties</p>
    <p className="form-control">Read:{language.experties.read}</p>
    <p className="form-control">Speak:{language.experties.speak}</p>
    <p className="form-control">Understand:{language.experties.understand}</p>
    <p className="form-control">Write:{language.experties.write}</p>
  </div>
);

export default LanguageList;
