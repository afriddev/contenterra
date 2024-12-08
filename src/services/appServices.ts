import axios from "axios";
export async function getServerData() {
    const response = await axios("https://www.reddit.com/r/reactjs.json");
    const serverData = await response?.data;
    return serverData?.data?.children;
  }