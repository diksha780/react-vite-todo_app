function TodoItem1() {
  let todoName = "Buy Milk";
  let todoDate = "17/9/2024";
  return (
    <div class="container ">
      <div class="row item">
        <div class="col-md-auto">{todoName}</div>
        <div class="col col-lg-2 col2">{todoDate}</div>
        <div class="col col-lg-2 col3">
          <button type="button" class="btn btn-danger btn1">
            Danger
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem1;
