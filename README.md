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
<!-- -Blog Article page -->
<!-- -Loading page with nextJS -->
<!-- -Searching for nothing on the articles page will just send you to the blog page, which by default will load all of the newest articles -->
<!-- -Adding category searching option
-Adding Date searching option -->
<!-- -Get rid of scrollbar -->
<!-- -Create section shapes -->
<!-- -Get text fragment scroll to to work, and make the scrolling smooth -->

-Main logo
-Change favicon
-Proper Loading icon
-Footer proper formatting
-Background design

-Landing page: (use a modal image for zooming in on images by giving them a modal class and blurring out the background, with a smooth transition)
-Header (A and B card with tickers on top and bottom)
-About (A and B Cards which are in a slide-show)
-Blog (Carousel)
-Work/Websites (Tab Menu)
-Projects (A&B Cards in a slider)

<!-- -Technologies (Grids + Window Menu) (This will take the longest time to make, so save this for last or after I come back from eating) -->

-Contact (EmailLink or Form)
-Footer (Different from the blog footer, same design but the container has a different style)

<!-- 1. Write down the test content and actual content, status: Done. With the exception of the technologies section which requires me to enter data into sanity studio,
   everything else is done with test/template content and mostly real content as well, once I have eaten breakfast and picked up my vyvanse, finish the technologies section for the content -->

2. Start Making the UI components for displaying everything on the page, first with the mobile version in mind

Bugs:
-Intersection observer doesn't work properly on mobile versions

-Write some articles
-Design my resume
-Send my resume
-Adding sorting button for page, which changes the orders of the articles
-Rendering lists for my articles
-Getting the latex plugin for sanity which allows me to enter math equations

Important\*\*\*: Generate web token from sanity project management settings and then paste it into the client as well
How static imports work:
1.Turn document file (wordpress into json file) with proper format
2.Fetch and Read json file from path directory and turn it into an array of objects called data
3.Transform the data array into the format for sanityIO
4.Post the data through client.create()
5.Read the data from sanity using client.fetch()
6.Render the data in the card format that I want to display to the user

Question: Why am I posting the static JSON file data to Sanity and then refetching it before rendering it, when I can directly read and render the data straight from the JSON file? Answer: Because this was the solution I was looking for which finally, allows me to write/import the files to sanity, allowing me to write JSON data to sanity, which was something I have been doing for a long time, manually entering in all of the data is cumbersome, tedious, repetitive and monotonous, and can easily be automated. This will also be useful later on for just having static files. In later versions of the site, I will just directly read the data straight from the static JSON file, but for now I will keep it like this, because I am already using sanity for managing the content. It also makes it easy to edit the content afterwards
