we'll be using nextjs 15 and react19 for this project

npm install
npm run dev

using prisma orm to access database

next app will include : App Router, Components, Pages, Server Actions.

Steps followed :
1. Pages :
- use compt snippet
- page.tsx in every folder makes the page for that folder that can be accessed using url

2. Navbar :
- in app/layout.tsx anything we include will show in all the pages
- make new folder in src called components
- include it inside the layout

3. Mobile Menu for small screen
- to see the menu use usestate hook

4. Authentication using clerk
- we'll wite our own middleware