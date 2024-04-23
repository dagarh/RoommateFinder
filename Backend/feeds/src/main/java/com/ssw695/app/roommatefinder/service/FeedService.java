package com.ssw695.app.roommatefinder.service;

import java.util.List;


import com.ssw695.app.roommatefinder.entity.Feed;



public interface FeedService {

	public List<Feed> viewAllFeeds() ;

	public Feed addFeed(Feed feed);
	
	public Feed deleteFeed(Feed feed);
}