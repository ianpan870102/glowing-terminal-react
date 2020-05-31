import React from 'react';
import './App.css';
import Terminal from './components/Terminal';

const getYear = () => {
  return new Date().getFullYear();
};

const welcomeMessage = `Welcome to my cyberspace, fellow human.

Type 'help' to view a list of available commands.
`;

const bannerCondensed =
  ' _____             __   _______   ______           \n' +
  '|_   _|            \\ \\ / /  ___|  | ___ \\          \n' +
  '  | |  __ _ _ __    \\ V /| |__    | |_/ /_ _ _ __  \n' +
  "  | | / _` | '_ \\    \\ / |  __|   |  __/ _` | '_ \\ \n" +
  ' _| || (_| | | | |   | |_| |____  | | | (_| | | | |\n' +
  ' \\___/\\__,_|_| |_|   \\_(_)____(_) \\_|  \\__,_|_| |_|\n' +
  '  \u00A9 ' +
  getYear();

const prompt = '>';

function App() {
  return (
    <Terminal welcomeMessage={welcomeMessage} banner={bannerCondensed} terminalPrompt={prompt} />
  );
}

export default App;
