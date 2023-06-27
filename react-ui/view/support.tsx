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
    <Container>
      <div className="support__wrapper--title">
        <h1>Support - 24 / 7</h1>
        <h2>
          All The <span className="yellow-mark">Help And Support</span> You Need
          To Use Factile
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
    </Container>
  );
}

export default Support;

const Container = styled.section`
  color: white;
  background: #1d8bc3;
  width: 100%;
  height: 100%;
  font-family: sans-serif;

  .support__wrapper--title {
    padding: 32px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
  }

  .yellow-mark {
    color: #f3f704;
  }

  .support__wrapper--contact {
    width: 90%;
    margin: 0 auto;
  }

  .support__wrapper--form div {
    width: 100%;
    height: auto;
  }

  .support__wrapper--form div:first-of-type {
    padding-bottom: 14px;
  }

  .support__wrapper--form fieldset {
    background: #1e7faf;
    border: none;
    padding: 24px;
  }

  .support__wrapper--form legend,
  .support__wrapper--username,
  .support__wrapper--description {
    border-radius: 5px;
    background: #fff;
    padding: 10px 15px;
  }

  .support__wrapper--form legend {
    color: black;
    border: none;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: -0.02em;
    text-align: left;
    box-shadow: 0 3px 22px 2px rgba(0, 0, 0, 0.12);
  }

  .support__wrapper--username {
    width: 100%;
    font-size: 17px;
    line-height: 1.4;
    color: #444;
    border: 2px solid transparent;
    border-radius: 5px;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0);
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  .support__wrapper--username:focus {
    outline: none;
    border-color: #f3f704;
    box-shadow: 0 0 10px #c6ce71;
  }

  .invalid:focus,
  .invalid {
    border-color: #f704049d;
    box-shadow: 0 0 10px #ce7171;
  }

  .support__wrapper--description {
    width: 100%;
    min-height: 100px;
    height: auto;
    font-size: 17px;
    resize: vertical;
    font-family: sans-serif;
  }

  .support__wrapper--description:focus {
    outline: none;
    border-color: #f3f704;
    box-shadow: 0 0 10px #c6ce71;
  }

  .support__wrapper--container {
    padding-top: 12px;
    text-align: end;
  }

  .support__wrapper--button {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .support__wrapper--button button {
    padding: 12px 24px;
    background: #fbed55;
    border: none;
    border-radius: 7px;
    font-size: 17px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 3px 22px 2px rgba(0, 0, 0, 0.12);
  }

  .support__wrapper--button button:hover {
    background: #d3c849;
  }

  .support__error {
    padding-left: 12px;
    color: #f704049d;
  }
`;
