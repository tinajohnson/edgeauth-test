import React from 'react';
import {
  Typography,
} from '@material-ui/core';
import authClient from '../Auth';

export default () => (
  <Typography variant="display1">
    Hello!
    {authClient.isAuthenticated() ? " This is the homepage for " + (authClient.getUser() && authClient.getUsername()) : " Please log in."}
  </Typography>
);
