import './App.css'
import Header from './component/Header'
import Tabs from './component/Tabs'
import VideoContainer from './component/VideoContainer'
import TeaContainer from './component/TeaContainer'
import Footer from './component/Footer'
import { useEffect, useState } from 'react'
import { setSavedItem, getSavedItem} from './utils/LocalStorage'
import FavoriteTeas from './component/FavoriteTeas'


function App() {
  const [count, setCount] = useState(() => {
    const item = getSavedItem('count')
    return (item as number) || 0
  })

  const [page, setPage] = useState<"video" | "teas" | "favorite">(() => {
    const favoritePage = getSavedItem('page')
    return favoritePage === "favorite" ? "favorite" : "teas"
  })

  const [selectedId, setSelectedId] = useState<number[]>(() => {
    const savedId = getSavedItem('favoritesItemId');
    return (savedId as number[]) || [];
  });
  
  const handleClick = (increment:number, id:number) => {
    setSelectedId(prev => increment === 1 ? [...prev, id] : prev.filter(selectedTea => selectedTea !== id));
    setCount(prev => prev + increment)
  }

  useEffect(() => {
    setSavedItem("count", count)
    setSavedItem("page", page)
    setSavedItem("favoritesItemId", selectedId)
  }, [count, page, selectedId])

  return (
    <>
      <Header title="Welcome to Tea House" subtitle="Discover, save, and collect my favorite Chinese teas"/>
      <Tabs count={count} page={page} updateFunction={setPage} />
      {page === "video" && <VideoContainer />}
      {page === "teas" && <TeaContainer updateFunction={handleClick} selectedId={selectedId} />}
      {page === "favorite" && <FavoriteTeas selectedId={selectedId} updateFunction={handleClick} />}
      <Footer />
    </>
  )
}

export default App
