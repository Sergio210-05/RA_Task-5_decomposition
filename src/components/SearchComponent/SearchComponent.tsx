
/**
 * Отрисовывает компонент c поисковой строкой
 *
 */

export type TSearchBar = {
  children: React.ReactNode
  hint?: string
  link?: string
}

export const SearchComponent = ({children, hint='фаза луны сегодня', link='#'}: TSearchBar) => {
  return (
    <>
      <div className="search">
        {children}
        <div className="search-form">
          <input type="text" className="search-input"/>
          <button className="search-button">Найти</button>
          <div className="search-hint">Найдется всё. Например, <a href={link}>{hint}</a>
          </div>
        </div>
      </div>
    </>
  )
}
