import axios from 'axios'
import { useQuery } from 'react-query'
import './App.css'

type Repository = {
  full_name: string;
  description: string;
}

function App() {
  const { data, isFetching } = useQuery<Repository[]>('repos', async () => {
    const response = await axios.get('https://api.github.com/users/oguilhermefigueiredo/repos');

    return response.data;
  }, {
    refetchOnWindowsFocus: false,
    staleTime: 1000 * 60, // 1 minute
  })

  return (
    <ul>
      { isFetching && <p>Working on that...</p> }
      {data?.map(repo => {
        return (
          <li key={repo.full_name}>
              {repo.full_name}
            <p>{repo.description}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default App