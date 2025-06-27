import React from 'react';
import './Error.css';

interface ErrorProps{
    received_errors: string;
}
export const ErrorComponent: React.FC<ErrorProps> = ({ received_errors}) => {
  return (
    <div className="error-message">
        <span className="error-text">Looks like we have an error! Please try re-loading. 
            If it doesn't work, please contact us with the following Error: {received_errors}</span>
    </div>
  );
};

export default ErrorComponent;