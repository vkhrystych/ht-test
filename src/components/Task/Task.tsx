export const Task = () => {
  return (
    <section className="task">
      <h3>Task:</h3>
      <p>Please prepare an auto-complete component in React TypeScript.</p>
      <ol>
        <li>
          You cannot use any 3rd party libraries - only pure React and internal
          DOM functions.
        </li>
        <li>
          You should use TypeScript and write proper interfaces and types.
        </li>
        <li>
          The function to filter the data should be asynchronous. You can use
          mock data (such as a JSON array), but the function which uses it
          should be asynchronous (similar to a real REST call).
        </li>

        <li>
          It should have basic working CSS. No need for anything fancy (such as
          drop- shadows etc), but should look decent.
        </li>

        <li>
          You need to handle all non-standard/edge use-cases - it should have a
          perfect user-experience.
        </li>
        <li>
          Highlight the matching part of the text, in addition to showing it.
        </li>
        <li>
          No external state management libraries (refer to #1 as well), only
          native React method.
        </li>
        <li>Use only functional component with hooks.</li>
        <li>
          Shortcuts and hacks are perfectly ok - but you have to add comments on
          what are you doing there and why. You should either write production
          ready code or include comments on what needs to be changed for
          production.
        </li>
        <li>Add a README.md file explaining how to run the project.</li>
        <li>Bonus #1: load data using a real API call to some resource.</li>
      </ol>
    </section>
  );
};
