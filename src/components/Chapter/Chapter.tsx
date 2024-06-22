/**
 * Отрисовывает компонент с названием раздела сайта
 *
 */

export type TChapter = {
  title: string
  children: React.ReactNode
  filters?: string[] | null
}

export const Chapter = ({title, children, filters=null}: TChapter) => {
  return (
    <>
      <div className="chapter-container">
        <h3 className="chapter-title">{title}</h3>
        { filters ? filters.map((filter, index) => (
          <div className="chapter-filter" key={index}>{filter}</div>
        )) : ''}
        <div className="chapter-content">
          {children}
        </div>
        
      </div>
    </>
  )
}
