import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer Qhd6aXn0wmMZJfVijq4d_08Dl28JCoEisctW8r_dlRgk38tcZiWPOEN7SkMmSNUBvIw-7fh5-k13YZuGBPKrxgL2eb_SKEZDrgkBQaRxLmsB0xMXI9wfYEeBA4M4X3Yx",
  },
});
