function Addtodo() {
  return (
    <div class="container text-center">
      <div class="row ym-row">
        <div class="col-4">
          <input type="text" placeholder="Enter TodoHere" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success ym-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addtodo;
