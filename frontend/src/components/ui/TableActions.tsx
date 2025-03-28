import { Pencil, Trash } from 'lucide-react';
import { ReactElement } from 'react';

interface TableActionsProps {
  onEdit: () => void;
  onDelete: () => void;
}

export const TableActions = ({
  onEdit,
  onDelete,
}: TableActionsProps): ReactElement => {
  return (
    <div className="flex items-center gap-2 w-full justify-center">
      <button
        type="button"
        className="text-gray-500 hover:text-gray-700 hover:bg-gray-700 rounded-full p-2"
        onClick={onEdit}>
        <Pencil className="size-4 text-gray-200" />
      </button>

      <button
        type="button"
        className="text-gray-500 hover:text-gray-700 hover:bg-gray-700 rounded-full p-2"
        onClick={onDelete}>
        <Trash className="size-4 text-gray-200" />
      </button>
    </div>
  );
};
