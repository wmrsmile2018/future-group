import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './style.scss';

export default function Loading() {
  return (
    <div className="loading">
      <CircularProgress/>
    </div>
  )
}
