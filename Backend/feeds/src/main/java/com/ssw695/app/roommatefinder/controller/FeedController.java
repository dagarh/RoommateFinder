package com.ssw695.app.roommatefinder.controller;
import com.ssw695.app.roommatefinder.exception.*;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssw695.app.roommatefinder.controller.FeedController;
import com.ssw695.app.roommatefinder.entity.Feed;
import com.ssw695.app.roommatefinder.service.FeedServiceImpl;


@RestController
@RequestMapping("/feeds")
public class FeedController {
	@Autowired
	private FeedServiceImpl feedservice;

	private static final Logger log = LoggerFactory.getLogger(FeedController.class);

	
	
	@GetMapping("/viewAllfeeds")
	public ResponseEntity<List<Feed>> viewAllFeeds() {
		List<Feed> feeds = feedservice.viewAllFeeds();
		if (!feeds.isEmpty()) {
			log.info("feed fetched ");
			return new ResponseEntity<List<Feed>>(feeds, HttpStatus.OK);
		}
		else {
			log.error("Exception while fetching");
			throw new FeedNotFoundException("There are no feeds available.");
		}
	}
	
	@PostMapping
	public ResponseEntity<Feed> addFeed(@RequestBody Feed feed) {

		Feed insertedFeed = feedservice.addFeed(feed);
		System.out.println("**********" + insertedFeed);
		if (insertedFeed != null) {
			log.info("New feed created. ");
			return new ResponseEntity<Feed>(insertedFeed, HttpStatus.OK);
		}
		else {
			log.error("Exception occured while creating Feed");
			throw new FeedIdNotFoundException("Feed with " + feed.getFeedId() + "not found.");
		}
	}

	@DeleteMapping
	public ResponseEntity<Feed> deleteFeed(@RequestBody Feed feed) {
		Feed deletedFeed = feedservice.deleteFeed(feed);
		if (deletedFeed != null) {
			log.info("Feed is deleted.");
			return new ResponseEntity<Feed>(feed, HttpStatus.OK);
		}

		else {
			log.error("Exception deleting feed");
			throw new FeedIdNotFoundException("Feed with " + feed.getFeedId() + "not found.");
		}
	}
	
	
}
