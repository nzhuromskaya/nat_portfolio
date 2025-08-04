export default function Page() {
  return (
    <main className="flex flex-col">
      <h1 className="text-5xl pl-8">Projects</h1>
      <section>
        <h2>imagine a list of awesome stuff i did</h2>
        <ul>
          <li>
            <a href="#project1">project 1</a>
          </li>
          <li>
            <a href="#project2">project 2</a>
          </li>
          <li>
            <a href="#project1">project 2</a>
          </li>
        </ul>
      </section>
      <section id="project1" className="h-500">
        <h3>project 1 description</h3>
        <p>wow this is awesome blah blah blah - learn more here</p>
      </section>
      <section id="project2" className="h-500">
        <h3>project 2 description</h3>
        <p>wow this is awesome blah blah blah - learn more here</p>
      </section>
      <section id="project3" className="h-500">
        <h3>project 2 description</h3>
        <p>wow this is awesome blah blah blah - learn more here</p>
      </section>
    </main>
  );
}
