import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import {
  FaBookmark,
  FaRegEye,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const {
    _id,
    image_url,
    title,
    rating,
    total_view,
    author,
    published_date,
    details,
  } = news;
  return (
    <>
      <Card className="mt-2">
        <Card.Header className="d-flex align-items-center">
          <div className="">
            <Image style={{ height: "60px" }} src={author.img} roundedCircle />
          </div>
          <div className="ps-3 flex-grow-1">
            <h6 className="mb-0">{author?.name}</h6>
            <p> {moment(author?.published_date).format("yyyy-mm-DD")}</p>
          </div>
          <div className="mx-2 d-flex gap-2">
            <FaBookmark></FaBookmark>
            <FaShareAlt></FaShareAlt>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length < 250 ? (
              <>{details}</>
            ) : (
              <>
                {details.slice(0, 250)}...{" "}
                <Link to={`/news/${_id}`} className="text-danger">
                  Read More
                </Link>
              </>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className=" align-items-center d-flex">
          <div className="flex-grow-1">
            <Rating
            className="text-danger align-items-center p-2"
            readonly
             placeholderRating={rating?.number}
             emptySymbol={<FaRegStar></FaRegStar>}
             placeholderSymbol={<FaStar></FaStar>}
             fullSymbol={<FaStar></FaStar>}
            ></Rating>
          
            <span>{rating?.number}</span>
          </div>
          <div className="">
            <FaRegEye></FaRegEye> {total_view}
          </div>
        </Card.Footer>
      </Card>
    </>
  );
};

export default NewsCard;
