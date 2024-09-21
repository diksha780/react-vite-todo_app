function AddTodo() {
  return (
    <div class="container text-center">
      <div class="row justify-content-md-center">
        <div class="col-md-auto">
          <input type="text" placeholder="Enter todo here"></input>
        </div>
        <div class="col col-lg-2">
          <input type="date"></input>
        </div>
        <div class="col col-lg-2">
          <button type="button" class="btn btn-success btn1">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
