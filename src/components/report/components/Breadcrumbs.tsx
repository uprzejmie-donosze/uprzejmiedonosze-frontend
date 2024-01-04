import React from "react";
import styled from "styled-components";
import { colors } from "../../../styles";

type Props = {
  active: string;
  items: { name: string; value: string }[];
};

export function FormBreadcrumbs({ active, items }: Props) {
  return (
    <small>
      {items.map((item, i) => (
        <span key={item.name}>
          <Item data-active={item.value === active}>{item.name}</Item>
          {i !== items.length - 1 && <span>&nbsp;&nbsp;‣</span>}
        </span>
      ))}
    </small>
  );
}

const Item = styled.span<{ "data-active": boolean }>`
  cursor: default;
  padding-left: 8px;
  color: ${(props) =>
    props["data-active"] ? colors.secondary : colors.textLight};
`;
