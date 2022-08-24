import GlobeModel from './GlobeModel';
import Projects from './Projects';
import Courses from './Courses';
import Intro from './Intro';
import Face from './Face';

function App() {
  return (
    <>
      <Face />

      <Intro />

      <div className='title'>
        My journey so far.
      </div>
      <GlobeModel />

      <Projects />

      <Courses />
    </>
  )
};

export default App;
