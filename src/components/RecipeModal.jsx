
const ModalCard = ({ id, recipe }) => {

  return (
    <dialog id={id} className="modal">
      {recipe && (
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">{recipe.label}</h3>
          <p className="py-4">Some additional recipe info...</p>
        </div>
      )}
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default ModalCard;
