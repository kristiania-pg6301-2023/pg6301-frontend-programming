import React from "react";
import { Link, Route, Routes } from "react-router-dom";

function FrontPage() {
  return <>
    <ul>
      <li><Link to={"/tasks"}>List tasks</Link></li>
      <li><Link to={"/tasks/new"}>Create task</Link></li>
    </ul>
  </>;
}

function TasksList() {
  return <>
    <h2>List tasks</h2>
    <div>
      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequatur earum exercitationem, illum in,
        incidunt iusto nam nostrum odit pariatur perferendis, quae quasi quibusdam quis quisquam quos sit voluptas
        voluptatem.
      </div>
      <div>A, adipisci aliquam asperiores dicta, dolore error facilis harum illum modi molestiae nostrum nulla odio
        reprehenderit velit voluptas? Adipisci deserunt, dolore doloribus eius iusto placeat porro quasi quod tempora
        unde.
      </div>
      <div>Dignissimos doloremque est et eum natus rerum vel voluptate! Ad laborum nam nobis quae reprehenderit! Alias,
        aut beatae dignissimos ducimus, facilis fugit harum, ipsa natus non numquam odit praesentium tempora!
      </div>
      <div>Dolorem inventore molestiae nulla placeat quasi ratione rem vitae. Adipisci aliquam aliquid blanditiis
        commodi consequatur dignissimos doloribus ea, esse facere in iusto magnam mollitia nisi quod recusandae rem vel
        veritatis.
      </div>
      <div>Delectus nobis quasi quos tempora! Corporis impedit iure minus sequi tempore? Aliquam aspernatur assumenda,
        earum expedita ipsam iure, laudantium magni molestias nobis nulla omnis quisquam ullam, unde veritatis vero
        voluptatibus?
      </div>
      <div>Ab accusamus amet corporis cumque debitis delectus dicta exercitationem explicabo hic, inventore ipsa ipsam
        iste itaque, maiores necessitatibus nobis obcaecati odit possimus, praesentium quis quod recusandae rerum sint
        voluptatibus voluptatum.
      </div>
      <div>Alias, amet atque autem deleniti deserunt dignissimos dolorum earum exercitationem fugit harum id magni
        maiores mollitia nemo neque nobis numquam omnis pariatur praesentium quam quasi rerum similique sit ullam
        voluptas?
      </div>
      <div>Ad adipisci atque debitis deleniti deserunt dicta dolores expedita explicabo fugiat id illo illum in ipsum
        iste laboriosam laborum magni, modi, officia, perspiciatis placeat quam quod reiciendis repellat tempore velit?
      </div>
      <div>Aspernatur distinctio facere illo ipsam temporibus ut vero? At consequatur deleniti error illum incidunt ipsa
        perferendis tempora. Architecto asperiores blanditiis deleniti labore magnam modi nam quis quod vel veritatis!
        Nostrum!
      </div>
      <div>Aliquid delectus doloremque ducimus explicabo molestias nulla pariatur possimus praesentium repellendus!
        Aspernatur deleniti maxime nobis? Consectetur debitis dolores eaque et iusto molestias nam, reiciendis rerum ut?
        Nam omnis placeat repudiandae?
      </div>
      <div>Assumenda consequuntur doloribus ducimus est ipsa maiores neque nihil possimus praesentium provident sequi,
        temporibus, ut veniam vero voluptatem? Ad animi deserunt earum ex labore odit placeat quasi quibusdam veritatis
        voluptates?
      </div>
      <div>Deserunt, ipsa minus numquam porro quasi sequi voluptates voluptatibus. Distinctio facilis illum laudantium
        minus nesciunt obcaecati optio quas veritatis? Commodi consequuntur, eaque enim facere necessitatibus
        perspiciatis possimus veniam voluptate voluptatem!
      </div>
      <div>Amet consectetur corporis cupiditate expedita, fugiat quibusdam. Accusamus ad, culpa cum dolor eius ipsa
        magni omnis ratione sequi voluptates. Adipisci autem blanditiis deserunt doloremque expedita illum laborum
        ratione totam. Nulla!
      </div>
      <div>Doloremque impedit in minima placeat voluptatibus. Autem culpa cumque doloribus ducimus eveniet expedita
        facilis quisquam reiciendis veniam! Dolorem fugiat itaque neque numquam provident saepe sunt? Doloremque fugit
        necessitatibus quo ut.
      </div>
      <div>Alias, aperiam aut commodi expedita harum inventore ipsa labore libero nesciunt quaerat quos repellendus sunt
        veniam? Delectus deserunt dolore eligendi expedita ipsum, nam non nostrum praesentium reprehenderit, sapiente
        similique, unde.
      </div>
      <div>Accusamus adipisci architecto aspernatur at aut corporis cum doloribus eveniet fugiat in incidunt inventore
        ipsa, laboriosam necessitatibus nisi nostrum placeat, praesentium quam qui quo quos similique temporibus ut
        velit voluptatum.
      </div>
      <div>Atque consequatur distinctio eaque eius fuga ipsam nobis quam quo temporibus voluptate? Aspernatur commodi
        deleniti dolorum, eius error necessitatibus rem similique soluta veritatis voluptas! Blanditiis explicabo nihil
        perferendis quisquam quod.
      </div>
      <div>Consequuntur cupiditate debitis, doloribus eligendi fugiat impedit in, nesciunt, non optio provident quae
        quos sit tenetur velit veritatis! Ab consequuntur corporis delectus dolorem eveniet natus pariatur similique ut
        vel voluptate!
      </div>
      <div>Accusantium adipisci asperiores autem consequuntur, culpa cum distinctio eveniet fugiat illo in incidunt
        labore quae quasi quia reprehenderit vel vero? Aperiam blanditiis culpa magni nesciunt non porro sint sunt
        suscipit!
      </div>
      <div>Deleniti excepturi fugiat libero molestias necessitatibus praesentium rem reprehenderit sint soluta ullam.
        Consequuntur culpa dicta dolor dolores eos iure, mollitia nesciunt nihil nisi non perferendis porro possimus
        praesentium sit ullam.
      </div>
    </div>
    </>;
}

function AddTaskForm() {
  return <>
    <h2>Add tasks</h2>
  </>;
}

function TaskRoutes() {
  return <Routes>
    <Route path={"/"} element={<FrontPage />} />
    <Route path={"/tasks"} element={<TasksList />} />
    <Route path={"/tasks/new"} element={<AddTaskForm />} />
    <Route path={"*"} element={<h2>Not found</h2>} />
  </Routes>;
}

export function TaskApplication() {
  return <>
    <header><h1>My Task Application</h1></header>
    <nav><Link to={"/"}>Front page</Link></nav>
    <main>
      <TaskRoutes />
    </main>
    <footer>Made with 💚 by Johannes Brodwall</footer>
  </>;
}
