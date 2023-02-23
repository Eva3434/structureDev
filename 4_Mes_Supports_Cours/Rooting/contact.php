<?php
    ob_start();

?>

    <form action="" method="post">
      <label for="">
        <input type="text" name="" id="" placeholder="azd">
      </label>
      <label for="">
        <input type="text" name="" id="" placeholder="azd">
      </label>
      <label for="">
        <input type="text" name="" id="" placeholder="azd">
      </label>
      <label for="">
        <input type="text" name="" id="" placeholder="azd">
      </label>
    </form>


<?php
    $content=ob_get_clean();
    require_once "layout.php";
    ?>