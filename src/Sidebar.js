import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import { getTokenFromResponse } from './spotify'
import { useStateValue } from './StateProvider'

function Sidebar() {
  const [{ playlists }, dispatch] = useStateValue()
  console.log(playlists)

  return (
    <div className='sidebar'>
      <img
        className='sidebar__logo'
        src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
        alt=''
      />
      <SidebarOption Icon={HomeIcon} option='ホーム' />
      <SidebarOption Icon={SearchIcon} option='検索' />
      <SidebarOption Icon={LibraryMusicIcon} option='ジャンル' />
      <br />
      <strong className='sidebar__title'>MY LIBRARY</strong>
      <hr />
      <ul className='sidebar__library'>
        <li className='library__list'>メイド・フォー・ユー</li>
        <li className='library__list'>最近再生した曲</li>
        <li className='library__list'>お気に入りの曲</li>
        <li className='library__list'>アルバム</li>
        <li className='library__list'>アーティスト</li>
        <li className='library__list'>ポッドキャスト</li>
      </ul>
      <br />
      <strong className='sidebar__title'>PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption option={playlist.name} />
      ))}
    </div>
  )
}

export default Sidebar
