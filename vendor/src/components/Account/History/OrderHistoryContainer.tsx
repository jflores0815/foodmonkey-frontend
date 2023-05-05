import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import styles from "./OrderHistoryContainer.module.scss";
import NavigationContainer from "../Navigation/NavigationContainer";
import OrderHistoryContent from "./OrderHistoryContent";

interface ContainerProps {}

const OrderHistoryContainer: React.FC<ContainerProps> = ({}) => {
  return (
    <Container fluid="xxl">
      <Row className={styles.container}>
        <Col lg={4} className={styles.mobileNav}>
          <div className={styles.navigationContainer}>
            <NavigationContainer />
          </div>
        </Col>
        <Col lg={8}>
          <div className={`${styles.contentContainer}`}>
            <OrderHistoryContent />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderHistoryContainer;
