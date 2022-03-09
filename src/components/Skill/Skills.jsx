import React, { useState, useEffect } from 'react'
import Pie3D from './Pie3D'
import './Skills.scss'
const Skills = () => {
  const [repoItems, setRepoItems] = useState([])
  const [dataSource, setDataSource] = useState([])

  const getData = () => {
    fetch('https://api.github.com/users/alimazharsultan/repos?per_page=100')
      .then((res) => res.json())
      .then((data) => setRepoItems(data))
  }

  useEffect(() => {
    // Fetch from official api
    getData()

    // Offline api
    // setRepoItems(items)
  }, [])

  useEffect(() => {
    let languages = repoItems.reduce((total, item) => {
      const { language, stargazers_count } = item
      if (!language) return total

      if (!total[language]) {
        total[language] = {
          label: language,
          value: 1,
          stars: stargazers_count,
        }
      } else {
        total[language] = {
          ...total[language],
          value: total[language].value + 1,
          stars: total[language].stars + 1,
        }
      }

      return total
    }, {})

    const mostUsed = Object.values(languages)
      .sort((a, b) => {
        return b.value - a.value
      })
      .slice(0, 5)
    setDataSource(mostUsed)
  }, [repoItems])

  
  const languagesUsedChart = (
    <div className='col-md-6 py-1'>
      <Pie3D data={dataSource} />
    </div>
  )

  return (
    <div className="skills" id="skills">
      <div className='subheading mb-3'>Languages used as per Github</div>
      <div className='row mb-4'>{languagesUsedChart}</div>
    </div>
  )
}

export default Skills
