import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { PrimaryButton } from '../button'

const FeaturedTech = () => (
    <Row>
      <Col sm="6">
        <Card body className="my-3">
          <CardTitle>Maintain Codebase Easily</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <PrimaryButton>Go somewhere</PrimaryButton>
        </Card>
      </Col>
      <Col sm="6">
        <Card body className="my-3">
          <CardTitle>Build scalable Applications</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <PrimaryButton>Go somewhere</PrimaryButton>
        </Card>
      </Col>
    </Row>
  )

export default FeaturedTech;