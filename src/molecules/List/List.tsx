import React from "react";

import { Row } from "layouts/Grid";

type Props = {
  items?: any[];
  ItemComponent: (props: any) => JSX.Element;
  keyOption?: string;
};

export const List = (props: Props) => {
  const { items = [], ItemComponent, keyOption = "index" } = props;
  return (
    <Row>
      {items.map(item => (
        <div>
          <ItemComponent item={item} />
        </div>
      ))}
    </Row>
  );
};
