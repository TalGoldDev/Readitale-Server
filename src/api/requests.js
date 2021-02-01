import axios from "axios";
import { URL } from "./constants.js";

const fetchTopRedditLinks = async function () {
  const response = await axios.get(URL);
  let postsArray = response.data.data.children;

  let postLinksArray = [];
  for (let i = 0; i < postsArray.length; i++) {
    postLinksArray.push(postsArray[i].data.url + ".json");
  }

  return postLinksArray;
};

const fetchRedditPostData = async function (link) {
  try {
    const response = await axios.get(link);
    const postData = response.data[0].data.children;
    const writingPromptsData = response.data[1].data.children;

    let data = getData(postData, writingPromptsData);
    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
  function getData(postData, prompData) {
    let postIndex = 0;
    let promptIndex = 0;

    let summary = postData[postIndex].data.title;
    let author = prompData[promptIndex].data.author;
    if (author == "AutoModerator") {
      promptIndex += 1;
      author = prompData[promptIndex].data.author;
    }
    let score = prompData[promptIndex].data.score;
    let story = prompData[promptIndex].data.body;

    return [author, score, summary, story];
  }
};

export { fetchTopRedditLinks as fetchTopRedditLinks };
export { fetchRedditPostData as fetchRedditPostData };
