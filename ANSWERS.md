Q:
What are PropTypes used for? Please describe why it's important to type check our data in JavaScript

A:
-PropTypes can be used to ensure that only specific types of data is transmitted through Props.
-That ensures integrity of the interfaces between components so when a number/string/object is expected.
to make sure that this gets delivered.
-Especially because of propdrilling and handling down Props through the chain of components.
it can become unclear what datatype Props contains at any given time so checking that is handy.


Q:
Describe a life-cycle event in React?

A:
-In the UI Library React Components go through different lifecycle stages.
-First a component gets mounted (birth) then updated and then unmounted (dies).
-Certain React methods allow developers to trigger specific events when a component.
enters a certain stage of their lifecycle.
-At the mounting phase the constructor function gehts invokes and state data is initialized.
-The componentDidMount() function can be used to setStates or LocalStorage as soon as a component got mounted.
-At the updating phase new props trigger the updating, setState changes State and invokes render().
-The componenteDidUpdate() can be used to check if new data was delivered from an api.
-At the unmounting phase the componentWillUnmount() kann be used.

Q:
Explain the details of a Higher Order Component?

A:
-A Higher Order Component (HOC) allows components to share functionality between each other.
-Allows us to only conditionaly render a certain component to the user like a login/loggedin page.

Q:
What are three different ways to style components in React? Explain some of the benefits of each.

A:
Preprocessor(SASS, SCSS, LESS):
-The styling code can be nested, variables or mixins used and keeps code separated and easy to manage.

Bootstrap(Reactstrap): 
-Preconfigured working components that offer some functionality on how to manipulate them.
-Is very easy to use and the style is instantly there with a professional look.
-Sometimes these components offer not as much possibilities as needed and changing them can be messy.
-Has a huge userbase and community.

Styled-Components:
-CSS styling can be written within Javascript.
-Through Props of these styled components they can be flexibly extendend or manipulated.
-Offer more freedom than Bootstrap in how to make the style of components individual but 
also enables more complexity.
-Styled Components can be outsources into a dedicated Style folder so the app is better structured.
-Has a huge userbase and community.
