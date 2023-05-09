import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Modal, { Props } from "./Modal";

export default {
  title: "Components/Modal",
  component: Modal,
} as Meta;

const Template: Story<Props> = (args) => <Modal {...args} />;

export const ConfirmDelete = Template.bind({});
export const AddItemToCart = Template.bind({});

// TODO: 로직 변경에 따른 임시 처리
// ConfirmDelete.args = {
//   modalType: "delete",
// };

// AddItemToCart.args = {
//   modalType: "add",
// };
