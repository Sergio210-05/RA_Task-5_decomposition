import './App.css'
import { Chapter } from './components/Chapter/Chapter'
import { Exchange } from './components/Exchange/Exchange'
import { News } from './components/News/News'
import { OnAir } from './components/OnAir/OnAir'
import { Schedule } from './components/Schedule/Schedule'
import { SearchComponent } from './components/SearchComponent/SearchComponent'
import { Television } from './components/TV/Television'
import { TopicComponent } from './components/Topic/TopicComponent'
import { Weather } from './components/Weather/Weather'
import { YaProdacts } from './components/YaProducts/YaProdacts'

function App() {

  return (
    <>
      <div className='container'>
        <Chapter title='Сейчас в СМИ' filters={['в Германии', 'Рекомендуем']}>
          <News title='Путин упростил получение автомобильных номеров' image='#' href='#'/>
          <News title='Суд закрыл дело Демпартии США против России' image='#' href='#'/>
        </Chapter>

        <Exchange ticker='USD MOEX' value={63.52} increment={+0.09}/>
        <Exchange ticker='EUR MOEX' value={70.86} increment={+0.14}/>
        <Exchange ticker='НЕФТЬ' value={64.90} increment={+1.63}/>

        <SearchComponent>
          <YaProdacts title='Видео' href='#'/>
          <YaProdacts title='Картинки' href='#'/>
          <YaProdacts title='Новости' href='#'/>
          <YaProdacts title='Карты' href='#'/>
          <YaProdacts title='Маркет' href='#'/>
          <YaProdacts title='Переводчик' href='#'/>
        </SearchComponent>

        <Chapter title='Погода'>
          <Weather icon='#' currentTemperature={+17} morningTemperature={+17} tonightTemperature={+14}/>
        </Chapter>
        
        <Chapter title='Посещаемое'>
          <TopicComponent title='Недвижимость' description='о сталинках' href='#'/>
          <TopicComponent title='Маркет' description='люстры и светильники' href='#'/>
          <TopicComponent title='Авто.ру' description='привод 4х4 до 500 000' href='#'/>
        </Chapter>

        <Chapter title='Карта Германии'>
          <Schedule title='Расписание' href='#'/>
        </Chapter>

        <Chapter title='Телепрограмма'>
          <Television time={'02:00'} title={'ТНТ.Best'} channel={'ТНТ International'} />
          <Television time={'02:15'} title={'Джинглики'} channel={'Карусель Int'} />
          <Television time={'02:25'} title={'Наедине со всеми'} channel={'Первый'} />
        </Chapter>

        <Chapter title='Эфир'>
          <OnAir img={'#'} title={'Управление как искусство'} channel={'Успех'} />
          <OnAir img={'#'} title={'Ночь. Мир в это время'} channel={'earthTV'} />
          <OnAir img={'#'} title={'Андрей Вознесенский'} channel={'Совершенно секретно'} />
        </Chapter>

      </div>
    </>
  )
}

export default App
