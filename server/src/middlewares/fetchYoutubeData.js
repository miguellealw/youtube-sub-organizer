import axios from 'axios';
import keys from '../../config/keys';

export default async (req, res, next) => {
  try {
    /*
      Can't make api request in backend... for some reason
    */
    const youtubeData = await axios({
      url: `https://www.googleapis.com/youtube/v3/subscriptions?part=snippet%2C+contentDetails&mine=true`,
      method: "get",
      headers: {
        'Authorization': `Bearer ${req.user.accessToken}`,
        // 'Access-Control-Allow-Origin': '*'
      }
    });
    req.youtubeData = youtubeData.data;
    next();
  } catch(err) {
    next(err);
  }
}