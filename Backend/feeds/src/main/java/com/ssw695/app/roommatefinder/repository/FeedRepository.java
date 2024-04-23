package com.ssw695.app.roommatefinder.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ssw695.app.roommatefinder.entity.*;


@Repository
public interface FeedRepository extends JpaRepository<Feed, Integer>  {

}
