import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";
import alertContext from "../../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const useAlertContext = useContext(alertContext);
  const [text, setText] = useState();

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      useAlertContext.setAlert("Please enter something", "light");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search Users"
          onChange={onChange}
          value={text}
        ></input>
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        ></input>
      </form>
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
