import React, { Component } from "react";
import styled from "styled-components";
// import Jigsaw from "./Jigsaw";

class Box extends Component {
  render() {
    return (
      <Wrapper>
        <div className="box">
          <img src="" alt="" />
          <h1>Hello</h1>
          <p>
            <strong className="bold">
              Loremipsum dolor sit amet consectetur adipisicing elit. Earum quis
              atque nisi possimus.
            </strong>
            Ea, molestiae maiores voluptatibus rem fugiat quod ipsam itaque odio
            repellat natus maxime fuga tempora modi hic.
          </p>
        </div>

        {/* <Jigsaw /> */}
      </Wrapper>
    );
  }
}

const Wrapper = styled.section`
  .box {
    background-color: #fff;
    width: 960px;
    margin: 50px auto;
    text-align: center;
    border-radius: 20px;
    border-right: 5px solid #ccc;
    border-bottom: 5px solid #999;
  }

  .box h1 {
    color: orangered;
    border-bottom: 10px solid orangered;
    background-color: aquamarine;
    width: 560px;
    margin: 40px auto;
    font-size: 4rem;
  }

  .box p {
    padding: 3rem;
  }

  strong.bold {
    background-color: orange;
    color: #fff;
    width: 300px;
    height: 300px;
    margin: 20px auto;
    padding: 20px;
    border: 5px solid orangered;
    display: block;
  }
`;

export default Box;
