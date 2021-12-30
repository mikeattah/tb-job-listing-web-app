// Source: https://www.bezkoder.com/react-drag-drop-file-upload/

import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3000", // change baseURL to REST APIs url that your Server configures.
  headers: {
    "Content-type": "application/json",
  },
});
