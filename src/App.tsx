import { useFetch } from "./hooks/useFetch"
import './hooks/App.css'

type Repository = {
  full_name: string;
  description: string;
}

function App() {
  const { data: repositories, isFetching } 
    = useFetch<Repository[]>('users/oguilhermefigueiredo/repos')
  
  return (
    <ul>
      { isFetching && <p>Working on it...</p>}
      {repositories?.map(repo => {
        return (
          <li key={repo.full_name}>
            <strong>{repo.full_name}</strong>
            <p>{repo.description}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default App
