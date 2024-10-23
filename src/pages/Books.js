import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const goodreadshtml = `      <style type="text/css" media="screen">
        .gr_grid_container {
          /* customize grid container div here. eg: width: 500px; */
          display: flex;
          flex-wrap: wrap;
        }

        .gr_grid_book_container {
          /* customize book cover container div here */
          float: left;
          width: 10%;
          padding: 0px 0px;
          overflow: hidden;
        }
      </style>
      <div id="gr_grid_widget_1727518699">
        <!-- Show static html as a placeholder in case js is not enabled - javascript include will override this if things work -->
          <div class="gr_grid_container">
    <div class="gr_grid_book_container"><a title="The Soul of a New Machine" rel="nofollow" href="https://www.goodreads.com/review/show/6242707031?utm_medium=api&amp;utm_source=grid_widget"><img alt="The Soul of a New Machine" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1627012239l/7090._SX98_.jpg"></a></div>
    <div class="gr_grid_book_container"><a title="Fermat's Last Theorem" rel="nofollow" href="https://www.goodreads.com/review/show/5706469766?utm_medium=api&amp;utm_source=grid_widget"><img alt="Fermat's Last Theorem" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348763708l/131305._SX98_.jpg"></a></div>
    <div class="gr_grid_book_container"><a title="Incognito: The Secret Lives of the Brain" rel="nofollow" href="https://www.goodreads.com/review/show/5611497560?utm_medium=api&amp;utm_source=grid_widget"><img alt="Incognito: The Secret Lives of the Brain" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348669116l/9827912._SX98_.jpg"></a></div>
    <div class="gr_grid_book_container"><a title="The Time Machine" rel="nofollow" href="https://www.goodreads.com/review/show/5577181784?utm_medium=api&amp;utm_source=grid_widget"><img alt="The Time Machine" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327942880l/2493._SX98_.jpg"></a></div>
    <div class="gr_grid_book_container"><a title="Animal Farm" rel="nofollow" href="https://www.goodreads.com/review/show/4334474344?utm_medium=api&amp;utm_source=grid_widget"><img alt="Animal Farm" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1393463485l/18875973._SX98_.jpg"></a></div>
    <div class="gr_grid_book_container"><a title="Alive: The Story of the Andes Survivors" rel="nofollow" href="https://www.goodreads.com/review/show/4328784362?utm_medium=api&amp;utm_source=grid_widget"><img alt="Alive: The Story of the Andes Survivors" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1404247131l/401514._SY160_.jpg"></a></div>
    <div class="gr_grid_book_container"><a title="The Book Thief" rel="nofollow" href="https://www.goodreads.com/review/show/4312472012?utm_medium=api&amp;utm_source=grid_widget"><img alt="The Book Thief" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1522157426l/19063._SX98_.jpg"></a></div>
    <div class="gr_grid_book_container"><a title="Project Hail Mary" rel="nofollow" href="https://www.goodreads.com/review/show/4263295405?utm_medium=api&amp;utm_source=grid_widget"><img alt="Project Hail Mary" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1597695864l/54493401._SX98_.jpg"></a></div>
    <div class="gr_grid_book_container"><a title="Educated" rel="nofollow" href="https://www.goodreads.com/review/show/4160746602?utm_medium=api&amp;utm_source=grid_widget"><img alt="Educated" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1506026635l/35133922._SX98_.jpg"></a></div>
    <div class="gr_grid_book_container"><a title="Jack Frost (Jack Stratton #7)" rel="nofollow" href="https://www.goodreads.com/review/show/4160260356?utm_medium=api&amp;utm_source=grid_widget"><img alt="Jack Frost" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1521754614l/39349710._SX98_.jpg"></a></div>
    <div class="gr_grid_book_container"><a title="Jonathan Livingston Seagull" rel="nofollow" href="https://www.goodreads.com/review/show/4159788463?utm_medium=api&amp;utm_source=grid_widget"><img alt="Jonathan Livingston Seagull" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1432222358l/71728._SX98_.jpg"></a></div>
    <div class="gr_grid_book_container"><a title="&quot;What Do You Care What Other People Think?&quot;: Further Adventures of a Curious Character" rel="nofollow" href="https://www.goodreads.com/review/show/4159732259?utm_medium=api&amp;utm_source=grid_widget"><img alt="&quot;What Do You Care What Other People Think?&quot;: Further Adventures of a Curious Character" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1516068365l/35167718._SX98_.jpg"></a></div>
    <div class="gr_grid_book_container"><a title="Totto-chan: The Little Girl at the Window" rel="nofollow" href="https://www.goodreads.com/review/show/4159721595?utm_medium=api&amp;utm_source=grid_widget"><img alt="Totto-chan: The Little Girl at the Window" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1630471482l/328802._SX98_.jpg"></a></div>
    <div class="gr_grid_book_container"><a title="Surely You're Joking, Mr. Feynman!: Adventures of a Curious Character" rel="nofollow" href="https://www.goodreads.com/review/show/4159715021?utm_medium=api&amp;utm_source=grid_widget"><img alt="Surely You're Joking, Mr. Feynman!: Adventures of a Curious Character" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348445281l/5544._SX98_.jpg"></a></div>
    <div class="gr_grid_book_container"><a title="The Little Prince" rel="nofollow" href="https://www.goodreads.com/review/show/4159700947?utm_medium=api&amp;utm_source=grid_widget"><img alt="The Little Prince" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1367545443l/157993._SX98_.jpg"></a></div>
    <div class="gr_grid_book_container"><a title="The Old Man and the Sea" rel="nofollow" href="https://www.goodreads.com/review/show/4159694658?utm_medium=api&amp;utm_source=grid_widget"><img alt="The Old Man and the Sea" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1329189714l/2165._SX98_.jpg"></a></div>
    <div class="gr_grid_book_container"><a title="Interpreter of Maladies" rel="nofollow" href="https://www.goodreads.com/review/show/4159688568?utm_medium=api&amp;utm_source=grid_widget"><img alt="Interpreter of Maladies" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442586143l/5439._SX98_.jpg"></a></div>
    <div class="gr_grid_book_container"><a title="Not Without My Daughter" rel="nofollow" href="https://www.goodreads.com/review/show/4159686335?utm_medium=api&amp;utm_source=grid_widget"><img alt="Not Without My Daughter" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1416296090l/43255._SY160_.jpg"></a></div>
    <div class="gr_grid_book_container"><a title="The Catcher in the Rye" rel="nofollow" href="https://www.goodreads.com/review/show/4159684992?utm_medium=api&amp;utm_source=grid_widget"><img alt="The Catcher in the Rye" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1398034300l/5107._SX98_.jpg"></a></div>
    <div class="gr_grid_book_container"><a title="Little Women" rel="nofollow" href="https://www.goodreads.com/review/show/4159680346?utm_medium=api&amp;utm_source=grid_widget"><img alt="Little Women" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1562690475l/1934._SX98_.jpg"></a></div>
    <div class="gr_grid_book_container"><a title="The Diary of a Young Girl" rel="nofollow" href="https://www.goodreads.com/review/show/4159659154?utm_medium=api&amp;utm_source=grid_widget"><img alt="The Diary of a Young Girl" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1560816565l/48855._SY160_.jpg"></a></div>
    <div class="gr_grid_book_container"><a title="Cheaper by the Dozen (Cheaper by the Dozen, #1)" rel="nofollow" href="https://www.goodreads.com/review/show/4159648607?utm_medium=api&amp;utm_source=grid_widget"><img alt="Cheaper by the Dozen" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1530288546l/40669887._SX98_.jpg"></a></div>
    <div class="gr_grid_book_container"><a title="The Complete Sherlock Holmes" rel="nofollow" href="https://www.goodreads.com/review/show/4159644731?utm_medium=api&amp;utm_source=grid_widget"><img alt="The Complete Sherlock Holmes" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348815538l/188572._SX98_.jpg"></a></div>
    <div class="gr_grid_book_container"><a title="The Alchemist" rel="nofollow" href="https://www.goodreads.com/review/show/4158801623?utm_medium=api&amp;utm_source=grid_widget"><img alt="The Alchemist" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1654371463l/18144590._SX98_.jpg"></a></div>
    <div class="gr_grid_book_container"><a title="Shauzia" rel="nofollow" href="https://www.goodreads.com/review/show/4158786869?utm_medium=api&amp;utm_source=grid_widget"><img alt="Shauzia" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1306535341l/11476010._SX98_.jpg"></a></div>
    <div class="gr_grid_book_container"><a title="Parvana's Journey (The Breadwinner, #2)" rel="nofollow" href="https://www.goodreads.com/review/show/4158786082?utm_medium=api&amp;utm_source=grid_widget"><img alt="Parvana's Journey" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1389756976l/834019._SX98_.jpg"></a></div>
    <div class="gr_grid_book_container"><a title="The Breadwinner (The Breadwinner, #1)" rel="nofollow" href="https://www.goodreads.com/review/show/4158785487?utm_medium=api&amp;utm_source=grid_widget"><img alt="The Breadwinner" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1519779434l/828015._SX98_.jpg"></a></div>
    <div class="gr_grid_book_container"><a title="The Client" rel="nofollow" href="https://www.goodreads.com/review/show/4158784889?utm_medium=api&amp;utm_source=grid_widget"><img alt="The Client" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1554192326l/5359._SX98_.jpg"></a></div>
    <div class="gr_grid_book_container"><a title="Jurassic Park (Jurassic Park, #1)" rel="nofollow" href="https://www.goodreads.com/review/show/4158784435?utm_medium=api&amp;utm_source=grid_widget"><img alt="Jurassic Park" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1529604411l/40604658._SY160_.jpg"></a></div>
    <div class="gr_grid_book_container"><a title="A Man Called Ove" rel="nofollow" href="https://www.goodreads.com/review/show/4158781871?utm_medium=api&amp;utm_source=grid_widget"><img alt="A Man Called Ove" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1405259930l/18774964._SX98_.jpg"></a></div>
  <noscript><br/>Share <a rel="nofollow" href="/">book reviews</a> and ratings with Sharvari Deshmukh, and even join a <a rel="nofollow" href="/group">book club</a> on Goodreads.</noscript>
  </div>

      </div>
      <script src="https://www.goodreads.com/review/grid_widget/138591548.Sharvari%20Deshmukh's%20bookshelf:%20read?cover_size=medium&hide_link=true&hide_title=true&num_books=30&order=d&shelf=read&sort=date_added&widget_id=1727518699" type="text/javascript" charset="utf-8"></script>
`;
const Books = () => (
  <Main
    title="Books"
    description="Reading list"
    fullPage
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2><Link to="/books">Bookshelf</Link></h2>
        </div>
      </header>
      {/* eslint-disable-next-line react/no-danger */}
      <span dangerouslySetInnerHTML={{ __html: goodreadshtml }} />
      <div />
    </article>
  </Main>
);

export default Books;
