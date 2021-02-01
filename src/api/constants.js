const SETTINGS = {
  subreddit: "writingprompts",
  postsLimit: 50,
  timeFrame: "month",
};

const URL = `https://www.reddit.com/r/${SETTINGS.subreddit}/top/.json?t=${SETTINGS.timeFrame}&limit=${SETTINGS.postsLimit}`;

export { URL as URL };
