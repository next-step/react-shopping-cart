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

ConfirmDelete.args = {
  modalType: "delete",
};

AddItemToCart.args = {
  modalType: "add",
};
