<<<<<<< HEAD
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AboutTeam, Landing, SignIn, SignUp, Feedback, Account, Rules, CreateGame, Error, PlayGame, Support} from '../view';

const Main = () => {
  return (
    <main className='y-wrap'>
=======
import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  AboutTeam,
  Landing,
  SignIn,
  SignUp,
  Feedback,
  Account,
  Rules,
  CreateGame,
  Error,
  PlayGame,
  Support,
} from "../view";

const Main = () => {
  return (
    <main className="y-wrap">
>>>>>>> 547138c (add leanin in addition to leanin props, and fix merge)
      <Routes>
        <Route path="/about-us" element={<AboutTeam />} />
        <Route path="/" element={<Landing />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/account" element={<Account />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/create-game" element={<CreateGame />} />
        <Route path="/play" element={<PlayGame />} />
<<<<<<< HEAD
        <Route path='/support' element={<Support />} />
        <Route path="*" element={<Error />} />
    </Routes>
  </main>
  )
=======
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </main>
  );
>>>>>>> 547138c (add leanin in addition to leanin props, and fix merge)
};

export default Main;
