import React from "react";
import styled from "styled-components";
import Section from "./Section";
import { useSelector } from "react-redux";
import { selectProducts } from "../features/product/productSlice";

function Home() {
  const products = useSelector(selectProducts);
  return (
    <Container>
      {products &&
        products.map((product, index) => (
          <Section
            title={product.title}
            description={product.description}
            backgroundImg={product.image}
            leftBtnText={product.type === "car" ? "Custom Order" : "Order now"}
            rightBtnText={
              product.type === "car"
                ? "Existing Inventory"
                : product.type === "solar"
                  ? "Learn more"
                  : null
            }
          />
        ))}
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  position: relative;
  scroll-behavior: smooth;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
`;
