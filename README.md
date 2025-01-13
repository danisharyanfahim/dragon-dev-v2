<img src="public/static/icons/dragon-dev-day.svg" align="right" height="72px" />

# **DragonDev.ca**

#### **This is the Github repo for my portfolio site, DragonDev.ca**

## Site Info

**License Type**: Open

**Version**: 2.0

**Tech used**
- TypeScript + JS + ES6
- SCSS + CSS
- React (Front-End Library)
- NextJs (Front-End Framework)
- SanityIO (CMS)

**The site consists of the following pages**
1. Landing page
2. Blog page
3. Blog Search page
4. Blog Article Page

**Page Structure (From top to bottom)**
1. Navbar
2. Page Content within Main tags, varies according to the page
3. Footer

## **Page Breakdown**

### Landing page
1. Header (SplitCard with logo on one side)
2. About (Several SplitCards with Sliders)
3. Technologies (Window Menu with reversible cards tiled in a grid)
4. Projects (Slide show)
5. Work (Window Menu with a simple page card)
6. Blog (Blog Cards in a Carousel)
7. Contact (Contact Form)

### Blog page / Blog Search page
1. Search Bar
2. Infinite Scroll Container
    - Skeleton Cards
    - Article Cards

### Blog Article page
1. Loading Page
2. Article
    - Image
    - Topic
    - Categories
    - Content
        - Code Container
        - Text
        - Images

## **Advanced Components**
**1. Search Bar**

Searches for articles in 3 ways:
   1. Title Search: If there is no special format, then the query will return all articles which contain the search bar text within the article's title
   2. Category Search: If the query is in the format of '#(Category Name)', it will up bring all articles which have have been marked with that category
   3. Date Search: If the query is in the format of 'from: (Date)', then it will bring all articles from that date, month, or year
   4. If there is no text in the search bar then it will bring the user back to the blog page, and if already on the blog page then it will do nothing
   
   *For the time being the order of the articles will remain the newest to the oldest, this will be changed in a later version*

**2. Infinite Scroll Container**

 Loads in article cards based on the search query parameters
   1. Query is passed in as prop from the URL search parameters
   2. Query is fetched through SanityIO using the GROQ query language
   3. Number of articles is returned 
   4. Skeleton cards is generated for number of articles returned. If the number of articles exceeds the total number of article cards per page, then it will generate the same number of skeleton cards as the number of article cards per page, until the number of articles returned is less than the total number of article cards per page, then it will simply generate a number of skeleton cards equal to the articles fetched
   5. If the skeleton cards container is even slightly visible then it will fetch an article for every skeleton card that has been generated for that page, starting with the most recent one. Once the article has been fetched, then the article cards will replace the skeleton cards, and the skeleton cards container will be pushed below the article cards container. *this is done through an intersection observer hook*
   6. Every time you scroll down, repeat step 5 until there are no more articles remaining and then it will show you the footer at the end of the page


**3. Slideshow and Window Menu** 

UI elements which show you a different page/slide of information depending off the page number:

- Slideshow:
    - Previous and next buttons to toggle between slides
    - AutoPlay is set to true to automatically play slides
    - Position buttons to select a specific slide
    - Play/pause button to control autoPlay
    - Smooth fade transition between slides
    - Allows infinite looping
    
- Window Menu:
    - Tabs on top of the menu which when selected go to the associated page
    - Page container with a set maxHeight, if the page is longer than the page container then the overflowed content can be viewed by scrolling up or down 


**4. Carousel and Slider** 

UI elements which scroll on the x-axis to show you a different slide/card of information depending on the scroll position of the container:

- Slider:
    - Previous and next buttons to toggle between slides
    - AutoPlay is set to true to automatically play slides
    - Play/pause button to control autoPlay
    - Smooth scrolling between slides
    - To allow infinite looping, half the slides must be placed at the front of the slider and the other half at the back, then once the slider reaches either the first slide or the last slide, it's scroll behavior will be set to auto, and set the position of the slider to the same slide as the current one, except ahead or behind by half the total number of slides, depending on whether it is the last or first slide, then it will set the scroll behavior back to smooth in a useEffect and go to the next card to make for a seamless transition

- Carousel:
    - Same thing as the slider, but shows multiple cards and has a gap between each card
    - Responsive so that once the width of the container reaches a certain width then the number of cards displayed will be reduced
    - To allow for wrapping/infinite playing, the number of visible cards must be accounted for unlike the slider


**5. Theme Toggle** 

Dark-mode and light-mode theme toggle, which switches the theme from night to day, changes background colors, accent colors, and text colors from a dark-bluish background shade, cold white text, and deep-red accents to a cold white background shade, dark-bluish text, and bright-blue accents

**6. Code Container** 
- Displays code in the specified language
- Features a copy and paste button to allow you to copy and paste the code inside
- Displays the specified filename and file type
- Highlights keywords in the code
- Shows the number of lines of code
- If the container gets too small then you can scroll from 1 side to the other
- Any language can be displayed

**7. Cards** 
- SplitCards (Also called ZigZag sections): 
    - Display 2 thing side by side, and then once the page width reaches a certain break-point then it will collapse into a column due to flex-wrap 
    - One side contains the text content and buttons, and the other side contains a UI element, Image, Video or some other type of media
    - Most of my page sections are SplitCards, and all split cards have the same margin/padding to make sure that the content remains perfectly aligned on the page
    - In order to make sure some elements display the right side on top when the card collapses into a
    column layout, I added a reverse property
- Other Cards:
    - All other cards are just displays for information, they usually have an image or icon, buttons, a background image, category containers (flex-box with flex-wrap) and text such as:
        - Title Headers
        - Lists
        - Paragraphs
    - The Tech and Lang cards are special in that they can be flipped, which allows them to display information on both sides

> [!NOTE]
> I Didn't mention the other components because they are either containers/displays, buttons or links

## Later Improvements
### Landing page
- [ ] Adding a proper loading page for the site using React Suspense
- [ ] Design, Develop, Deploy as an animated text modal for when the user first visits the page
- [ ] Randomly generate symbols and icons in the background
- [ ] Animated graphic/image of me somewhere on the site
- [ ] Animated background graphics using libraries such as particlesJS and ThreeJS
- [ ] Window control system for controlling the theme of the site
- [ ] Options menu to change the language and also the night and day switch
- [ ] Code boxes to display some of the code I have written
- [ ] More projects and sites I have completed as well as technologies I have learned, as well as improved versions of those

### Blog page / Blog Search page
- [ ] Ability to switch to pagination
- [ ] Advanced search menu
- [ ] Fuzzy searching to account for typos
- [ ] Auto-complete and search suggestions
- [ ] Deep article searching for searching through article content, and not just the titles
- [ ] Search filters
    - [ ] Earliest and Latest Date
    - [ ] Author
    - [ ] Main Topic
    - [ ] Reading time/Article Length
    - [ ] Sorting options to sort by:
        - [ ] Ascending or Descending Date
        - [ ] Alphabetical Order
    - [ ] Category options list with union and intersection filtering
    - [ ] Display the total number of articles brought up, as well as how many the articles have already been loaded onto the page
    - [ ] Ability to switch between list and grid display as well as the size of the cards
    - [ ] Toast Element in bottom-right corner

### Blog Article page
- [ ] Table of contents with fragment scrolling to the headers/subtitles, this will disappear on the mobile version
- [ ] Sidebar table of contents for the topic, if the article/document is part of a series, displayed as an accordion menu
- [ ] Page progress bar which changes based off the scroll position of the page
- [ ] Link to YouTube video on topic
- [ ] Add category to list of keywords for the header for that page, to aid with SEO optimization on Google and other search engines
- [ ] Top and/or bottom navigation bar which can contain
    - [ ] Advertisements
    - [ ] Marquee text
    - [ ] Promotions
- [ ] Breadcrumbs for organizing and categorizing the articles based on the main topic and if it is part of a series
- [ ] Colorful text implementation
- [ ] Faded background images for styling
- [ ] Other text styling such as subscripts and superscripts
- [ ] PNG Images with captions
- [ ] Full-sized images with captions
- [ ] Window, laptop, PC, and phone mock-ups for displaying screenshots and screen-recordings/GIFs
- [ ] Videos with subtitles, and ability to play in a toast container in the corner
- [ ] Share buttons for sharing on social media platforms and through email and mobile applications
- [ ] Stylized Math Equations using the SanityIO laTex plugin
- [ ] Implementing lists and tables onto the blog page
- [ ] Support for icons, Unicode, and emoji symbols as part of the text content of the page
- [ ] Keyboard Icons
- [ ] Other UI elements:
     - [ ] Ticker
     - [ ] Carousel
     - [ ] Slideshow
     - [ ] Slider
     - [ ] Grid
     - [ ] Gallery
     - [ ] Accordion
     - [ ] Drop-down Menu
     - [ ] Cards
     - [ ] Window Menu with tabs
     - [ ] Modal Image
     - [ ] Image Magnifier
     - [ ] Magnifying Glass
     - [ ] Dashboard
     - [ ] Diagrams (Trees, Flowcharts, Arrow Process Diagram)
     - [ ] Charts/Graphs 
     - [ ] Animated Text and Numbers (Blinking cursor, slot machine numbers, numbers which add up)
     - [ ] Maps
     - [ ] Interactive Inputs, which change parts of the page
     - [ ] Code playground (Runs code on the client side, such as CodePen, CodeSandbox and JSFiddle)
     - [ ] 3D graphics display
 - [ ] Other UI elements:
  Article rating system
 - [ ] Like and dislike system
 - [ ] Animated images and symbols
    - [ ] Can appear on the side, behind or in-front of page contents
    - [ ] Can be parallax and move slower or faster than the scroll velocity of the page
    - [ ] Can be position absolute and attached to a specific point on the page
    - [ ] Can move independently regardless of page position (e.g. bubbles floating up)
 - [ ] Related articles section
     - [ ] Articles which are in the same topic
     - [ ] Random articles
     - [ ] Previous/Next articles in the topic
     - [ ] Recommended articles
     - [ ] Mark articles which have already been viewed by the user
 - [ ] Other Authors besides myself
     - [ ] User authentication and authorization system for logging in
     - [ ] Sign up page
     - [ ] Ability to write articles with all markdown features
 - [ ] Comment system
     - [ ] User authentication for signing up and logging in
     - [ ] Reply to comments and create comment chains
     - [ ] Hide and show comment chains
     - [ ] Moderation and the ability to report comments
     - [ ] Pinned/Starred comments
     - [ ] For now keep it as text, but later change it to markdown, and eventually be able to post everything you can on a basic forum or social media page such as images, and videos
     - [ ] Sort and filter through comments
         - [ ] Date posted, ascending or descending
         - [ ] Amount of likes and dislikes
     - [ ] Change the comment loading to be either infinite scroll or pagination

### More Ideas
   - [ ] Courses promotion page for showing the various course options that are available to buy
   - [ ] Courses page for users to track their progress through a future web-development course I plan on creating
   - [ ] Allow ads to be displayed on the page
   - [ ] User sign-up and authentication using google, Github, Facebook, Reddit and other APIs
   - [ ] User page for every user: Tracks down their progress in the course, as well as feedback for their articles and comments, also allows them to view messages sent to them by other users and to DM others users as well
   - [ ] Links to other pages and sources
   - [ ] Multi-language version of site, courses and articles, available to users in different languages 
   - [ ] Mobile application version of the website for doing courses and planning your projects
   - [ ] Live chatroom and group-chat feature with other users, very useful for when you're trying to collaborate with others to make a group project
   - [ ] Project management page which allows you to track the progress of your project goals, as well as organize file types and assign roles
   - [ ] File upload feature which also allows you to run code on the site and upload files to your project
   - [ ] DimensionsUI (My UI Library) page, it shows the pricing options, and also the API docs for it, as well as demos for what can be achieved with it
