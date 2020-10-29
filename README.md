## Objective

- User should be able to view Character index.
- User should be able to click on a Character and add that Character to their Team


## Questions

1. What components will we need?
    - CharacterCard
    - Header
2. Will we need containers? If so, what?
    - Character Container
    - Team Container
3. Which component should hold the api in state?
    - Characters Container
        • It's the component that needs api info.
4. Will we need state in any other component? Why?
    - Character
        • We need to know whether it's been "favorited" (added to a team) or not.