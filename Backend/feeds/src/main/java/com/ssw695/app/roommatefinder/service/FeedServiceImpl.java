package com.ssw695.app.roommatefinder.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssw695.app.roommatefinder.entity.Feed;
import com.ssw695.app.roommatefinder.exception.FeedAlreadyExistsException;
import com.ssw695.app.roommatefinder.exception.FeedIdNotFoundException;
import com.ssw695.app.roommatefinder.repository.FeedRepository;

@Service
public class FeedServiceImpl implements FeedService {

	@Autowired
	private FeedRepository iFeedRepository;
	

	
	private static final Logger log = LoggerFactory.getLogger(FeedServiceImpl.class);
	
	
	@Override
	public Feed addFeed(Feed feed) {
	    feed = iFeedRepository.save(feed); 
	    return feed; 
	}

	@Override
	public Feed deleteFeed(Feed feed) {
	    if (!iFeedRepository.existsById(feed.getFeedId())) { 
	        throw new FeedIdNotFoundException("Feed with id " + feed.getFeedId() + " not found."); 
	    }

	    iFeedRepository.delete(feed);
	    return feed;
	}
	
	@Override
	public List<Feed> viewAllFeeds() {

		List<Feed> feeds = iFeedRepository.findAll();
		if(feeds != null)
			log.info("Feed found ");
		else
			log.error("Feed not found" );
		return feeds;
	}
	
    
	
}
