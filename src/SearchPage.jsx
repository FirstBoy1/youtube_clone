import React from 'react';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';

import ChannelRow from './ChannelRow';
import './SearchPage.css';
import VideoRow from './VideoRow';

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="//yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="Clever Programmer"
        verified
        subs="761k"
        noOfVideos={362}
        description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
      />

      <hr />

      <VideoRow
        views="24k"
        subs="761k"
        description="Join the REACT challenge (7th September) ..."
        timestamp="5 hours ago"
        channel="Clever Programmer"
        title="🔴 Build a Whatsapp Clone with MERN Stack (MongoDB, Express, React, Node JS)"
        image="https://i.ytimg.com/vi/gzdQDxzW2Tw/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDdym1b-RzT9LPYaSmlX-mDK-fGCA"
      />
    </div>
  );
}

export default SearchPage;
