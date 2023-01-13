# Foodistan

1. Think of cool name
2. Build AppLayout
3. Build Header component with logo and nav list and cart
4. Build body component

# Questions

1. Is JSX mandatory for React?

- JSX is not a requirement /mandatory for using React.
- Each JSX element is just syntactic sugar for calling React.createElement(component, props, ...children). So, anything you can do with JSX can also be done with just plain JavaScript.
- <h1>Hello world</h1> --- JSX.
- React.createElement("h1",{props},"hello")----without JSx using plain javascript.

2. Is ES6 mandatory for react?

3. {TitleComponent} vs <TitleComponent/> vs <TitleComponent></TitleComponent>

- {TitleComponent} -- The curly braces are a special syntax to let the JSX parser know that it needs to interpret the contents in between them as JavaScript instead of a string.

- <TitleComponent/> -- calling a compoenent in react

- <TitleComponent></TitleComponent> -- calling a compoenent with childeren in react

4. How to write comments in react

- {/_ comments _/}

- {/_ <Card {...restaurantList[0]} />
  <Card {...restaurantList[1]} />
  <Card {...restaurantList[2]} />
  <Card {...restaurantList[3]} /> _/}

5. What is React.Fragment and <></>

- A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.

- There is a new, shorter syntax you can use for declaring fragments. It looks like empty tags: <></>

6. what is Virtual DOM

- The virtual DOM (VDOM) is a programming concept.
- “virtual”, representation of a UI/DOM is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.
- This approach enables the declarative API of React: You tell React what state you want the UI to be in, and it makes sure the DOM matches that state.

7. what is Reconciliation in react

- The mechanism to diff one tree with another to determine which parts need to be changed and then update
  the original DOM with it is called Reconciliation

- React will do that process of creating the virtual result over and over again. Each time, it compares the previous virtual tree to the next one.
- If you are rendering to the DOM, it could be that only one class on one element changed. React will walk through the virtual tree, find what’s changed, and update as little as it can.

- This could mean updating one class attribute, or it could mean tearing down the whole DOM. This is Reconciliation.

## steps for reconcliationa and VDOM

1. First, ReactJS creates a copy of the original DOM, calling it the Virtual DOM. Each of the nodes of the Virtual DOM represents an element.

2. Next, if there is a state update of an element, a new Virtual DOM is created.

3. The diffing algorithm identifies the difference of the change. In this case, a subtree from the changed node has been identified as the diff.

4. Last, the ReactJS runs a batch update to update the Original DOM with these changes to keep it in sync.

5. what is React fiber.

- Fiber allows React to fine tune rendering to make sure the most important updates happen as soon as possible,

- React Fiber is an internal engine change that allows React to break the limits of the call stack. It’s creation enables React to pause/start rendering work at will. Eventually, React users will be able to hint at the “priority” of work.

- React before Fiber was like working at a fast paced company without git.

link- https://www.freecodecamp.org/news/lets-fall-in-love-with-react-fiber-90f2e1f68ded/

9. why do we need keys in React

- https://betterprogramming.pub/why-react-keys-matter-an-introduction-136b7447cefc

- The main purpose of keys is to help React differentiate and distinguish elements from each other, increasing its performance when diffing between the virtual and real DOM.

- <li key="1">first</li>

10. what is props in React

- We use props in React to pass data from one component to another (from a parent component to a child component(s))
- props allow us reuse a component's logic dynamically. This means that the data in the component will not be static.

- two ways to use props: one without destructuring and the other with destructuring.

function Tool(props){ ---- without destructuring

    <h1>my name is {props.name}</h1>
    <p>tool used is {props.tool}</p>

}

<App>
    <Tool name="karthiik", tool="figma" />
</App>

or

function Tool({name, tool}){ ----- without destructuring

    <h1>my name is {name}</h1>

    <p>tool used is {tool}</p>

}

<App>
    <Tool name="karthiik", tool="figma" />
</App>

11. what is config driven UI.
