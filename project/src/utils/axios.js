import axios from 'axios';

export const instance = axios.create({
  timeout: 3000,
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    // 'Authorization': `Bearer ${document.cookie}`
  },
});
