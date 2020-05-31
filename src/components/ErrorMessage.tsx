import React from "react";

type ErrorMessageProps = {
  command: string;
};
const ErrorMessage = (props: ErrorMessageProps) => {
  return (
    <div className="terminal-error-group">
      {/* <span className="terminal-error">
          {`zsh: command not found: ${props.command.split(' ')[0]}`}
          </span> */}
      <span>{`What are you typing "${props.command.split(' ')[0]}" for??`}</span>
      <span>{`Told you to type 'help' to view a list of available commands bruh!`}</span>
    </div>
  );
};

export default ErrorMessage;
