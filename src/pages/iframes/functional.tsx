import React, { useState } from 'react';
import { createPortal } from 'react-dom';

export const FunctionalIFrameComponent = ({
  children,
  title,
  ...props
}) => {
  const [contentRef, setContentRef] = useState(null);
  const mountNode =
    contentRef?.contentWindow?.document?.body;

  return (
    <iframe title={title} {...props} ref={setContentRef}>
      {mountNode && createPortal(children, mountNode)}
    </iframe>
  );
};


interface Point {
  x: number;
  y: number;
}

interface PointConstructor {
  // eslint-disable-next-line @typescript-eslint/prefer-function-type
  new(x: number, y: number): Point;
}

class Point3D {
  constructor() {
    console.log(123);
  }
}

class Point2D extends Point3D implements Point {
  readonly x: number;
  readonly y: number;

  constructor(x: number, y: number) {
    super();
    this.x = x;
    this.y = y;
  }
}

function newPoint(
  pointConstructor: PointConstructor,
  x: number,
  y: number
): Point {


  return new pointConstructor(x, y);
}

const point: Point = newPoint(Point2D, 2, 2);