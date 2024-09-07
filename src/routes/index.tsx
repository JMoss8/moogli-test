const Home = () => {
  return (
    <>
      <h3>Wins</h3>
      <ul>
        <li>
          In the <code>datasets</code> folder you can find your data as <code>.csv</code>. I wrote a parser to get it as
          JSON. Feel free to change the values "in the <code>datasets</code>" and run <code>yarn dev</code>, you'll see
          your new values in the app.
        </li>
      </ul>
      <h3>Problems</h3>
      <ul>
        <li></li>
        <li>The Sunburst chart doesn't support Legend component for filtering, so I had to create a custom one</li>
      </ul>
      <h3>TODOs</h3>
      <ul>
        <li>Responsiveness (right now the app supports only PC with "normal" size screens)</li>
        <li>Automated tests</li>
      </ul>
    </>
  )
}

export default Home
