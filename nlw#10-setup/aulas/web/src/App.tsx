import { Habit } from './components/Habit';

import './styles/global.css';

export function App() {
  return (
    <>
      <h1>Hello World</h1>

      <Habit completed={3}/>
      <Habit completed={4}/>
      <Habit completed={5}/>
    </>
  )
}
