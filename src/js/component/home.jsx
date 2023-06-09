import React from "react";
import Navbar from "./Navbar.js";
import Jumbotron from "./Jumbotron.js";
import Card from "./Card.js";
import Footer from "./Footer.js";

//create your first component
const Home = () => {
	return (
		<div>
		  <Navbar/>
		  <Jumbotron/>
		  <div className ="d-flex flex-row mb-3">
          <Card
              title="Card Title"
              imageUrl={"https://fakeimg.pl/500x325"}
              description="Lorem ipsum dolor sit amet. In quas fugit qui voluptate perspiciatis est dolor necessitatibus. Est obcaecati illum ab enim velit qui tempore dolorem aut aliquam doloribus in nisi dolorum est eveniet praesentium. Nam provident internos ut optio ratione ut deserunt nihil vel assumenda optio."
              buttonLabel= "Find Out More"
          />
		  <Card
              title="Card Title"
              imageUrl={"https://fakeimg.pl/500x325"}
              description="Lorem ipsum dolor sit amet. In quas fugit qui voluptate perspiciatis est dolor necessitatibus. Est obcaecati illum ab enim velit qui tempore dolorem aut aliquam doloribus in nisi dolorum est eveniet praesentium. Nam provident internos ut optio ratione ut deserunt nihil vel assumenda optio."
              buttonLabel= "Find Out More"
          />
		  <Card
              title="Card Title"
              imageUrl={"https://fakeimg.pl/500x325"}
              description="Lorem ipsum dolor sit amet. In quas fugit qui voluptate perspiciatis est dolor necessitatibus. Est obcaecati illum ab enim velit qui tempore dolorem aut aliquam doloribus in nisi dolorum est eveniet praesentium. Nam provident internos ut optio ratione ut deserunt nihil vel assumenda optio."
              buttonLabel= "Find Out More"
          />
		  <Card
              title="Card Title"
              imageUrl={"https://fakeimg.pl/500x325"}
              description="Lorem ipsum dolor sit amet. In quas fugit qui voluptate perspiciatis est dolor necessitatibus. Est obcaecati illum ab enim velit qui tempore dolorem aut aliquam doloribus in nisi dolorum est eveniet praesentium. Nam provident internos ut optio ratione ut deserunt nihil vel assumenda optio."
              buttonLabel= "Find Out More"
          />
		  </div>
		  <Footer/>
		</div>
	);
};

export default Home;
