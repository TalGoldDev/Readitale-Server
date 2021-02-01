import { fetchRedditPostData, fetchTopRedditLinks } from "../api/requests.js";
import { Post } from "../model/post.js";

const authentication = function (req, res, next) {
  const auth = { login: process.env.USERNAME, password: process.env.PASSWORD };

  // parse login and password from headers
  const b64auth = (req.headers.authorization || "").split(" ")[1] || "";
  const [login, password] = Buffer.from(b64auth, "base64")
    .toString()
    .split(":");

  // Verify login and password are set and correct
  if (login && password && login === auth.login && password === auth.password) {
    // Access granted...
    return next();
  }

  // Access denied...
  res.set("WWW-Authenticate", 'Basic realm="401"'); // change this
  res.status(401).send("Authentication required."); // custom message
};

const fetchStories = async function (req, res) {
  let arrayPosts = await fetchTopRedditLinks();

  arrayPosts.forEach(async (element) => {
    let postData = await fetchRedditPostData(element);
    let newPostItem = await new Post(postData);
    newPostItem.save();
  });

  res.send("new stories saved to the database");
};

const getStories = async function (req, res) {
  Post.find({}, function (err, data) {
    res.send(data);
  });
};

function accessControlAllowOrigin(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type,responseType,accept,Authorization"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
}

export { accessControlAllowOrigin as accessControlAllowOrigin };
export { fetchStories as fetchStories };
export { getStories as getStories };
export { authentication as authentication };
