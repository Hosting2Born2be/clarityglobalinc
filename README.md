## Package Manager

Use ``pnpm`` as main the package manager.

## Project Structure
![Project Structure](https://i.ibb.co/G4XZYcd7/project-structure-drawio.png)

``App`` - routes, page entry point, with widgets (if more 2 sections)  
``Core`` - main logic like auth, theme, etc.  
``Widgets`` - sections of page  
``Features`` - smart components that utilize server actions or store  
``Shared`` - dumb components or reusable logic(functions, libs, etc)