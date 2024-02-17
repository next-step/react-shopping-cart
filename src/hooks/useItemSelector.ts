import { ChangeEvent, useState } from "react";

const useItemSelector = <Item extends { id: number | string }>(items: Item[]) => {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

  const onToggleItem = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;

    const newSelectedItems = new Set(selectedItems);

    selectedItems.has(target.id) ? newSelectedItems.delete(target.id) : newSelectedItems.add(target.id);

    setSelectedItems(newSelectedItems);
  };

  const onToggleAllItems = () => {
    if (selectedItems.size !== 0 && selectedItems.size === items.length) {
      setSelectedItems(new Set());
      return;
    }

    const newSelectedItems = new Set(selectedItems);
    items.forEach((item) => newSelectedItems.add(item.id.toString()));

    setSelectedItems(newSelectedItems);
  };

  const isChecked = (id: string | number) => {
    return selectedItems.has(id.toString());
  };

  return {
    selectedItems,
    onToggleAllItems,
    onToggleItem,
    isChecked,
  };
};

export default useItemSelector;
