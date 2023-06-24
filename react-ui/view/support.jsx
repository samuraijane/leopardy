import React, { useEffect, useState } from "react";

function Support() {
  const [fields, setFields] = useState({
    username: "",
    description: "",
  });
  const [isValid, setIsValid] = useState(false);
  const REGEX = /[a-zA-Z0-9]+$/;

  useEffect(() => {
    if (!fields.username.match(REGEX) && fields.username !== "") {
      setIsValid(true);
    } else setIsValid(false);

    return () => setIsValid(false);
  }, [fields]);

  const placeHolders = {
    username: "Username",
    area: "Description",
  };

  const handleChange = (e) => {
    const key = e.target.name;
    const { value } = e.target;
    if (value.length > 500) return;

    const _fields = { ...fields };
    _fields[key] = value;
    setFields(_fields);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (isValid || fields.username === "" || fields.description === "") {
      setIsValid(true);
      return;
    }
    console.log(fields.username);
    console.log(fields.description);
  };

  return (
    <>
      <section className="container">
        <div className="y-wrap">
          <div className="support__wrapper--title">
            <h1>Support - 24 / 7</h1>
            <h2>
              All The <span className="yellow-mark">Help And Support</span> You
              Need To Use Factile
            </h2>
          </div>
          <div className="support__wrapper--contact">
            <form id="form" className="support__wrapper--form">
              <fieldset>
                <legend>get in touch</legend>
                <div>
                  <input
                    type="username"
                    name="username"
                    id="username"
                    placeholder={placeHolders.username}
                    value={fields.username}
                    className={`support__wrapper--username ${
                      isValid ? "invalid" : ""
                    }`}
                    onChange={handleChange}
                  ></input>
                </div>
                <div>
                  <textarea
                    type="text"
                    name="description"
                    id="description"
                    className="support__wrapper--description"
                    value={fields.description}
                    placeholder={placeHolders.area}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="support__wrapper--container">
                  <span>
                    {fields.description.length}
                    <span>/500</span>
                  </span>
                </div>
                {isValid && (
                  <span className="support__error">
                    Only alphanumeric characters
                  </span>
                )}
                <div className="support__wrapper--button">
                  <button type="submit" onClick={handleClick}>
                    Submit
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Support;
