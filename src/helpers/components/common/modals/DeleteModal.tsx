import TrashIcon from "../icons/TrashIcon";

type DeleteModalSchema = {
  question: string;
  okPrompt: string;
  cancelPrompt: string;
  handleCancelPrompt?: () => void;
  handleDeletePrompt?: () => void;
};

export default function DeleteModal(props: DeleteModalSchema) {
  // Props
  const {
    question,
    okPrompt,
    cancelPrompt,
    handleCancelPrompt,
    handleDeletePrompt,
  } = props;
  return (
    <div className="relative p-6  text-center max-w-[28rem] bg-white rounded-lg shadow dark:bg-gray-800">
      <TrashIcon />

      <p className="mb-4 text-gray-500 dark:text-gray-300 text-xs">
        {question}
      </p>
      <div className="flex justify-center items-center space-x-4 px-6">
        <button
          data-modal-toggle="deleteModal"
          type="button"
          className="min-w-[6rem] py-2 px-2 text-xs font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          onClick={handleCancelPrompt}
        >
          {cancelPrompt}
        </button>
        <button
          type="submit"
          className="min-w-[6rem] py-2 px-2 text-xs font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
          onClick={handleDeletePrompt}
        >
          {okPrompt}
        </button>
      </div>
    </div>
  );
}
