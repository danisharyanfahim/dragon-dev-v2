This is my portfolio page. It uses SanityIO (CMS), NextJs (Front-End Framework), React (Front-End Library), TypeScript + JS + ES6, SCSS + CSS, and HTML. It consists of 4 main page types:

1. Landing page
2. Blog page
3. Blog Search page
4. Blog Article Page

The main page structure is as follows (from top to bottom):
1)Navbar
2)Page Content (Main, different content depending on the page type)
3)Footer

Here is a breakdown for each of the page sections along with the functions they perform

1)Navbar

2)Footer

3)Page content (Main) depending on page type:

1. Landing page
2. Blog page
3. Blog Search page
4. Blog Article Page

Components:

Infinite Scroll:

Process:

Component is mounted:

1. Search Params are passed in as props
2. Total number of articles are fetched based on the search params
3. If more than 25% of the loader is visible then it loads in the

Search Params change:

{/_ Very important so that the useOnScreenHook doesn't trigger immediately _/}

Todolist:

<!-- -Navbar with day and night toggle switch -->

-Main logo
-Footer

<!-- -Blog Article page -->

-Landing page
-Loading page
-Searching for nothing on the articles page will just send you to the blog page, which by default will load all of the newest articles
-Adding category searching options
-Adding sorting button for page, which changes the orders of the articles
-Background page
