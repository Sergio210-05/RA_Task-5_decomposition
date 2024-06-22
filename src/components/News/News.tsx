
/**
 * Отрисовывает компонент c новостью
 *
 */

export type TNews = {
  image: string
  title: string
  href: string
}

export const News = ({image, title, href='#'}: TNews) => {
  return (
    <>
      <div className="news">
        <img src={image} alt="site-logo" className="news-icon"/>
        <a href={href} className="news-title">{title}</a>
      </div>
    </>
  )
}
