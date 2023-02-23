<?php
ob_start();
?>
<!-- section>(article>h2{title $ }+p>lorem)*5 -->
<section>
    <article>
        <h2>title 1 </h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita esse mollitia ipsa possimus impedit incidunt, quia fuga ipsum enim tempora beatae laudantium? Praesentium libero ducimus dolore odio fuga aspernatur assumenda.</p>
    </article>
    <article>
        <h2>title 2 </h2>
        <p>Explicabo ex pariatur delectus ullam ab quae, obcaecati accusamus eveniet accusantium saepe. Vel iste quasi aliquid numquam et, officia quis molestiae dolore, omnis, minima aliquam eligendi qui eum repellat nihil?</p>
    </article>
    <article>
        <h2>title 3 </h2>
        <p>Aperiam at quod eaque quaerat atque, similique labore ratione quidem? Iure nulla vel sequi quidem, aspernatur non quae tenetur illum modi blanditiis nam debitis amet ab, dolorum, eum quod deleniti.</p>
    </article>
    <article>
        <h2>title 4 </h2>
        <p>Facilis, mollitia explicabo. Nihil quis totam libero accusantium voluptate maxime quo maiores itaque obcaecati. Eum natus hic adipisci corporis quasi blanditiis reiciendis. Omnis, soluta velit eum rem ducimus veniam consequatur.</p>
    </article>
    <article>
        <h2>title 5 </h2>
        <p>Laboriosam inventore aliquid omnis suscipit eum deserunt molestiae tempora eius alias quibusdam in, molestias aperiam pariatur voluptatem, dignissimos sunt illum corporis nobis? At expedita eveniet eos sint cum quisquam tenetur.</p>
    </article>
</section>
<form action="" method="post">
    <label for="mail"></label>
<input type="email" name="mail" placeholder="entre ton email" id="">

</form>
<?php

$content= ob_get_clean();
require_once 'layout.php';
?>