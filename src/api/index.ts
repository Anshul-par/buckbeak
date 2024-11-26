import axios from "axios";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3M2Q4MjZhNTNiNmU5ZTFlMThiMGU4NiIsImlhdCI6MTczMjA4NDQxMX0.5-2yXvlzGjfCtdYvDYpnwK35_Ju-9xv7tV0PtzyD5II";

const customAxios = axios.create({
  baseURL: "http://172.168.16.12:5120",
  headers: {
    Authorization: TOKEN,
    "Content-Type": "application/json",
  },
});

export default customAxios;
