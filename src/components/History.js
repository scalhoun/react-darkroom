import React from 'react';

const onEmpty = (setting) => {
  switch (setting) {
    case "disabled":
      break;
    case "hidden":
      break;
  }
}

const History = ({
  step, length,
  children
  }) => {

  var
    backButton,
    fwdButton,
    childNodes = [];

  React.Children.forEach(children, child => {
    var { ifEmpty, action } = child.props;
    if (action === "back") {

      backButton = (
        <button
          disabled={step === 0 && ifEmpty === "disable"}
          style={{display: step === 0 && ifEmpty === "hide" ? 'none': 'inherit'}}
          {...child.props}
        />);
      childNodes.push(backButton);
    } else if (action === "forward") {
      fwdButton = (
        <button
          disabled={step === (length) && ifEmpty === "disable"}
          style={{display: step === (length) && ifEmpty === "hide" ? 'none': 'inherit'}}
          {...child.props}
        />);
      childNodes.push(fwdButton);
    } else {
      childNodes.push(child);
    }
  });

  return (
    <span>
      {childNodes.map((childNode, index) => {
        return (<span key={index}>{childNode}</span>)
      })}
    </span>
  );
};

export default History;
