import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Support() {
  const [fields, setFields] = useState<{
    username: string;
    description: string;
  }>({
    username: "",
    description: "",
  });
  const [isValid, setIsValid] = useState(false);
  const REGEX: RegExp = /[a-zA-Z0-9]+$/;

  useEffect(() => {
    if (!fields.username.match(REGEX) && fields.username !== "") {
      setIsValid(true);
    } else setIsValid(false);

    return () => setIsValid(false);
  }, [fields]);

  interface PlaceHolders {
    username: string;
    area: string;
  }

  const placeHolders: PlaceHolders = {
    username: "Username",
    area: "Description",
  };

  const handleUsernameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value } = event.target;
    if (value.length > 500) return;
    const _fields = { ...fields };
    _fields.username = value;
    setFields(_fields);
  };
  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const { value } = event.target;
    if (value.length > 500) return;
    const _fields = { ...fields };
    _fields.description = value;
    setFields(_fields);
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
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
                    onChange={handleUsernameChange}
                  ></input>
                </div>
                <div>
                  <textarea
                    name="description"
                    id="description"
                    className="support__wrapper--description"
                    value={fields.description}
                    placeholder={placeHolders.area}
                    onChange={handleDescriptionChange}
                  ></textarea>
                </div>
                <div className="support__wrapper--container">
                  <span>
                    {fields.description.length}
                    <span> /500</span>
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
